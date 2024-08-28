import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>© 2024 PoshTurf. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="/about" className="text-white hover:underline">
            About Us
          </a>
          <a href="/contact" className="text-white hover:underline">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
