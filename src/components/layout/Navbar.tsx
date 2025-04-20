
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="bg-ustp-navy py-4 px-6 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-white text-xl font-bold">USTP</h1>
          <span className="text-ustp-gold font-semibold">Opportunities</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-ustp-gold transition">Home</Link>
          <Link to="/marketplace" className="text-white hover:text-ustp-gold transition">Marketplace</Link>
          <Link to="/jobs" className="text-white hover:text-ustp-gold transition">Jobs</Link>
          <Button className="bg-ustp-gold text-ustp-navy hover:bg-white">Sign In</Button>
        </div>
      </div>
    </nav>
  );
}
