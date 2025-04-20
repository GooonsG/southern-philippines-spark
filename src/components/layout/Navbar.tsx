
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, LogIn, User, Building } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEmployer, setIsEmployer] = useState(false);
  
  useEffect(() => {
    // Check if user or employer is logged in from localStorage
    const user = localStorage.getItem("user");
    const employer = localStorage.getItem("employer");
    
    if (user) {
      try {
        const userData = JSON.parse(user);
        setIsLoggedIn(!!userData.isLoggedIn);
        setIsEmployer(false);
      } catch (e) {
        console.error("Error parsing user data", e);
      }
    } else if (employer) {
      try {
        const employerData = JSON.parse(employer);
        setIsLoggedIn(!!employerData.isEmployer);
        setIsEmployer(true);
      } catch (e) {
        console.error("Error parsing employer data", e);
      }
    }
  }, []);
  
  const handleSignOut = () => {
    if (isEmployer) {
      localStorage.removeItem("employer");
    } else {
      localStorage.removeItem("user");
    }
    setIsLoggedIn(false);
    setIsEmployer(false);
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
      {!isEmployer && (
        <>
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
      )}
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
              <Button 
                asChild
                className="bg-transparent text-white hover:bg-trail-navy/20 gap-2"
              >
                <Link to={isEmployer ? "/employer/dashboard" : "/profile"}>
                  {isEmployer ? <Building size={18} /> : <User size={18} />}
                  <span>{isEmployer ? "Dashboard" : "Profile"}</span>
                </Link>
              </Button>
              <Button 
                className="bg-trail-gold text-trail-navy hover:bg-white"
                onClick={handleSignOut}
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button asChild className="bg-transparent text-white hover:bg-trail-navy/20">
                <Link to="/employer/signin">
                  <Building className="w-4 h-4 mr-2" />
                  Employer Sign In
                </Link>
              </Button>
              <Button asChild className="bg-trail-gold text-trail-navy hover:bg-white">
                <Link to="/signin">
                  <LogIn className="w-4 h-4 mr-2" />
                  Student Sign In
                </Link>
              </Button>
            </div>
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
                    <Button 
                      asChild
                      className="bg-transparent text-white hover:bg-trail-navy/20 w-full justify-start"
                    >
                      <Link to={isEmployer ? "/employer/dashboard" : "/profile"}>
                        {isEmployer ? <Building size={18} className="mr-2" /> : <User size={18} className="mr-2" />}
                        {isEmployer ? "Dashboard" : "Profile"}
                      </Link>
                    </Button>
                    <Button 
                      className="bg-trail-gold text-trail-navy hover:bg-white w-full"
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button 
                      asChild
                      className="bg-transparent text-white hover:bg-trail-navy/20 w-full justify-start"
                    >
                      <Link to="/employer/signin">
                        <Building className="w-4 h-4 mr-2" />
                        Employer Sign In
                      </Link>
                    </Button>
                    <Button 
                      asChild
                      className="bg-trail-gold text-trail-navy hover:bg-white w-full"
                    >
                      <Link to="/signin">
                        <LogIn className="w-4 h-4 mr-2" />
                        Student Sign In
                      </Link>
                    </Button>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
