import { useState } from "react";


const ForgotPasswordPage = () => {

    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Forgot Password</h2>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Enter your email
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@email.com"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
            >
              Send Reset Link
            </button>

            <div className="text-center text-sm text-gray-500 mt-2">
              Remember your password? <a href="/login" className="text-blue-600 hover:underline">Login</a>
            </div>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-green-600 font-medium">
              ✅ A reset link has been sent to your email.
            </p>
            <a
              href="/login"
              className="mt-4 inline-block text-blue-600 hover:underline text-sm"
            >
              Back to Login
            </a>
          </div>
        )}
      </div>
    </section>
    </>
  )
}

export default ForgotPasswordPage;