import React from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';



export default function Post({ post }) {

  const USER_QUERY = gql`
  query UserQuery {
    user(id:${post.userId}) {
      id
      name
      email
    }
  }
`;

  return (
    <Query query={USER_QUERY}>
      {
        ({ data, loading, error }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) console.log(error);
          return (
            <div className="my-5 text-light bd-secondary">
              <div>
                <h2 className="text-success">{post.title}</h2>
                <h5 className="text-primary">{`Written by: ${data.user.name}`}</h5>
                <p>{post.body}</p>
              </div>
            </div>
          )
        }
      }
    </Query>
  )
}
