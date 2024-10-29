'use client'
import React from 'react'
import { useRouter } from "next/navigation";

export default function ButtonRedirect() {
    // Dùng trong client component thôi là dùng use client còn nếu dùng server component thì không được
    const router = useRouter();
    const handleNavigate = () => {
        router.push("/login");
    };
  return (
    <button onClick={handleNavigate}>Redirect to login page</button>
  )
}
