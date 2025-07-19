"use client";

import React from "react";
import Image from "next/image";
import { useEffect } from "react";

function Page(context: { params: Promise<{ id: string }> }) {
  const { id } = React.use(context.params);

  type Post = {
    _id: string;
    title: string;
    description: string;
    image: string;
    createdAt_format: string;
  };

  const [post, setPost] = React.useState<Post | null>(null);

  console.log(id);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/api/post/" + id)
      .then((response) => response.json())
      .then((response) => setPost(response))
      .catch((error) => console.error("Error fetching posts:", error));
  }, [id]);

  console.log("Post data:", post);
  return (
    <>
      {post ? (
        <>
          <h2 className="text-4xl font-bold mb-4">{post.title}</h2>
          <p className="text-gray-500">Published on {post.createdAt_format}</p>
          {post.image && (
            <div className="w-full max-w-3xl mx-auto">
              <Image
                className="w-full object-contain mb-4"
                src={post.image}
                alt={post.title}
                width={800}
                height={0}
                sizes="100vw"
              />
            </div>
          )}
          <p>{post.description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Page;
