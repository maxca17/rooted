"use client";

import React from "react";

export default function EventContent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Rooted Expo</h1>
      <p className="text-lg text-gray-700 mb-8">
        Join us for an amazing experience celebrating Texas CPG brands!
      </p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => alert("More information coming soon!")}
      >
        Learn More
      </button>
    </div>
  );
}
