"use client";
import { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";

import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      router.push("/signin");
    } else {
      const fetchProfile = async () => {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) setProfile(docSnap.data());
      };
      fetchProfile();
    }
  }, []);

  if (!profile)
    return <p className="text-center mt-10 text-lg">Loading dashboard...</p>;

  return (
    <div className="flex items-center justify-center h-screen bg-green-50">
      <div className="bg-white p-6 rounded-xl shadow-md w-96 text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome, {profile.name}!</h1>
        <p className="text-gray-700 mb-2">Email: {profile.email}</p>
        <p className="text-gray-700 mb-6">Age: {profile.age}</p>
        <button
          onClick={() => {
            auth.signOut();
            router.push("/signin");
          }}
          className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}