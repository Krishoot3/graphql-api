import { GraphQLString } from "graphql";
import { UserType } from "../TypeDef/Users";
import { Users } from "../../Entities/User";

export const CREATE_USER = {
    type: UserType,
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        const { email, password } = args;
        Users.insert(args);
        return args;
    },
};