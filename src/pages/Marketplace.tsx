
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { useState } from "react";

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Implement search functionality
  };

  return (
    <div className="min-h-screen bg-ustp-gray">
      <Navbar />
      
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-ustp-navy">USTP Marketplace</h1>
          <Button className="bg-ustp-gold text-ustp-navy hover:bg-white">
            Post Item
          </Button>
        </div>

        <form onSubmit={handleSearch} className="flex gap-2 mb-8">
          <Input
            type="text"
            placeholder="Search items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md"
          />
          <Button type="submit">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </form>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Sample marketplace items */}
          <Card className="p-4">
            <h3 className="font-semibold mb-2">Calculus Textbook</h3>
            <p className="text-gray-600 mb-2">Good condition, 8th edition</p>
            <p className="text-ustp-navy font-bold mb-4">₱800</p>
            <Button className="w-full bg-ustp-navy text-white hover:bg-ustp-gold hover:text-ustp-navy">
              Contact Seller
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
