import { GraphQLList } from 'graphql'
import { Users } from '../../Entities/User';
import { UserType } from '../TypeDef/Users'

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve() {
        return Users.find();
    },
};