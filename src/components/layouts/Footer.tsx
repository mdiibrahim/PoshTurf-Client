import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 PoshTurf. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <Link to="/about" className="hover:underline">
            About Us
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
