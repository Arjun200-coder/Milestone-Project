import { useState } from "react";
import { validateRegister } from "../../../utils"; 

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    const { isValid, errors } = validateRegister(formData);

    if (!isValid) {
      setErrorMsg(
        errors.name || errors.email || errors.password || errors.confirmPassword
      );
      return;
    }

    setSuccessMsg(`✅ Registered successfully with email: ${formData.email}`);
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Account</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {["name", "email", "password", "confirmPassword"].map((field) => (
            <div key={field}>
              <label htmlFor={field} className="block text-gray-700 font-medium mb-2 capitalize">
                {field === "confirmPassword" ? "Confirm Password" : field}
              </label>
              <input
                type={field.includes("password") ? "password" : "text"}
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={field === "email" ? "you@example.com" : field === "name" ? "John Doe" : ""}
                className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
          ))}

          {errorMsg && <p className="text-sm text-center text-red-600">{errorMsg}</p>}
          {successMsg && <p className="text-sm text-center text-green-600">{successMsg}</p>}

          <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition">
            Register
          </button>

          <div className="text-center text-sm text-gray-500 mt-2">
            Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
