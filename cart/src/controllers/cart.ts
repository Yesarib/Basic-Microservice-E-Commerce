import { RequestHandler } from "express";
import cartService, { Cart } from "../services/cart";


export const addCart:RequestHandler<unknown,unknown,Cart,unknown> = async(req,res,next) => {
    try {
        const { productId, quantity, userId } = req.body;
        const cart = { productId, quantity, userId }
        const result = await cartService.addCart(cart);

        res.status(200).json(result);
    } catch (error) {
        next(error)
    }
}

export const getUserCart:RequestHandler<{userId:string},Cart[],unknown,unknown> = async(req,res,next) => {
    try {
        const { userId } = req.params;

        const cart = await cartService.getUserCart(userId);

        res.status(200).json(cart);
    } catch (error) {
        next(error)
    }
}

export const deleteProductFromCart:RequestHandler<unknown,unknown, {userId:string, productId:string }, unknown> = async(req,res,next) => {
    try {
        const { userId, productId } = req.body;
        
        const result = await cartService.removeCartProduct(userId,productId);
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}