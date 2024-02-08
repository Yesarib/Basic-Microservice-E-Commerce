import express from 'express'
import { addOrder, addOrderItems, getOrderItems, getOrders } from '../controllers/order';

const router = express.Router();

router.get('/orders', getOrders)
router.post('/orders', addOrder)
router.get('/orderItems',getOrderItems)
router.post('/orderItems', addOrderItems)

export default router;