
import { useState } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardCard from "@/components/DashboardCard";
import { Package, ChartBar, Users, MessageSquare, Truck } from "lucide-react";

const Dashboard = () => {
  const [period, setPeriod] = useState("today");
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back to PlyMan Business Hub</p>
          </div>
          
          <Tabs defaultValue="today" value={period} onValueChange={setPeriod} className="w-[400px]">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="today">Today</TabsTrigger>
              <TabsTrigger value="week">Week</TabsTrigger>
              <TabsTrigger value="month">Month</TabsTrigger>
              <TabsTrigger value="year">Year</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard title="Inventory Status" icon={Package}>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Items in stock</span>
                <span className="text-2xl font-bold">0</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Low stock alerts</span>
                <span className="text-2xl font-bold">0</span>
              </div>
            </div>
          </DashboardCard>
          
          <DashboardCard title="Sales Overview" icon={ChartBar}>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total sales</span>
                <span className="text-2xl font-bold">₹0</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Orders</span>
                <span className="text-2xl font-bold">0</span>
              </div>
            </div>
          </DashboardCard>
          
          <DashboardCard title="Labor Overview" icon={Users}>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Active workers</span>
                <span className="text-2xl font-bold">0</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Hours logged</span>
                <span className="text-2xl font-bold">0h</span>
              </div>
            </div>
          </DashboardCard>
          
          <DashboardCard title="Customer Activity" icon={MessageSquare}>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total customers</span>
                <span className="text-2xl font-bold">0</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">New this {period}</span>
                <span className="text-2xl font-bold">0</span>
              </div>
            </div>
          </DashboardCard>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
              <div className="text-center text-muted-foreground py-8">
                No recent activity to display
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Upcoming Deliveries</h3>
              <div className="text-center text-muted-foreground py-8">
                No upcoming deliveries
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
