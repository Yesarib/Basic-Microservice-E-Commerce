import client from '../helpers/redis'
import { v4 as uuidv4 } from 'uuid'

export interface Cart {
    productId: [string],
    quantity: number,
    userId: string
}

const CART_KEY_PREFIX = 'cart:user:';

const addCart = async(cart:Cart) => {
    const userCartKey:string = CART_KEY_PREFIX + cart.userId;

    const newItem = {
        id: uuidv4(),
        productId: cart.productId,
        quantity: cart.quantity,
    }

    await client.rPush(userCartKey, JSON.stringify(newItem))
    .then(() => {
        console.log('Product successfully added to cart.');        
        return { success:true, message:'Product successfully added to cart.'}
    }).catch((err) => console.log(`There is an error ocured when product adding to cart`, err));
}

const getUserCart = async(userId:string):Promise<Cart[]> => {
    const userCartKey:string = CART_KEY_PREFIX + userId;

    const userCart = await client.lRange(userCartKey, 0, -1);
    return userCart.map(item => JSON.parse(item));
}

const cartService = {
    addCart,
    getUserCart,
}

export default cartService;