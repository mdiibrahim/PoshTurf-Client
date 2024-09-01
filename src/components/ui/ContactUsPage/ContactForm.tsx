/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      toast.success("Thank you for reaching out! Your message has been sent.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 bg-gradient-to-r from-blue-50 to-green-50">
      <section className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-6 text-[#663635]">
          Get in Touch
        </h2>
        <p className="text-center text-lg mb-8">
          Have questions or need help? Fill out the form below, and our team
          will get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-control">
            <label className="label text-lg text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-100 border border-gray-300 rounded-md p-3"
              placeholder="Your name"
              required
            />
          </div>
          <div className="form-control">
            <label className="label text-lg text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-100 border border-gray-300 rounded-md p-3"
              placeholder="Your email"
              required
            />
          </div>
          <div className="form-control">
            <label className="label text-lg text-gray-700">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-100 border border-gray-300 rounded-md p-3"
              placeholder="Subject"
              required
            />
          </div>
          <div className="form-control">
            <label className="label text-lg text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="textarea textarea-bordered w-full bg-gray-100 border border-gray-300 rounded-md p-3"
              placeholder="Your message"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className={`btn w-full text-white bg-[#663635] rounded-md p-3 ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#552c2a]"
            }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
