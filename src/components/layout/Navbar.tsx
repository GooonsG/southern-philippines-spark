
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Navbar() {
  const location = useLocation();

  const NavLinks = () => (
    <>
      <Link 
        to="/" 
        className={cn(
          "text-white hover:text-ustp-gold transition",
          location.pathname === "/" && "text-ustp-gold"
        )}
      >
        Home
      </Link>
      <Link 
        to="/marketplace" 
        className={cn(
          "text-white hover:text-ustp-gold transition",
          location.pathname === "/marketplace" && "text-ustp-gold"
        )}
      >
        Marketplace
      </Link>
      <Link 
        to="/jobs" 
        className={cn(
          "text-white hover:text-ustp-gold transition",
          location.pathname === "/jobs" && "text-ustp-gold"
        )}
      >
        Jobs
      </Link>
    </>
  );

  return (
    <nav className="bg-ustp-navy py-4 px-6 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-white text-xl font-bold">USTP</h1>
            <span className="text-ustp-gold font-semibold">Opportunities</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLinks />
          <Button className="bg-ustp-gold text-ustp-navy hover:bg-white">Sign In</Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="text-white p-2">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-ustp-navy">
              <div className="flex flex-col space-y-4 mt-8">
                <NavLinks />
                <Button className="bg-ustp-gold text-ustp-navy hover:bg-white w-full">
                  Sign In
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
