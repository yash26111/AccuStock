import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface NavbarProps {
  transparent?: boolean;
}

const Navbar = ({ transparent = false }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${transparent ? "bg-transparent" : "bg-background/95 backdrop-blur-sm border-b"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/b0830730-1a6b-45b8-a805-ddfe61fa6358.png" 
                alt="PlyMan Logo" 
                className="h-10 w-10 rounded-full"
              />
              <span className={`text-xl font-bold ${transparent ? "text-white" : "text-foreground"}`}>
                PlyMan
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className={`text-sm font-medium ${transparent ? "text-white/80 hover:text-white" : "text-foreground/80 hover:text-foreground"}`}>
              Features
            </a>
            <a href="#how-it-works" className={`text-sm font-medium ${transparent ? "text-white/80 hover:text-white" : "text-foreground/80 hover:text-foreground"}`}>
              How It Works
            </a>
            <Link to="/login">
              <Button 
                variant="secondary"
                className={transparent ? "bg-primary text-white hover:bg-primary/90" : ""}
              >
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant={transparent ? "secondary" : "default"}>
                Sign up free
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${transparent ? "text-white" : "text-foreground"}`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden ${transparent ? "bg-primary/95" : "bg-background/95"} backdrop-blur-sm border-b`}>
          <div className="px-4 pt-2 pb-4 space-y-3">
            <a 
              href="#features"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <Link 
              to="/login"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link 
              to="/signup"
              className="block"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button className="w-full">Sign up free</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
