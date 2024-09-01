/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../redux/api/auth/authApi";
import { setCredentials } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading, error }] = useLoginMutation();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <ClipLoader color="#663635" size={50} />
      </div>
    );
  }

  if (error) {
    toast.error("Error loading facilities. Please try again.");
    return (
      <div className="bg-red-100 text-red-700 p-4 rounded-lg text-center">
        Error loading facilities. Please try again later.
      </div>
    );
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = { email: "", password: "" };

    if (!formData.email) {
      newErrors.email = "Email is required.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);

    return !newErrors.email && !newErrors.password;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

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
    <div className="container mx-auto p-20 my-20 max-w-lg bg-gradient-to-r from-green-50 to-blue-100">
      <div className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-4xl font-bold text-center mb-6 text-primary">
          Login
        </h2>
        {errors.email || errors.password ? (
          <div className="bg-red-100 text-red-600 p-4 rounded mb-6 text-center">
            Please fix the errors below
          </div>
        ) : null}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-group">
            <label className="block text-lg font-medium mb-2 text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary`}
              placeholder="Your email"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email}</p>
            )}
          </div>
          <div className="form-group">
            <label className="block text-lg font-medium mb-2 text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-3 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary`}
              placeholder="Your password"
              required
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-2">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-primary text-white rounded-lg shadow-lg hover:bg-primary-dark transition-all duration-300"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
