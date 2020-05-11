import React from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Post from './Post'


const POSTS_QUERY = gql`
  query POSTSQuery {
    posts {
      id
      userId
      title
      body,
      user{
        name
      }
    }
  }
`;

export default function Posts() {
  return (
    <Query query={POSTS_QUERY}>
      {
        ({ data, loading, error }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) console.log(error);
          return (
            <div className="my-5 text-light bd-secondary">
              {data.posts.map((post) => <Post key={post.id} post={post} />)}
            </div>
          )
        }
      }
    </Query>

  )
}


// {data.posts.map(post => (
//   <p>post</p>
// ))}