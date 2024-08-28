import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLoginMutation } from "../redux/api/auth/authApi";
import { setCredentials } from "../redux/features/auth/authSlice";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Perform the login request
      const userData = await login(formData).unwrap();

      // Set user credentials in Redux and store token in localStorage
      dispatch(setCredentials(userData));
      localStorage.setItem("token", userData.token); // Store token in localStorage

      toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      console.error("Login failed", err);
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-lg">
      <h2 className="text-4xl font-bold text-center mb-6">Login</h2>

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
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
