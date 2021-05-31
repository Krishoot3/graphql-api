import { GraphQLString, GraphQLInt, GraphQLFloat, GraphQLID } from "graphql";
import { MessageType } from "../TypeDef/Messages"
import { Books, BookHistory } from "../../Entities/Book";
import jwt from "jsonwebtoken";

export const CREATE_BOOK = {
    type: MessageType,
    args: {
        title: { type: GraphQLString },
        author: { type: GraphQLString },
        publication_year: { type: GraphQLInt },
        genres: { type: GraphQLString },
        rating: { type: GraphQLFloat },
        token: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        const { title, author, publication_year, genres, rating, token } = args;

        let decodeToken = jwt.verify(token, 'secret');
        if (!decodeToken) {
            throw new Error("Invalid token!");
        }
        
        const insertBook = await Books.insert(args);
        if(insertBook == null || insertBook == undefined) {
            throw new Error("Error");
        } else {
            return { successful: true, message: "Book created"};
        }
    },
};
export const DELETE_BOOK = {
    type: MessageType,
    args: { 
        id: { type: GraphQLID },
        token: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        const { id, token } = args;

        let decodeToken = jwt.verify(token, 'secret');
        if (!decodeToken) {
            throw new Error("Invalid token!");
        }

        const findBook = await Books.findOne({ id: id });
        if(!findBook) {
            throw new Error(`The book with the id: ${id} does not exist`);
        } else {
            await Books.delete(id)
            return { successful: true, message: "Book deleted"};
        }
    },
};

export const UPDATE_BOOK = {
    type: MessageType,
    args: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        author: { type: GraphQLString },
        publication_year: { type: GraphQLInt },
        genres: { type: GraphQLString },
        rating: { type: GraphQLFloat },
        token: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        const { id, title, author, publication_year, genres, rating, token } = args;

        let decodeToken = jwt.verify(token, 'secret');
        if (!decodeToken) {
            throw new Error("Invalid token!");
        }

        const findBook = await Books.findOne({ id: id });
        if (!findBook) {
            throw new Error(`The book with the id: ${id} does not exist`);
        } else {
            await Books.update( {id: id}, {title, author, publication_year, genres, rating});
            await BookHistory.insert({ id, title, author, publication_year, genres, rating});
            return { successful: true, message: "Book updated"};
        }
    },
}