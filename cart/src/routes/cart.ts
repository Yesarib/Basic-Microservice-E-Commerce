import express from 'express'
import { addCart, deleteProductFromCart, getUserCart } from '../controllers/cart';

const router = express.Router();

router.post('/', addCart);
router.get('/:userId', getUserCart)
router.delete('/',deleteProductFromCart)

export default router;