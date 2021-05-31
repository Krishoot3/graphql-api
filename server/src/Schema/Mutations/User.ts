import { GraphQLString } from "graphql";
import { UserType } from "../TypeDef/Users";
import { Users } from "../../Entities/User";
import { TokenType } from "../TypeDef/Messages";
import jwt from "jsonwebtoken";

export const CREATE_USER = {
    type: UserType,
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        const { email, password } = args;
        await Users.insert(args);
        return args;
    },
};
export const USER_LOGIN = {
    type: TokenType,
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        const { email, password } = args;

        const findUser = await Users.findOne({ email: email });
        
        if(!findUser) {
            throw new Error(`The user with the email: ${email} does not exist`);
        } else {
            let buff = new Buffer(findUser.password, 'base64');
            let userPassDecode = buff.toString('ascii');
            console.log(password)
            console.log(userPassDecode)
            if(password.localeCompare(userPassDecode)) {
                let token = jwt.sign( { email: email }, "secret", {
                    expiresIn: 86400 // expires in 24 hours
                  });
                  return { token: token };
            } else {
                throw new Error("Wrong password!");
            }
        }
        
    },
};