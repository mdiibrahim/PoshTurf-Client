import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Please enter both email and password.");
    } else {
      setError(null);
      console.log("Logging in with:", formData);
      // Perform login logic here (e.g., API call)
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-lg">
      <h2 className="text-4xl font-bold text-center mb-6">Login</h2>

      {error && (
        <div className="bg-red-100 text-red-600 p-3 rounded mb-4">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="form-control">
          <label className="label text-lg">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Your email"
            required
          />
        </div>
        <div className="form-control">
          <label className="label text-lg">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Your password"
            required
          />
        </div>
        <button type="submit" className="btn text-white bg-primary w-full">
          Login
        </button>
      </form>

      {/* Optional Social Login Section */}
      <div className="mt-8">
        <h3 className="text-center mb-4">Or login with</h3>
        <div className="flex justify-center space-x-4">
          <button className="btn bg-blue-500 text-white">Google</button>
        </div>
      </div>

      <div className="text-center mt-6">
        <p>
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
