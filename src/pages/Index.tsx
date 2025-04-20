
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-ustp-gray">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-ustp-navy text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            USTP Student <span className="text-ustp-gold">Opportunities</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your gateway to marketplace deals and career opportunities within the USTP community
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button className="bg-ustp-gold text-ustp-navy hover:bg-white text-lg px-8">
              Browse Marketplace
            </Button>
            <Button className="bg-white text-ustp-navy hover:bg-ustp-gold text-lg px-8">
              Find Jobs
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-ustp-navy mb-4">Student Marketplace</h2>
              <p className="text-ustp-dark mb-6">
                Buy and sell textbooks, school supplies, and other items within the USTP community.
              </p>
              <Button className="bg-ustp-navy text-white hover:bg-ustp-gold">
                Start Trading
              </Button>
            </Card>
            <Card className="p-8 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-ustp-navy mb-4">Job Opportunities</h2>
              <p className="text-ustp-dark mb-6">
                Find part-time jobs, freelance work, and internships from trusted employers.
              </p>
              <Button className="bg-ustp-navy text-white hover:bg-ustp-gold">
                View Openings
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-ustp-navy mb-12">Why Choose USTP Opportunities?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-ustp-navy mb-3">Verified Community</h3>
              <p className="text-ustp-dark">Exclusive access for validated USTP students only</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-ustp-navy mb-3">Safe Trading</h3>
              <p className="text-ustp-dark">Secure marketplace transactions within campus</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-ustp-navy mb-3">Career Growth</h3>
              <p className="text-ustp-dark">Direct access to relevant job opportunities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
