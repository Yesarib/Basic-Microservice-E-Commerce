import ProductModel ,{ IProduct } from "../models/product";

const addProduct = async(product:IProduct) => {
    const newProduct = new ProductModel(product);
    await newProduct.save();

    return newProduct;
}

const getAll = async():Promise<IProduct[]> =>  {
    return await ProductModel.find();
}

const getProductById = async(productId:string):Promise<IProduct | null> => {
    return await ProductModel.findById(productId);
}


const productService = {
    addProduct,
    getAll,
    getProductById
}

export default productService;