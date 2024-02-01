export const typeDefs =  `#graphql
    type Product {
        id: ID!,
        name: String!,
        desc: String!,
        code: String!,
        price: Int!,
        category: [Category!]
    }

    type User {
        id: ID!,
        firstName: String!,
        lastName: String!,
        email: String!,
        password: String!,
        profileImage: String,
    }

    type Category {
        id: ID!,
        name: String!
    }

    type Query {
        categories: [Category],
        category(id: ID!): Category
        products: [Product],
        product(id:ID!): Product
        users: [User]
    }

`


