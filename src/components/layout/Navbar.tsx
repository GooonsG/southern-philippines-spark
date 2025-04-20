
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, LogIn, User } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    // Check if user is logged in from localStorage
    const user = localStorage.getItem("user");
    if (user) {
      try {
        const userData = JSON.parse(user);
        setIsLoggedIn(!!userData.isLoggedIn);
      } catch (e) {
        console.error("Error parsing user data", e);
      }
    }
  }, []);
  
  const handleSignOut = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/");
  };

  const NavLinks = () => (
    <>
      <Link 
        to="/" 
        className={cn(
          "text-white hover:text-trail-gold transition",
          location.pathname === "/" && "text-trail-gold"
        )}
      >
        Home
      </Link>
      <Link 
        to="/marketplace" 
        className={cn(
          "text-white hover:text-trail-gold transition",
          location.pathname === "/marketplace" && "text-trail-gold"
        )}
      >
        Marketplace
      </Link>
      <Link 
        to="/jobs" 
        className={cn(
          "text-white hover:text-trail-gold transition",
          location.pathname === "/jobs" && "text-trail-gold"
        )}
      >
        Jobs
      </Link>
    </>
  );

  return (
    <nav className="bg-trail-navy py-4 px-6 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/public/lovable-uploads/75dc838d-8129-4852-9f4c-679cf4254e60.png" 
              alt="Trail System Logo" 
              className="h-8"
            />
            <h1 className="text-white text-xl font-bold">Trail</h1>
            <span className="text-trail-gold font-semibold">System</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLinks />
          {isLoggedIn ? (
            <div className="flex items-center gap-2">
              <Button className="bg-transparent text-white hover:bg-trail-navy/20 gap-2">
                <User size={18} />
                <span>Profile</span>
              </Button>
              <Button 
                className="bg-trail-gold text-trail-navy hover:bg-white"
                onClick={handleSignOut}
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <Button asChild className="bg-trail-gold text-trail-navy hover:bg-white">
              <Link to="/signin">
                <LogIn className="w-4 h-4 mr-2" />
                Sign In
              </Link>
            </Button>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="text-white p-2">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-trail-navy">
              <div className="flex flex-col space-y-4 mt-8">
                <NavLinks />
                {isLoggedIn ? (
                  <>
                    <Button className="bg-transparent text-white hover:bg-trail-navy/20 w-full justify-start">
                      <User size={18} className="mr-2" />
                      Profile
                    </Button>
                    <Button 
                      className="bg-trail-gold text-trail-navy hover:bg-white w-full"
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <Button 
                    asChild
                    className="bg-trail-gold text-trail-navy hover:bg-white w-full"
                  >
                    <Link to="/signin">
                      <LogIn className="w-4 h-4 mr-2" />
                      Sign In
                    </Link>
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
