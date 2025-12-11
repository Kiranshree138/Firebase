"use client";
import { useState } from "react";
import { auth, db } from "../firebaseConfig";

import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const saveProfile = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (user) {
      await setDoc(doc(db, "users", user.uid), {
        name,
        age,
        email: user.email,
      });
      alert("Profile saved!");
      router.push("/dashboard");
    } else {
      alert("Please sign in first");
      router.push("/signin");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-80">
        <h1 className="text-2xl font-bold mb-6 text-center">Create Profile</h1>
        <form onSubmit={saveProfile} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border p-2 rounded"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Age"
            className="border p-2 rounded"
            onChange={(e) => setAge(e.target.value)}
          />
          <button className="bg-purple-500 text-white p-2 rounded hover:bg-purple-600">
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
}