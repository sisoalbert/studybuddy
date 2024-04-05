import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";

export default async function page() {
  const session = await getServerSession();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold">Study Buddy</h1>
      {session ? (
        <Link href="/protected">Protected</Link>
      ) : (
        <Link href="/auth/login">Login</Link>
      )}
    </div>
  );
}
