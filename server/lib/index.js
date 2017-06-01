// @flow
import dotenvConfig from 'dotenv/config';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import resolvers from './resolvers';

const app = express();

app.use(
  '/',
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  }),
);

// SERVER SETUP

const { SERVER_PORT } = process.env;

if (!SERVER_PORT) {
  throw new Error('no port specified!');
}
app.listen(SERVER_PORT, () => {
  console.log('Listening on port 3000!');
});
