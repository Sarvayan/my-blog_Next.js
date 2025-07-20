"use client";

import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function Post(context: { params: Promise<{ id: string }> }) {
  const { id } = React.use(context.params);
  const router = useRouter();

  type Post = {
    _id: string;
    title: string;
    description: string;
    image: string;
    createdAt_format: string;
    content?: string; 
  };

  const [post, setPost] = React.useState<Post | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(process.env.NEXT_PUBLIC_API_URL + "/api/post/" + id)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Post not found");
        }
        return response.json();
      })
      .then((response) => {
        setPost(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-gray-500 py-10">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md bg-red-50 border border-red-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Error Loading Post
          </h2>
          <p className="text-red-700 mb-6">{error}</p>
          <button
            onClick={() => router.back()}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Post Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The requested post could not be found.
          </p>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <article className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Post Header */}
          <header className="p-6 sm:p-8 border-b border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                {post.createdAt_format}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              {post.title}
            </h1>
            {post.description && (
              <p className="text-lg text-gray-600 mb-6">{post.description}</p>
            )}
          </header>

          {/* Featured Image */}
          {post.image && (
            <div className="w-full aspect-video relative overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </div>
          )}

          {/* Post Content */}
          <div className="p-6 sm:p-8">
            <div className="prose max-w-none prose-lg">
              {post.content ? (
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              ) : (
                <p className="text-gray-700 leading-relaxed">
                  {post.description}
                </p>
              )}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Post;
