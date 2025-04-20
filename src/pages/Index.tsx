
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { Link } from "react-router-dom";
import { ShoppingCart, Briefcase } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-trail-navy text-white">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-8">
            <img 
              src="/public/lovable-uploads/75dc838d-8129-4852-9f4c-679cf4254e60.png" 
              alt="Trail System Logo" 
              className="h-32"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Trail <span className="text-trail-gold">System</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your gateway to marketplace deals and career opportunities within the student community
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button asChild className="bg-trail-gold text-trail-navy hover:bg-white text-lg px-8">
              <Link to="/marketplace">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Browse Marketplace
              </Link>
            </Button>
            <Button asChild className="bg-white text-trail-navy hover:bg-trail-gold text-lg px-8">
              <Link to="/jobs">
                <Briefcase className="w-5 h-5 mr-2" />
                Find Jobs
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-trail-navy mb-4">Student Marketplace</h2>
              <p className="text-gray-700 mb-6">
                Buy and sell textbooks, school supplies, and other items within the student community.
              </p>
              <Button asChild className="bg-trail-navy text-white hover:bg-trail-gold hover:text-trail-navy">
                <Link to="/marketplace">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Start Trading
                </Link>
              </Button>
            </Card>
            <Card className="p-8 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-trail-navy mb-4">Job Opportunities</h2>
              <p className="text-gray-700 mb-6">
                Find part-time jobs, freelance work, and internships from trusted employers.
              </p>
              <Button asChild className="bg-trail-navy text-white hover:bg-trail-gold hover:text-trail-navy">
                <Link to="/jobs">
                  <Briefcase className="w-4 h-4 mr-2" />
                  View Openings
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-trail-navy mb-12">Why Choose Trail System?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-trail-navy mb-3">Verified Community</h3>
              <p className="text-gray-700">Exclusive access for validated students only</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-trail-navy mb-3">Safe Trading</h3>
              <p className="text-gray-700">Secure marketplace transactions within campus</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-trail-navy mb-3">Career Growth</h3>
              <p className="text-gray-700">Direct access to relevant job opportunities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
