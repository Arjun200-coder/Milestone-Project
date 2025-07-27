import { useState } from "react";
import { validateResetPassword } from "../../../utils";


const ResetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    const { isValid, errors } = validateResetPassword(email);

    if (!isValid) {
      setErrorMsg(errors.email);
      return;
    }

    setSuccessMsg(`✅ Password reset link sent to ${email}`);
    setEmail("");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Reset Password</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          {errorMsg && <p className="text-sm text-center text-red-600">{errorMsg}</p>}
          {successMsg && <p className="text-sm text-center text-green-600">{successMsg}</p>}

          <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition">
            Send Reset Link
          </button>

          <div className="text-center text-sm text-gray-500 mt-2">
            Go back to <a href="/login" className="text-blue-600 hover:underline">Login</a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ResetPasswordPage;
