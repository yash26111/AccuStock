import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";
import { Package, ChartBar, Users, MessageSquare, Truck } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar transparent />
      
      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-24 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Manage your plywood business with ease
              </h1>
              <p className="text-lg text-white/90 mb-8">
                PlyMan is the all-in-one solution for plywood retailers. 
                Simple, powerful, and <span className="font-bold underline">always free</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    Get Started - It's Free!
                  </Button>
                </Link>
                <Link to="/login">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90"
                  >
                    Login to Dashboard
                  </Button>
                </Link>
              </div>
              <p className="text-white/70 text-sm mt-4">
                Even a 10th pass guy can use it!
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 px-4 md:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">All You Need to Run Your Plywood Business</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              PlyMan offers a complete suite of tools designed specifically for plywood retailers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Package}
              title="Inventory Management"
              description="Track stock levels, set reorder points, and manage different plywood types and sizes with ease."
            />
            <FeatureCard 
              icon={ChartBar}
              title="Sales Tracking"
              description="Record transactions, generate invoices, and analyze sales performance all in one place."
            />
            <FeatureCard 
              icon={Users}
              title="Labor Management"
              description="Schedule staff, track work hours, and manage labor costs efficiently."
            />
            <FeatureCard 
              icon={MessageSquare}
              title="Customer Relationship"
              description="Build and maintain relationships with customers through our simple CRM system."
            />
            <FeatureCard 
              icon={Truck}
              title="Delivery Management"
              description="Schedule and track deliveries, optimize routes, and keep customers informed."
            />
            <div className="card-hover border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center text-center">
              <h3 className="text-lg font-semibold mb-2">More Coming Soon</h3>
              <p className="text-muted-foreground">We're always adding new features based on user feedback</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How PlyMan Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started in minutes with our simple and intuitive platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-secondary/30 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sign Up for Free</h3>
              <p className="text-muted-foreground">Create your account in seconds - no credit card required</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-secondary/30 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Add Your Inventory</h3>
              <p className="text-muted-foreground">Enter your products and stock levels or import them from a spreadsheet</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-secondary/30 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Start Managing</h3>
              <p className="text-muted-foreground">Begin using all features immediately to streamline your business</p>
            </div>
          </div>
          
          <div className="flex justify-center mt-12">
            <Link to="/signup">
              <Button size="lg" className="px-8">Get Started Now</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Warehouse Image Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/672f0a65-3f7e-4c82-83b4-99b3c97628aa.png" 
              alt="Plywood Warehouse" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-4 md:px-6 lg:px-8 mt-auto">
        <div className="container mx-auto">
          <div className="text-center">
            <p className="text-lg font-semibold mb-4">Built by owners for the owners - Harsh Vijayvargiya</p>
            <a 
              href="https://harshvijayvargiya.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="outline">Contact Me</Button>
            </a>
          </div>
          
          <div className="mt-12 pt-6 border-t">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <img 
                  src="/lovable-uploads/b0830730-1a6b-45b8-a805-ddfe61fa6358.png" 
                  alt="PlyMan Logo" 
                  className="h-8 w-8 mr-2"
                />
                <span className="text-lg font-bold">PlyMan</span>
              </div>
              <div className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} PlyMan. Always free, forever.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
