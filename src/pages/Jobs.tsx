
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { useState } from "react";

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for jobs:", searchQuery);
    // Implement search functionality
  };

  return (
    <div className="min-h-screen bg-ustp-gray">
      <Navbar />
      
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-ustp-navy">Job Opportunities</h1>
          <Button className="bg-ustp-gold text-ustp-navy hover:bg-white">
            Post Job
          </Button>
        </div>

        <form onSubmit={handleSearch} className="flex gap-2 mb-8">
          <Input
            type="text"
            placeholder="Search jobs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md"
          />
          <Button type="submit">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </form>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Sample job listing */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">Student Assistant</h3>
            <p className="text-gray-600 mb-4">Computer Center - USTP Main Campus</p>
            <div className="mb-4">
              <p className="text-sm text-gray-600">Part-time • ₱89/hour</p>
              <p className="mt-2">Help maintain computer laboratories and assist students with technical issues.</p>
            </div>
            <Button className="w-full bg-ustp-navy text-white hover:bg-ustp-gold hover:text-ustp-navy">
              Apply Now
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
