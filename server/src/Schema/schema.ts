import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { CREATE_BOOK } from "./Mutations/Book";
import { CREATE_USER } from "./Mutations/User";
import { GET_ALL_BOOKS } from "./Queries/Book";
import { GET_ALL_USERS } from "./Queries/User"

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllUsers: GET_ALL_USERS,
        getAllBooks: GET_ALL_BOOKS
    },
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: CREATE_USER,
        createBook: CREATE_BOOK
    },
});

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});