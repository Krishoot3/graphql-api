import { GraphQLObjectType, GraphQLString, GraphQLBoolean } from 'graphql'

export const MessageType = new GraphQLObjectType({
    name: "Message",
    fields: () => ({
        successful: { type: GraphQLBoolean },
        message: { type: GraphQLString },
    }),
});

export const TokenType = new GraphQLObjectType({
    name: "Token",
    fields: () => ({
        token: { type: GraphQLString }
    }),
});