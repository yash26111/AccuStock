
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Box, 
  ChartBar, 
  Users, 
  Package, 
  MessageSquare,
  Truck 
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger
} from "@/components/ui/sidebar";

const AppSidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const menuItems = [
    {
      label: "Dashboard",
      icon: Box,
      path: "/dashboard"
    },
    {
      label: "Inventory",
      icon: Package,
      path: "/inventory"
    },
    {
      label: "Sales",
      icon: ChartBar,
      path: "/sales"
    },
    {
      label: "Labor",
      icon: Users,
      path: "/labor"
    },
    {
      label: "CRM",
      icon: MessageSquare,
      path: "/crm"
    },
    {
      label: "Delivery",
      icon: Truck,
      path: "/delivery"
    }
  ];

  return (
    <Sidebar className="border-r">
      <SidebarHeader>
        <div className="flex items-center space-x-2 px-4 py-3">
          <img 
            src="/lovable-uploads/b0830730-1a6b-45b8-a805-ddfe61fa6358.png" 
            alt="PlyMan" 
            className="h-8 w-8 rounded-full"
          />
          {!isCollapsed && <span className="text-lg font-bold">PlyMan</span>}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton 
                    asChild
                    isActive={location.pathname === item.path}
                  >
                    <Link to={item.path} className="flex items-center">
                      <item.icon size={20} className="mr-2" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <SidebarTrigger 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex justify-center"
        />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
