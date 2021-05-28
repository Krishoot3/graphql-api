import { GraphQLID, GraphQLInt, GraphQLList } from 'graphql'
import { Books } from '../../Entities/Book';
import { BookType } from '../TypeDef/Books'

export const GET_ALL_BOOKS = {
    type: new GraphQLList(BookType),
    async resolve() {
        const allBooks = await Books.find();
        console.log(allBooks)
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
        const { id } = args
        const findBook = await Books.findOne(id);
  
        if(!findBook) {
            throw new Error(`The book with the id: ${id} does not exist`);
        } else {
            return findBook;
        }
    },
};

