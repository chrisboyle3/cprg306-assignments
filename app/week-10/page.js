"use client";

import { useUserAuth } from "./_utils/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();
  
  useEffect(() => {
    if (user) {
      router.push('/week-8/shopping-list');
    }
  }, [user, router]);

  const handleSignIn = async () => {
    await gitHubSignIn();
  };


  return (
    <main className="min-h-screen py-8">
      {user ? (
        <div>
          <p className="text-white pb-5">
            Welcome, {user.displayName} ({user.email})
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-14"
            type="submit"
            onClick={async () => await firebaseSignOut()}>
            Sign out
          </button>
        </div>
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-14"
          type="submit"
          onClick={handleSignIn}>
          Login
        </button>
      )}      
    </main>
  );
};

export default Page;