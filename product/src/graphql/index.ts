import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefs } from "./schema";
import { resolvers } from "./resolver";


const API_PORT = 4000;

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const startServer = async() => {
    const { url }: { url: string } = await startStandaloneServer(server, {
        listen: { port: API_PORT }
    })

    console.log(`GraphQL server is ready on ${url}`);
}

export default startServer;