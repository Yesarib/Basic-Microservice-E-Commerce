import ProductModel, { IProduct } from "../models/product";


export const resolvers = {
    Query:{

        products: async() => {
            return await ProductModel.find();
        },

        product: async( _:unknown, args: {id: string}) => {
            const { id } = args;

            return await ProductModel.findById(id);
        },

        productsByCategory: async(_:unknown, args: {categoryId: string}) => {
            const products = await ProductModel.find({category:args.categoryId});

            return products;
        }


    },

    Mutation:{
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        addProduct: async(parent:unknown, args: { product: IProduct }, context:unknown, info:unknown) => {
            const { name, desc, code, price, category } = args.product;
            const product = new ProductModel({
                name, desc, code, price, category
            });

            await product.save();
            return product;
        }
    }
}