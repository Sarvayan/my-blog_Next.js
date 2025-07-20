"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Home() {
  type Post = {
    _id: string;
    title: string;
    description: string;
    image: string;
    short_description: string;
  };

  const [posts, setPosts] = useState<Post[] | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/api/posts")
      .then((response) => response.json())
      .then((response) => setPosts(response))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  /* function searchPost(){
    setPosts(null)
    setSearchQuery("");
    fetch(process.env.NEXT_PUBLIC_API_URL + "/api/posts?q=" + searchQuery)
    .then((response) => response.json())
      .then((response) => setPosts(response))
      .catch((error) => console.error("Error fetching posts:", error));
  } */

  const filteredPosts =
    posts?.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.short_description.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-4 shadow-lg">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Welcome to Our Creative Space
          </h1>
          <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl">
            A personal blog sharing thoughts and insights on cricketers, actors,
            and music composers — celebrating talent and creativity across
            fields
          </p>
        </div>
      </header>

      <section className="container mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Latest Articles
          </h2>
          <div className="flex w-full md:w-auto">
            <input
              type="text"
              className="px-4 py-2 border border-gray-300 rounded-l-lg w-full transition-all duration-300"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="mx-2 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-r-lg transition-colors duration-300 flex items-center justify-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="ml-2 hidden sm:inline">Search</span>
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-8">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              {posts ? "No articles found" : "Loading articles..."}
            </h3>
            <p className="mt-1 text-gray-500">
              {posts
                ? "Try adjusting your search or filter to find what you're looking for."
                : "Please wait while we fetch the latest content for you."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Link href={"/post/" + post._id} key={post._id}>
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <div className="relative h-48 w-full">
                    <Image
                      className="object-cover"
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 3}
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.short_description}
                    </p>
                    <div className="mt-auto">
                      <button className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-300 flex items-center">
                        Read more
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;
