/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../redux/api/auth/authApi";
import { setCredentials } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading, error }] = useLoginMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { token } = await login(formData).unwrap();
      dispatch(setCredentials({ token }));
      toast.success("Login successful!");
      navigate("/me");
    } catch (err: any) {
      console.error("Login failed", err);
      const errorMessage =
        err?.data?.message ||
        err?.message ||
        "An unexpected error occurred. Please try again.";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-lg">
      <h2 className="text-4xl font-bold text-center mb-6">Login</h2>
      {error && (
        <div className="bg-red-100 text-red-600 p-3 rounded mb-4">
          Login error
        </div>
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
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
