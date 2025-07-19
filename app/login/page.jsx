'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const url = `http://apidol.myportal.co.in/api/LoginUser`;

    try {
      const res = await fetch(url, {
        method: 'GET',
        headers: {
           'Content-Type': 'application/json',
          'APIKey': 'Sdt!@#321',
        },
        body: JSON.stringify({
          LoginName: username,
          Password: password,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      if (Array.isArray(data) && data.length > 0 && data[0].UserCode) {
        localStorage.setItem('user', JSON.stringify(data[0]));
        router.push('/dashboard');
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f8fd] px-4">
      <div className="bg-white flex flex-col md:flex-row rounded-2xl shadow-lg max-w-5xl w-full overflow-hidden">
        {/* Left Side - Illustration */}
        <div className="md:w-1/2 bg-white flex items-center justify-center p-8">
          <Image
            src="/assets/education.svg"
            alt="Login Illustration"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Welcome to SDT Admin</h2>
          <p className="text-sm text-gray-500 mb-6">Your Admin Dashboard</p>

          <div className="flex space-x-4 mb-4">
            <button className="flex items-center justify-center w-full border rounded-md py-2 text-sm font-medium hover:bg-gray-50">
              <Image
                src="/assets/google-icon.svg"
                alt="Google"
                width={20}
                height={20}
                className="mr-2"
              />
              Sign in with Google
            </button>
            <button className="flex items-center justify-center w-full border rounded-md py-2 text-sm font-medium hover:bg-gray-50">
              <Image
                src="/assets/facebook-icon.svg"
                alt="Facebook"
                width={20}
                height={20}
                className="mr-2"
              />
              Sign in with FB
            </button>
          </div>

          <div className="flex items-center justify-center text-gray-400 text-sm mb-4">
            <span className="border-b w-full"></span>
            <span className="px-2">or sign in with</span>
            <span className="border-b w-full"></span>
          </div>

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>Remember this Device</span>
              </label>
              <Link href="/forgot-password" className="text-blue-500 hover:underline">
                Forgot Password?
              </Link>
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p className="text-sm text-center text-gray-500 mt-6">
            New to Spike?{' '}
            <Link href="#" className="text-blue-600 hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
