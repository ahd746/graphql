const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema')
const cors = require('cors')
const path = require('path');




const app = express();
app.use(cors())
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);
//Middlewares
app.use(express.static('../build'))
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html')))

//Set the port and listen 
PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));