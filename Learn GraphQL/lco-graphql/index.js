import express from 'express';
import resolvers from "./resolvers";
import schema from "./schema";
import {graphqlHTTP} from "express-graphql";

const app = express();

app.get("/", (req, res) => {
    res.send('Up and Running with GraphQL');
});

            // Value Resolved by a Method
// const root = {lco: () => console.log('LearnCodeOnline')}
const root = resolvers;

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(5000, () => console.log('Running at Port 5000'));
