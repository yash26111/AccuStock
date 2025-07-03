
import { useState } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import EmptyState from "@/components/EmptyState";
import { Truck as DeliveryIcon, Plus, Search } from "lucide-react";

const Delivery = () => {
  const [search, setSearch] = useState("");
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Delivery</h1>
            <p className="text-muted-foreground">Manage your deliveries and shipments</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search deliveries..."
                className="pl-8"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Schedule Delivery
            </Button>
          </div>
        </div>
        
        <EmptyState
          title="No scheduled deliveries"
          description="Start by scheduling your first delivery."
          icon={DeliveryIcon}
          actionLabel="Schedule Delivery"
          onAction={() => console.log("Schedule delivery clicked")}
        />
      </div>
    </DashboardLayout>
  );
};

export default Delivery;
