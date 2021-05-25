import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLID, GraphQLFloat } from 'graphql'

export const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        author: { type: GraphQLString },
        publication_year: { type: GraphQLInt },
        genres: { type: GraphQLString },
        rating: { type: GraphQLFloat }
    }),
});