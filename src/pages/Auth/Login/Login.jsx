
import { useState } from 'react';
import { validateLogin } from '../../../utils';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const { isValid, errors } = validateLogin(email, password);

    if (!isValid) {
      setErrorMsg(errors.email || errors.password); 
      return;
    }

    
    setLoggedIn(true);
    setErrorMsg('');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

        {!loggedIn ? (
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter any password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            {errorMsg && (
              <p className="text-red-600 text-sm text-center">{errorMsg}</p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
            >
              Login
            </button>

            <div className="text-center text-sm text-gray-500 mt-2">
              <a href="/forgot-password" className="text-blue-600 hover:underline">Forgot Password?</a>
            </div>
          </form>
        ) : (
          <div className="text-center text-green-600 font-medium">
            ✅ Logged in successfully with email: <br />
            <span className="text-black">{email}</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default LoginPage;
