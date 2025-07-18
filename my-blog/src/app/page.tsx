"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  type Post = {
    _id: string;
    title: string;
    description: string;
    image: string;
    short_description: string;
  };

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/api/posts")
      .then((response) => response.json())
      .then((response) => setPosts(response))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);
  return (
    <>
      <main className="container mx-auto px-4 py-6">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Blog</h2>
        <p>
          A personal blog sharing thoughts and insights on cricketers, actors,
          and music composers — celebrating talent and creativity across fields
        </p>
      </main>
      <div className="flex justify-end px-4">
        <input
          type="text"
          className="px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Search..."
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md ml-4">
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {(posts as Post[]).map((post, index) => (
          <Link href={'/post/' + post._id} key={index}>
          <div key={index} className="border border-gray-200 p-4">
            <Image
              className="w-full h-48 object-cover mb-4"
              src={post.image}
              alt={post.title}
              width={400}
              height={192}
            />
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.short_description}</p>
          </div>
          </Link>
        ))}
      </div>
    </>
  );
}
