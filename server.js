const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const colors = require('colors');
const schema = require('./schema')
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// Allow cross-origin
app.use(cors());

// Logging
app.use(morgan('dev'));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`.yellow.bold));