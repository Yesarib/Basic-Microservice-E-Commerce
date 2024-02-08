import client from '../helpers/redis'
import { v4 as uuidv4 } from 'uuid'

export interface Cart {
    productId: [string],
    quantity: number,
    userId: string
}

const CART_KEY_PREFIX = 'cart:user:';

const addCart = async(cart:Cart): Promise<{ success: boolean, message: string }> => {
    const userCartKey:string = CART_KEY_PREFIX + cart.userId;

    const newItem = {
        id: uuidv4(),
        productId: cart.productId,
        quantity: cart.quantity,
    }

    try {
        await client.rPush(userCartKey, JSON.stringify(newItem));
        console.log('Product successfully added to cart.');
        return { success: true, message: 'Product successfully added to cart.' };
    } catch (err) {
        console.log(`There is an error ocured when product adding to cart`, err);
        return { success: false, message: 'There is an error ocured when product adding to cart' };
    }
}

const getUserCart = async(userId:string):Promise<Cart[]> => {
    const userCartKey:string = CART_KEY_PREFIX + userId;

    const userCart = await client.lRange(userCartKey, 0, -1);
    return userCart.map(item => JSON.parse(item));
}

const removeCartProduct = async (userId: string, productId: string): Promise<{ success: boolean, message: string }> => {
    const userCartKey: string = CART_KEY_PREFIX + userId;

    const userCart = await client.lRange(userCartKey, 0, -1);

    const index = userCart.findIndex((item: string) => {
        const parsedItem = JSON.parse(item);
        return parsedItem.productId === productId;
    });

    if (index !== -1) {
        await client.lRem(userCartKey, 1, userCart[index]);
        return { success: true, message: 'Product successfully removed from cart.' };
    } else {
        return { success: false, message: 'Product not found in cart.' };
    }
}

const cartService = {
    addCart,
    getUserCart,
    removeCartProduct,
}

export default cartService;