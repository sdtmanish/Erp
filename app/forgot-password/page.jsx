'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f9fc] relative overflow-hidden px-4">
      {/* Abstract background shapes */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-orange-300 rounded-bl-[60%] z-0"></div>
      <div className="absolute top-0 right-0 w-56 h-56 bg-blue-300 rounded-br-[50%] z-0"></div>

      <div className="relative z-10 bg-white shadow-xl rounded-2xl flex flex-col md:flex-row w-full max-w-5xl overflow-hidden">
        {/* Left illustration */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-white to-blue-50">
          <Image
            src="/assets/education.svg" // Replace with actual path if different
            alt="Security Illustration"
            width={300}
            height={300}
            className="object-contain"
            priority
          />
        </div>

        {/* Right form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Forgot your password?
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Please enter the email address associated with your account and we will email you a link to reset your password.
            </p>
          </div>

          <form className="flex flex-col space-y-4">
            <input
              type="email"
              required
              placeholder="Email address"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Forgot Password
            </button>
            <Link href="/login" className="text-center text-blue-500 hover:underline">
              Back to Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}
