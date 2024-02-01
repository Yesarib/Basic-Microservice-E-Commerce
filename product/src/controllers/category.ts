import { RequestHandler } from "express";
import { ICategory } from "../models/category";
import categoryService from "../services/category";


export const addCategory:RequestHandler<unknown,unknown,ICategory,unknown> = async(req,res,next) => {
    try {
        const { name } = req.body;
        const category:ICategory = {name};
        const newCategory:ICategory = await categoryService.addCategory(category);

        res.status(201).json({success:true, newCategory});

    } catch (error) {
        next(error)
    }
}

export const getCategories:RequestHandler<unknown, { success:boolean, categories: ICategory[]}, unknown,unknown> = async(req,res,next) => {
    try {
        const categories = await categoryService.getCategories();
        res.status(200).json({success:true, categories});

    } catch (error) {
        next(error)
    }
}

export const getCategoryById:RequestHandler<{ categoryId: string },unknown,unknown,unknown> = async(req,res,next) => {
    try {
        const { categoryId } = req.params;
        const category = await categoryService.getCategoryById(categoryId);
        res.status(200).json({success:true, category})
    } catch (error) {
        next(error)
    }
}