"use client";
import React, { useState } from "react";

function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const nameRegex = /^[A-Za-z\s]{2,50}$/;
  const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  const messageRegex = /^.{10,1000}$/;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nameRegex.test(name)) {
      console.log(
        "Invalid name, Allows only letters and spaces (2-50) characters and No numbers or special symbols"
      );
    }
    if (!emailRegex.test(email)) {
      console.log("Invalid email address");
    }
    if (!messageRegex.test(message)) {
      console.log(
        "Invalid message, characters must be within 10-1000 characters"
      );
    }

    console.log(name);
    console.log(email);
    console.log(message);
  }

  return (
    <div>
      <h1>Contact Us</h1>

      <p>
        We build smart, simple, and impactful solutions for real people. Get in
        touch with Sarvi Corporation 📞 Phone +94 76 123 4567 📧 Email
        [msarvi19082000@gmail.com](mailto:msarvi19082000@gmail.com) 📍 Location
        Trincomalee, Sri Lanka 🕘 Office Hours Mon–Fri: 9:00 AM – 5:00 PM
        Sat–Sun: 10:00 AM – 3:00 PM
      </p>

      <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
      <form className="w-full max-w-lg">
        <div className="flex items-center mb-4">
          <label htmlFor="name" className="w-1/4">
            Name:
          </label>
          <input
            type="text"
            id="name"
            onChange={(event) => setName(event.target.value)}
            className="border rounded px-2 py-1 w-3/4"
          />
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="email" className="w-1/4">
            Email:
          </label>
          <input
            type="email"
            id="email"
            onChange={(event) => setEmail(event.target.value)}
            className="border rounded px-2 py-1 w-3/4"
          />
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="message" className="w-1/4">
            Message:
          </label>
          <textarea
            id="message"
            onChange={(event) => setMessage(event.target.value)}
            className="border rounded px-2 py-1 w-3/4"
            rows={4}
          ></textarea>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Page;
