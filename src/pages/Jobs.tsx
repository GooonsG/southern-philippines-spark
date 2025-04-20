
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Briefcase } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { useState } from "react";
import { jobs } from "@/data/jobs";

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for jobs:", searchQuery);
    // Implement search functionality
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-trail-navy">Job Opportunities</h1>
          <Button className="bg-trail-gold text-trail-navy hover:bg-white">
            <Briefcase className="w-4 h-4 mr-2" />
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

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <Card key={job.id} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                  <p className="text-gray-600 mb-1">{job.company} - {job.location}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="bg-trail-navy/10 text-trail-navy text-xs font-medium px-2.5 py-0.5 rounded">
                      {job.type}
                    </span>
                    <span className="text-sm text-gray-600">
                      {job.salary}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-gray-500">
                  Posted: {new Date(job.postedAt).toLocaleDateString()}
                </span>
              </div>
              
              <p className="mt-3 mb-4">{job.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">Requirements:</h4>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
              
              <Button className="w-full bg-trail-navy text-white hover:bg-trail-gold hover:text-trail-navy">
                Apply Now
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
