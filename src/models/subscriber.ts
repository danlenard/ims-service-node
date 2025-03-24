import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db";
import { FeatureModel } from "./feature.ts";
import { SubscriberStatus, Subscriber } from "../types/subscriber.ts";

interface SubscriberCreationAttributes extends Subscriber {}

class SubscriberModel extends Model<Subscriber, SubscriberCreationAttributes> implements Subscriber {
  public phoneNumber!: string;
  public username!: string;
  public password!: string;
  public domain!: string;
  public status!: SubscriberStatus;
  public deletedAt?: Date | null;
  public features?: FeatureModel;
}

SubscriberModel.init(
  {
    phoneNumber: {
      type: DataTypes.STRING,
      primaryKey: true,
      field: "phone_number",
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    domain: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM(...Object.values(SubscriberStatus)),
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "deleted_at",
    },
  },
  {
    sequelize,
    modelName: "Subscriber",
    tableName: "subscribers",
    timestamps: false,
    defaultScope: {
      attributes: { exclude: ["password"] }, // ✅ Hides password by default
    },
  }
);

SubscriberModel.hasOne(FeatureModel, { foreignKey: "phone_number", as: "features" });
FeatureModel.belongsTo(SubscriberModel, { foreignKey: "phone_number", as: "subscriber" });

export { SubscriberModel };
