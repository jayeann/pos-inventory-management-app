"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { logOut } from "@/services/auth";

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        router.push("/dashboard");
      } else {
        router.push("/sign-in");
      }
    });
    return () => unsubscribe();
  }, [router]);

  return;
}
