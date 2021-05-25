import { GraphQLList } from 'graphql'
import { Books } from '../../Entities/Book';
import { BookType } from '../TypeDef/Books'

export const GET_ALL_BOOKS = {
    type: new GraphQLList(BookType),
    resolve() {
        return Books.find();
    },
};