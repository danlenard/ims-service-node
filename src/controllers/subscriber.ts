import { SubscriberModel } from '../models/subscriber';
import { FeatureModel } from '../models/feature';
import { generateHashedPassword } from '../utils/passwordGenerator';
import { formatSubscriber, formatSubscribers } from '../utils/formatter/subscriberResponse';
import { Op } from 'sequelize';
import { SubscriberStatus } from '../types/subscriber';

export const getSubscriberList = async (req, res) => {
  try {
    const { search } = req.query;

    const whereClause = search
      ? {
          [Op.or]: [
            { phoneNumber: { [Op.like]: `%${search}%` } },
            { username: { [Op.like]: `%${search}%` } },
            { domain: { [Op.like]: `%${search}%` } },
          ],
        }
      : {};

    const subscribers = await SubscriberModel.findAll({
      where: whereClause,
      include: [{ model: FeatureModel, as: "features" }],
    });

    res.json(formatSubscribers(subscribers));
  } catch (err) {
    console.log("Error", err);
    res.status(500).json({ message: "Something went wrong", error: (err as Error).message });
  }
};

export const getSubscriber = async (req, res) => {
  try {
    const { phoneNumber } = req.params;

    const subscriber = await SubscriberModel.findByPk(phoneNumber, { 
      include: [{ model: FeatureModel, as: 'features' }] 
    });

    if (!subscriber) {
      res.status(404).json({ message: 'Subscriber not found' });
      return;
    }

    res.json(formatSubscriber(subscriber));
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong', error: (err as Error).message });
  }
};

export const upsertSubscriber = async (req, res)=> {
  try {
    const { phoneNumber } = req.params;
    const { features, ...subscriberData } = req.body;

    if (subscriberData.phoneNumber !== phoneNumber) {
      res.status(400).json({ message: 'Phone number mismatch' });
      return;
    }

    // Check if subscriber exists, if not create hash password
    const existingSubscriber = await SubscriberModel.findByPk(phoneNumber);

    if (!existingSubscriber) {
      subscriberData.password = await generateHashedPassword();
    }
    console.log(subscriberData)

    const [subscriber] = await SubscriberModel.upsert(subscriberData);

    if (features) {
      await FeatureModel.upsert({ phoneNumber, ...features });
    }

    res.json({ message: 'Subscriber updated', subscriber });
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong', error: (err as Error).message });
  }
};

export const deleteSubscriber = async (req, res) => {
  try {
    const { phoneNumber } = req.params;
    const { hardDelete } = req.body;

    const subscriber = await SubscriberModel.findByPk(phoneNumber);

    if (!subscriber) {
      return res.status(404).json({ message: "Subscriber not found" });
    }

    if (hardDelete) {
      await FeatureModel.destroy({ where: { phoneNumber } });
      await subscriber.destroy();
      return res.json({ message: "Subscriber permanently deleted" });
    } else {
      await subscriber.update({ deletedAt: new Date(), status: SubscriberStatus.DELETED });
      await FeatureModel.update({ deletedAt: new Date() }, { where: { phoneNumber } });
      return res.json({ message: "Subscriber soft deleted" });
    }
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: (err as Error).message });
  }
};