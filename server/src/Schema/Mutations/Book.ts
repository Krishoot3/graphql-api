import { GraphQLString, GraphQLInt, GraphQLFloat } from "graphql";
import { BookType } from "../TypeDef/Books";
import { Books } from "../../Entities/Book";

export const CREATE_BOOK = {
    type: BookType,
    args: {
        title: { type: GraphQLString },
        author: { type: GraphQLString },
        publication_year: { type: GraphQLInt },
        genres: { type: GraphQLString },
        rating: { type: GraphQLFloat }
    },
    async resolve(parent: any, args: any) {
        const { title, author, publication_year, genres, rating } = args;
        Books.insert(args);
        return args;
    },
};