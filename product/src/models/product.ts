import { Schema, model, Types} from 'mongoose';


export interface IProduct {
    name: string
    desc: string
    code: string
    price: number
    category: Types.ObjectId
}

const productSchema = new Schema<IProduct>({
    name: { type: String, required:true},
    desc: { type: String, required:true},
    code: { type: String, required:true},
    price: { type: Number, required:true},
    category: { type: Schema.Types.ObjectId, ref: 'Category', }, 
});

const ProductModel = model<IProduct>('Product', productSchema);

export default ProductModel;