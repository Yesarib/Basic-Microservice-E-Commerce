import express from 'express'
import { addProduct, getAll, getProductById } from '../controllers/product';

const router = express.Router();

router.post('/', addProduct);
router.get('/', getAll);
router.get('/:productId', getProductById)

export default router;