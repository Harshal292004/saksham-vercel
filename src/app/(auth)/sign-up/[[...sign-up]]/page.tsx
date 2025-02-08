import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <div className="flex h-screen w-full bg-gray-100">
      {/* Left Side: Sign Up Component */}
      <div className="w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
          <SignUp afterSignOutUrl={'/'} forceRedirectUrl={'/dashboard'} />
        </div>
      </div>

      {/* Right Side: Styling */}
      <div className="w-1/2 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold mb-4">Join Us!</h1>
          <p className="text-lg opacity-90">Create an account to get started on your journey with us.</p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;