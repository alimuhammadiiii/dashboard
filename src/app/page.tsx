import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LayoutDashboardIcon, LogInIcon } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-end xs:justify-center min-h-screen xs:bg-gray-50 xs:p-6 text-center">
      <Card className="max-sm:rounded-none max-sm:border-0 py-6 max-sm:shadow-sm w-full xs:max-w-md">
        <CardHeader>
          <CardTitle>به پروژه من خوش آمدید</CardTitle>
          <CardDescription className="text-center">
            برای ادامه، یکی از گزینه‌های زیر را انتخاب کنید.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <DashboardButton />
            <LoginButton />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function DashboardButton() {
  return (
    <Link
      href="/dashboard"
      className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-transform transform hover:scale-105"
    >
      <LayoutDashboardIcon className="w-5 h-5" />
      <span>داشبورد</span>
    </Link>
  );
}

function LoginButton() {
  return (
    <Link
      href="/login"
      className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition-transform transform hover:scale-105"
    >
      <LogInIcon className="w-5 h-5" />
      ورود
    </Link>
  );
}

