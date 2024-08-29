import { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission, e.g., send data to backend
    toast.success("Thank you for reaching out!");
    // Clear form fields
    setFormData({ name: "", email: "", subject: "", message: "" });
  };
  return (
    <div>
      <section className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-6">Get in Touch</h2>
        <p className="text-center text-lg mb-8">
          Have questions or need help? Fill out the form below, and our team
          will get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
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
            <label className="label text-lg">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Subject"
              required
            />
          </div>
          <div className="form-control">
            <label className="label text-lg">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="textarea textarea-bordered w-full"
              placeholder="Your message"
              rows={4}
              required
            />
          </div>
          <button type="submit" className="btn text-white bg-primary w-full">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
