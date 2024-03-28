import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold">Study Buddy</h1>
      <p className="text-lg">Login to get started</p>
      <Link className="text-blue-500 hover:text-blue-700" href="/auth/login">
        Login
      </Link>
    </div>
  );
}
