import { Schema, model, Types} from 'mongoose';


interface Product {
    name: string
    desc: string
    code: string
    price: number
    category: Types.ObjectId
}

const productSchema = new Schema<Product>({
    name: { type: String, required:true},
    desc: { type: String, required:true},
    code: { type: String, required:true},
    price: { type: Number, required:true},
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true }, 
});

const ProductModel = model<Product>('Product', productSchema);

export default ProductModel;