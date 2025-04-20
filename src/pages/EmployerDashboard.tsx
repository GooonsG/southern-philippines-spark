
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Building } from "lucide-react";

const EmployerDashboard = () => {
  const navigate = useNavigate();
  const [employer, setEmployer] = useState<any>(null);

  useEffect(() => {
    const employerData = localStorage.getItem("employer");
    if (!employerData) {
      navigate("/employer/signin");
      return;
    }
    setEmployer(JSON.parse(employerData));
  }, [navigate]);

  if (!employer) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-trail-navy">Employer Dashboard</h1>
          <div className="flex gap-4">
            <Button className="bg-trail-gold text-trail-navy hover:bg-white">
              <Building className="w-4 h-4 mr-2" />
              Edit Company Profile
            </Button>
            <Button className="bg-trail-navy text-white hover:bg-trail-navy/90">
              <Briefcase className="w-4 h-4 mr-2" />
              Post New Job
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Active Jobs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">3</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">12</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Profile Views</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">45</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;
