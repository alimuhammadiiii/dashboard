"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  name: string;
  email: string;
  image?: string;
}

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("user");

    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("user");
        router.replace("/login");
      }
    } else {
      router.replace("/login");
    }

    setLoading(false);
  }, [router]);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.replace("/login");
  };

  return {
    user,
    loading,
    logout,
  };
}
