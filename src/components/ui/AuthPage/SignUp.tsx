import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.phone ||
      !formData.address
    ) {
      setError("Please fill out all fields.");
    } else {
      setError(null);
      console.log("Registering with:", formData);
      // Perform registration logic here (e.g., API call)
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-lg">
      <h2 className="text-4xl font-bold text-center mb-6">Sign Up</h2>

      {error && (
        <div className="bg-red-100 text-red-600 p-3 rounded mb-4">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="form-control">
          <label className="label text-lg">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Your name"
            required
          />
        </div>
        <div className="form-control">
          <label className="label text-lg">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Your phone number"
            required
          />
        </div>
        <div className="form-control">
          <label className="label text-lg">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Your address"
            required
          />
        </div>
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
          Sign Up
        </button>
      </form>

      {/* Optional Social Login Section */}
      <div className="mt-8">
        <h3 className="text-center mb-4">Or sign up with</h3>
        <div className="flex justify-center space-x-4">
          <button className="btn bg-blue-500 text-white">Google</button>
        </div>
      </div>

      <div className="text-center mt-6">
        <p>
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
