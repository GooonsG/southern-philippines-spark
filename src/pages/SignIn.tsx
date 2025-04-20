
import { Navbar } from "@/components/layout/Navbar";
import { SignInForm } from "@/components/auth/SignInForm";

const SignIn = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto py-12">
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;
