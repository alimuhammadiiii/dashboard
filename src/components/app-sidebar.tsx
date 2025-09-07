import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";

// Menu items.
const items = [
  {
    title: "صفحه اصلی",
    url: "#",
    icon: Home,
  },
];

export function AppSidebar({ onLogout }: { onLogout: () => void }) {
  return (
    <Sidebar side="right" variant="sidebar">
      <SidebarHeader title="صفحه اصلی" />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>داشبورد</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {" "}
        <Button onClick={onLogout} variant="destructive">
          خروج
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
