const express = require('express');
const {buildSchema} = require('graphql');
const {graphqlHTTP} = require('express-graphql');

const schema = buildSchema(`
    type Query{
        description: String
        price: Float
    }
`);

const root = {
  description: 'red shoe',
  price: 52.12,
};

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
}));

app.listen(300, () => {
  console.log('server is running on port 300');
});