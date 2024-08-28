import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { useSignUpMutation } from "../redux/api/auth/authApi";

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const [signUp, { isLoading }] = useSignUpMutation();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Attempt to sign up the user
      await signUp(formData).unwrap();

      // After successful sign-up, navigate to login page
      navigate("/login");

      // Show a success toast message
      toast.info("Sign-up successful! Please log in.");
    } catch (err) {
      console.error("Sign-up failed", err);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-lg">
      <h2 className="text-4xl font-bold text-center mb-6">Sign Up</h2>

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
          {isLoading ? "Signing up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
