import React from 'react';
import Posts from './components/Posts'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container bg-dark">
        <h1 className="text-light text-center">The Blog</h1>
        <Posts />
      </div>
    </ApolloProvider>
  );
}

export default App;
