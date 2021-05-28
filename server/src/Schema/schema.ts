import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { CREATE_BOOK, DELETE_BOOK, UPDATE_BOOK } from "./Mutations/Book";
import { CREATE_USER } from "./Mutations/User";
import { GET_ALL_BOOKS, GET_BOOK } from "./Queries/Book";
import { GET_ALL_USERS } from "./Queries/User"

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllUsers: GET_ALL_USERS,
        getAllBooks: GET_ALL_BOOKS,
        getBook: GET_BOOK
    },
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: CREATE_USER,
        createBook: CREATE_BOOK,
        deleteBook: DELETE_BOOK,
        updateBook: UPDATE_BOOK
    },
});

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});