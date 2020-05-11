import React from 'react'


export default function Post({ post }) {
  return (
    <div className="my-5 text-light bd-secondary">
      <div>
        <h2 className="text-success">{post.title}</h2>
        <h5 className="text-primary">{`Written by: ${post.user.name}`}</h5>
        <p>{post.body}</p>
      </div>
    </div>
  )
}
