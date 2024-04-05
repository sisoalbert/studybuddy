"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const handleLoginWithGoogle = () => {
    signIn("google");
  };
  const handleLoginWithApple = () => {
    console.log("Ouch");
  };
  let loginElem = (
    <div className="flex flex-col">
      <button
        className="p-3 mb-10 bg-blue-600 align-center justify-center text-white font-bold rounded "
        onClick={() => handleLoginWithGoogle()}
      >
        Login with Google
      </button>
      <button
        className="p-3 bg-blue-600 align-center justify-center text-white font-bold rounded "
        onClick={() => handleLoginWithApple()}
      >
        Login with Apple
      </button>
    </div>
  );

  if (session && session.user) {
    loginElem = (
      <div>
        Logged in as {session.user.email}
        <button onClick={() => signOut()}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <div className="text-2xl font-bold my-4">My App</div>
      {loginElem}
    </div>
  );
}
