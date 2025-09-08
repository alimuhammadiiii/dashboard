"use client";

import { Button } from "@/components/ui/button";
import {
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { LayoutDashboard } from "lucide-react";
import { useUser } from "@/hooks/use-user";

function DashboardHeader() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="p-4 xs:hidden border-b flex items-center">
      <Button variant="ghost" onClick={toggleSidebar}>
        <LayoutDashboard size={60} strokeWidth={0.75} />
      </Button>
      <span className="font-medium">داشبورد</span>
    </header>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading, logout } = useUser();

  if (loading) {
    return <p>در حال بارگذاری...</p>;
  }
  if (!user) {
    return <p>در حال انتقال به صفحه ورود</p>;
  } else {
    return (
      <SidebarProvider>
        <div className="min-h-screen flex justify-between items-center grow flex-col">
          <DashboardHeader />
          <div className="flex flex-1 justify-center items-center">
            <AppSidebar onLogout={logout} />
            <main className="flex-1">
              <SidebarTrigger />
              {children}
            </main>
          </div>
        </div>
      </SidebarProvider>
    );
  }
}
