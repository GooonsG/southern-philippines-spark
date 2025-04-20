
import { Navbar } from "@/components/layout/Navbar";
import { EmployerSignInForm } from "@/components/auth/EmployerSignInForm";

const EmployerSignIn = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto py-12">
        <EmployerSignInForm />
      </div>
    </div>
  );
};

export default EmployerSignIn;
