import { RequestHandler } from "express";
import orderService, { IOrder, IOrderItems } from "../services/order";


export const addOrder:RequestHandler<unknown,IOrder,IOrder,unknown> = async(req,res,next) => {
    try {
        // const { user_id, order_date, total_price, order_status } = req.body;
        const order = req.body

        const response = await orderService.addOrder(order);

        res.status(200).json(response)
    } catch (error) {
        next(error)
    }
}

export const getOrders:RequestHandler<unknown, IOrder[], unknown,unknown> = async(req,res,next) => {
    try {
        const response = await orderService.getOrders();

        res.status(200).json(response);
    } catch (error) {
        next(error)
    }
}

export const addOrderItems:RequestHandler<unknown,IOrderItems,IOrderItems,unknown> = async(req,res,next) => {
    try {
        
        const orderItems = req.body

        const response = await orderService.addOrderItems(orderItems);

        res.status(200).json(response)
    } catch (error) {
        next(error)
    }
}

export const getOrderItems:RequestHandler<unknown, IOrderItems[], unknown,unknown> = async(req,res,next) => {
    try {
        const response = await orderService.getOrderItems();

        res.status(200).json(response);
    } catch (error) {
        next(error)
    }
}