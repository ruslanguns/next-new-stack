"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "../ui/button";

export default function SignIn() {
  const { data: session, status } = useSession();

  if (status === "loading")
    return <div className="flex flex-col items-center m-10">Loading...</div>;

  if (session) {
    return (
      <div className="flex flex-col items-center m-10">
        Signed in as {session.user?.email} <br />
        {session.user?.image && (
          <img
            src={session.user.image}
            alt="Picture of the user"
            className="w-20 h-20 my-4 rounded-full"
          />
        )}
        <Button variant={"destructive"} onClick={() => signOut()}>
          Sign out
        </Button>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center gap-4 m-10">
      Not signed in <br />
      <Button onClick={() => signIn()}>Sign in</Button>
    </div>
  );
}
