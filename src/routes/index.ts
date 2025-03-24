import { Router } from 'express';
import {
  getSubscriber,
  getSubscriberList,
  upsertSubscriber,
  deleteSubscriber,
} from '../controllers/subscriber.ts';

const router = Router();

router.get('/subscriber', getSubscriberList);
router.get('/subscriber/:phoneNumber', getSubscriber);
router.put('/subscriber/:phoneNumber', upsertSubscriber);
router.delete('/subscriber/:phoneNumber', deleteSubscriber);

export default router;