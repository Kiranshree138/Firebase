"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Card container */}
      <div className="bg-white p-8 rounded-2xl shadow-md text-center w-80">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">
          Welcome to My Firebase App
        </h1>
        <p className="text-gray-600 mb-6">
          Sign up or sign in to continue to your dashboard.
        </p>

        {/* Buttons */}
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => router.push("/signup")}
            className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Sign Up
          </button>

          <button
            onClick={() => router.push("/signin")}
            className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
          >
            Sign In
          </button>
        </div>
      </div>

      
    </div>
  );
}