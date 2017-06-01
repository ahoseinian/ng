// @flow
import { buildSchema } from 'graphql';

const main = buildSchema(`
  type Query {
    hello: Hello
  }

  type Hello {
    world: String
  }
`);

export default main;
