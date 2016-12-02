const graphql = require('graphql').graphql
const express = require('express')
const graphqlHTTP = require('express-graphql')
const Schema = require('./schema')
const app = express()

app.use('/graphql', graphqlHTTP
    ({
        schema: Schema,
        pretty: true,
        graphiql: true
    })
)

app.listen(5500, function(err) {
    console.log('GraphQL Server is now running on localhost:5500/graphql');
});
