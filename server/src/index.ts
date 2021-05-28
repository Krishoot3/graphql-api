import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema/schema";
import cors from 'cors'
import { createConnection } from "typeorm";
import { Users } from "./Entities/User";
import { Books } from "./Entities/Book";

const main = async () => {

    await createConnection({
        type: "mysql",
        database: "graphql-api",
        username: "root",
        password: "root",
        logging: true,
        //when do you want to create a new tables, change synchronize to true
        synchronize: false,
        entities: [Users, Books],
    });

    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true
    }));

    app.listen(3000, () => {
        console.log("Server is running on port http://localhost:3000")
    })
};

main().catch((err) => {
    console.log(err);
});