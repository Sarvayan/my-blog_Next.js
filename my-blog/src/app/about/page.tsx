import React from "react";
import Image from "next/image";

function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <main className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Sarvi Corporation</span>
          </h2>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
            Where your ideas meet intelligent innovation
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Section - Replace with your actual image */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-2 rounded-xl shadow-xl transform rotate-1 hover:rotate-0 transition duration-300">
              <Image
                src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Sarvi Corporation Team"
                width={1470}
                height={640}
                className="w-full h-full object-cover"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              Our <span className="text-blue-600">Story</span>
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Welcome to Sarvi Corporation – where your ideas meet intelligent
              innovation. We are a forward-thinking software company led by
              Sarvayan, committed to delivering powerful, efficient, and
              easy-to-use digital solutions.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our passionate team of developers and designers work hand-in-hand
              with clients to bring their visions to life through smart
              technology and creative design.
            </p>
            <div className="mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-md">
                Meet Our Team
              </button>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation",
              description:
                "We push boundaries to create cutting-edge solutions that stand out in the market.",
              icon: "💡",
            },
            {
              title: "Excellence",
              description:
                "Quality is at the core of everything we do, ensuring flawless execution.",
              icon: "🏆",
            },
            {
              title: "Collaboration",
              description:
                "We believe great things happen when brilliant minds work together.",
              icon: "🤝",
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
