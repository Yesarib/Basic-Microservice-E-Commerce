import { RequestHandler } from 'express';
import { IProduct } from '../models/product';
import productService from '../services/product';

export const addProduct:RequestHandler<unknown,unknown,IProduct,unknown> = async(req,res,next) => {
    console.log(req.body);
    
    try {
        const { name, desc, code, price, category } = req.body;
        const product:IProduct = {name, desc, code, price, category}
        const newProduct = await productService.addProduct(product)
        res.status(201).json({success:true, newProduct})
    } catch (error) {
        next(error)
    }
}

export const getAll:RequestHandler<unknown, { success: boolean, products: IProduct[] },unknown,unknown> = async(req,res,next) => {
    try {
        const products = await productService.getAll();
        res.status(200).json({success:true, products});
    } catch (error) {
        next(error)
    }
}

export const getProductById:RequestHandler<{ productId: string },unknown,unknown,unknown> = async(req,res,next) => {
    try {
        const { productId } = req.params;
        const product = await productService.getProductById(productId);
        res.status(200).json({success:true, product})
    } catch (error) {
        next(error)
    }
}

