import React from "react";
import Image from "next/image";

export const metadata = {
  title: "About Us",
  description: "A personal blog about cricketers, actors, and music composers",
};

function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-indigo-700 text-white">
      <main className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 lg:mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Welcome to Our Creative Space
          </h1>
          <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
            A personal blog sharing thoughts and insights on cricketers, actors,
            and music composers — celebrating talent and creativity across
            fields
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center text-gray-800">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-2 rounded-xl shadow-xl transform rotate-1 hover:rotate-0 transition duration-300">
              <Image
                src="https://images.unsplash.com/photo-1541393403236-579ff9fec240?q=80&w=977&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Creative Inspiration"
                width={1470}
                height={640}
                className="w-full h-full object-cover rounded-lg"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                Why This Blog Exists
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                This space is all about expressing admiration for artists and
                athletes who inspire. From the magic of cricket fields to the
                melodies of timeless music and the power of cinema — every post
                reflects genuine passion.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Whether it is a deep dive into a legendary match, an actor’s
                breakout role, or a music composer’s iconic score — this blog
                celebrates brilliance.
              </p>
              
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800">
          {[
            {
              title: "Passion",
              description:
                "Each post is written with genuine appreciation for talent and storytelling.",
              icon: "🔥",
            },
            {
              title: "Creativity",
              description:
                "Exploring unique angles and perspectives on familiar names and moments.",
              icon: "🎨",
            },
            {
              title: "Inspiration",
              description:
                "Highlighting those who move us through sport, screen, and sound.",
              icon: "🌟",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Page;
