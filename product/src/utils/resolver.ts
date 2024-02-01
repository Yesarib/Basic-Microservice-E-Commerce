import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefs } from './schema';
import CategoryModel from '../models/category';
import UserModel from '../models/user';
import ProductModel from '../models/product';


// Graphql server setup
interface ProductArgs {
    id: string;
}
const resolvers = {
    Query: {
        async categories() {
            return await CategoryModel.find()
        },
        async users() {
            return await UserModel.find();
        },
        async products() {
            return await ProductModel.find();
        },
        async product(_: unknown, args: ProductArgs): Promise<typeof ProductModel | null> {
            return await ProductModel.findById(args.id);
        },
    },
}


const server = new ApolloServer({
    typeDefs,
    resolvers
});

const startServer = async() => {
    const { url }: { url: string } = await startStandaloneServer(server, {
        listen: { port: 4000 }
    });
}




export default startServer;