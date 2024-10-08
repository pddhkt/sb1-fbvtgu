import React, { useState } from 'react';
import { UserPlus, LogIn } from 'lucide-react';

interface UserAuthenticationProps {
  onAuthenticate: () => void;
}

const UserAuthentication: React.FC<UserAuthenticationProps> = ({ onAuthenticate }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement actual authentication logic here
    onAuthenticate();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isSignUp ? 'Sign Up' : 'Login'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center"
          >
            {isSignUp ? (
              <>
                <UserPlus className="mr-2" size={18} />
                Sign Up
              </>
            ) : (
              <>
                <LogIn className="mr-2" size={18} />
                Login
              </>
            )}
          </button>
        </form>
        <p className="mt-4 text-center">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}
          <button
            className="text-blue-500 hover:underline ml-1"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? 'Login' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default UserAuthentication;