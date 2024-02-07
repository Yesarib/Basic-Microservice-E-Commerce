import express from 'express'
import { addCart, getUserCart } from '../controllers/cart';

const router = express.Router();

router.post('/', addCart);
router.get('/:userId', getUserCart)

export default router;