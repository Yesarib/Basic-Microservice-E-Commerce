import { RequestHandler } from "express";
import authService from "../services/auth";
import  { User } from "../models/user";

interface Login {
    email:string,
    password:string
}

export const login:RequestHandler<unknown,unknown,Login,unknown> = async(req,res,next) => {
    try {
        const { email, password } = req.body;

        const result = await authService.signIn(email,password);
        res.status(200).json({success:true, result} )
    } catch (error) {
        next(error)
    }
}

export const register:RequestHandler<unknown,unknown,User,unknown> = async(req,res,next) => {
    try {
        const newUser = req.body;
        const result = await authService.signUp(newUser);

        res.status(200).json({success:true, result} )
    } catch (error) {
        next(error)
    }
}