import { NextFunction, Request, Response } from 'express';
import JWT from 'jsonwebtoken'

interface CustomRequest extends Request {
    payload?: unknown;
}

const tokenService = {
    signAccessToken: (userId:string) => {
        return new Promise((resolve, reject) => {
            const payload = {
                userId,
            }
            const secret:string | undefined = process.env.ACCESS_TOKEN_SECRET;
            if (secret === undefined) {
                return reject(new Error('Access token secret does not found.'));
            }
            const option = {
                expiresIn: "1y",
                issuer: 'pickurpage.com',
                audience:userId,
            }
            JWT.sign(payload,secret,option, (err,token) => {
                if(err) return reject(err)
                resolve(token)
            })
        })
    },

    verifyAccessToken: (req: CustomRequest,res:Response,next:NextFunction)  => {
        if(!req.headers['authorization']) return next(new Error('Unaouthorized'));

        const authHeader = req.headers['authorization'];
        const bearerToken = authHeader.split(' ');
        const token = bearerToken[1];
        const secret:string | undefined = process.env.ACCESS_TOKEN_SECRET;
            if (secret === undefined) {
                return new Error('Access token secret does not found.');
            }
        JWT.verify(token, secret, (err, payload) => {
            if(err) {
                const message = err.name === 'JsonWebTokenError' ? 'Unauthorized': err.message
                return next(new Error(`Unauthorized ${message}`))
            }
            req.payload = payload
            next();
        })
    },
    signRefreshToken: (userId:string) => {
        return new Promise((resolve, reject) => {
            const payload = {
                userId,
            }
            const secret:string | undefined = process.env.REFRESH_TOKEN_SECRET
            if (secret === undefined) {
                return reject(new Error('Refresh token secret does not found.'));
            }
            const options = {
                expiresIn: "1y",
                issuer: "pickurpage.com",
                audience: userId
            }
            JWT.sign(payload,secret,options, (err, token) => {
                if (err) return reject(err)
                resolve(token)
            })
        })
    },

}

export default tokenService