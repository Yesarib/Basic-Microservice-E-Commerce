import { Schema, model} from 'mongoose';

interface Category{
    name: string
    
}
const categorySchema = new Schema<Category>({
    name: { type: String, required: true },
});

const CategoryModel = model<Category>('Category', categorySchema);

export default CategoryModel;