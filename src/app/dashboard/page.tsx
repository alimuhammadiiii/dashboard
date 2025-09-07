"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { useUser } from "@/hooks/use-user";

export default function Dashboard() {
  const { user, loading } = useUser();

  if (loading) {
    return <p>در حال بارگذاری...</p>;
  }

  if (!user) {
    return <p>کاربر یافت نشد</p>;
  }

  return (
    <Card className="max-w-lg">
      <CardContent className="flex flex-col items-center space-y-4 pt-8">
        <Avatar className="w-20 h-20">
          <AvatarImage
            className="w-full h-full"
            src={user.image || user.picture || "https://github.com/shadcn.png"}
          />
          <AvatarFallback>
            {user.name?.charAt(0)?.toUpperCase() || "U"}
          </AvatarFallback>
        </Avatar>
        <div className="text-center">
          <p
            className="text-xl font-semibold"
            style={{ color: "hsl(222.2 84% 4.9%)" }}
          >
            خوش آمدید، {user.name}!
          </p>
          <p className="text-sm" style={{ color: "hsl(215.4 16.3% 46.9%)" }}>
            {user.email}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
