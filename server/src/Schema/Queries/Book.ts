import { GraphQLID, GraphQLList, GraphQLString } from 'graphql';
import { Books, BookHistory } from '../../Entities/Book';
import { BookType } from '../TypeDef/Books';
import jwt from 'jsonwebtoken';

export const GET_ALL_BOOKS = {
    type: new GraphQLList(BookType),
    args: { 
        token: { type: GraphQLString },
    },
    async resolve(parents: any, args: any) {
        const { token } = args;

        let decodeToken = jwt.verify(token, 'secret');
        if (!decodeToken) {
            throw new Error("Invalid token!");
        }

        const allBooks = await Books.find();
        if(allBooks === null || allBooks === undefined || allBooks.length === 0 ){
            throw new Error("Error or no data in DB");
        } else {
            return allBooks;
        }
    },
};

export const GET_BOOK_HISTORY = {
    type: new GraphQLList(BookType),
    args: { 
        id: { type: GraphQLID },
        token: { type: GraphQLString },
    },
    async resolve(paranet: any, args: any) {
        const { id, token } = args;
        
        let decodeToken = jwt.verify(token, 'secret');
        if (!decodeToken) {
            throw new Error("Invalid token!");
        }

        const allBooks = await BookHistory.find({ id: id });
        if(allBooks === null || allBooks === undefined || allBooks.length === 0 ){
            throw new Error("Error or no data in DB");
        } else {
            return allBooks;
        }
    },
};

export const GET_BOOK = {
    type: BookType,
    args: { id: { type: GraphQLID } },
    async resolve(paranet: any, args: any) {

        const { id } = args;
        const findBook = await Books.findOne(id);
  
        if(!findBook) {
            throw new Error(`The book with the id: ${id} does not exist`);
        } else {
            return findBook;
        }
    },
};

