"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

import { Button } from "@client/components/ui/button";

function AuthButton() {
  const { data: session } = useSession();

  return session && session.user ? (
    <>
      <p>{session.user.name}</p>
      <Button variant="destructive" asChild>
        <Link href="/api/auth/signout">로그아웃</Link>
      </Button>
    </>
  ) : (
    <>
      <Button asChild>
        <Link href="/api/auth/signin">로그인</Link>
      </Button>
      <Button variant="secondary" asChild>
        <Link href="/signup">회원가입</Link>
      </Button>
    </>
  );
}

export { AuthButton };
