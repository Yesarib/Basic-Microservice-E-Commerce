import express from 'express'
import { addCategory, getCategories, getCategoryById } from '../controllers/category';

const router = express.Router();

router.post('/', addCategory);
router.get('/', getCategories);
router.get('/:categoryId', getCategoryById)

export default router;