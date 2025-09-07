import { LayoutDashboardIcon, LogInIcon } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-end xs:justify-center min-h-screen xs:bg-gray-50 xs:p-6 text-center">
      <div className="bg-white p-10 rounded-2xl xs:shadow-lg w-full max-w-md animate-fade-in">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          به پروژه من خوش آمدید
        </h1>
        <p className="text-gray-600 mb-8">
          برای ادامه، یکی از گزینه‌های زیر را انتخاب کنید.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* دکمه داشبورد */}
          <Link
            href="/dashboard"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-transform transform hover:scale-105"
          >
            <LayoutDashboardIcon className="w-5 h-5" />
            <span>داشبورد</span>
          </Link>

          {/* دکمه ورود */}
          <Link
            href="/login"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition-transform transform hover:scale-105"
          >
            <LogInIcon className="w-5 h-5" />
            ورود
          </Link>
        </div>
      </div>
    </div>
  );
}

