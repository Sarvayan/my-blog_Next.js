"use client"

import React from 'react'
import Image from "next/image";
import { useEffect } from 'react';

type Post = {
  _id: string;
  title: string;
  description: string;
  image: string;
  createdAt_format: string;
};

function Page({ params }: { params: { id: string } }) {

    const [post, setPost] = React.useState<Post | null>(null);

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_API_URL + "/api/post/" + params.id)
          .then((response) => response.json())
          .then((response) => setPost(response))
          .catch((error) => console.error("Error fetching posts:", error));
      }, [params.id]);

  return (
    <>
      {post ? (
        <>
          <h2 className="text-4xl font-bold mb-4">{post.title}</h2>
          <p className="text-gray-500">Published on {post.createdAt_format}</p>
          <Image
            className="w-full h-48 object-cover mb-4"
            src={post.image}
            alt={post.title}
            width={400}
            height={192}
          />
          <p>{post.description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default Page