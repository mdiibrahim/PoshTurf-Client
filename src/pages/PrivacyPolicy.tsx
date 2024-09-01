import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto p-8 bg-gradient-to-r from-green-50 to-blue-100 my-20 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#663635]">
        Privacy Policy
      </h2>
      <div className="prose max-w-none">
        <p className="text-lg leading-relaxed mb-6">
          At PoshTurf, we prioritize your privacy. This Privacy Policy outlines
          how we collect, use, and protect your personal information when you
          use our services.
        </p>
        <h3 className="text-2xl font-semibold text-[#663635] mb-4">
          Information We Collect
        </h3>
        <p className="mb-6">
          We may collect personal information such as your name, email address,
          phone number, and payment details when you register, book facilities,
          or interact with our services.
        </p>
        <h3 className="text-2xl font-semibold text-[#663635] mb-4">
          How We Use Your Information
        </h3>
        <p className="mb-6">
          We use your information to process bookings, manage your account, and
          improve our services. We may also send you promotional offers and
          updates about our platform.
        </p>
        <h3 className="text-2xl font-semibold text-[#663635] mb-4">
          Sharing Your Information
        </h3>
        <p className="mb-6">
          We do not share your personal information with third parties except
          when necessary to complete a transaction or comply with legal
          requirements.
        </p>
        <h3 className="text-2xl font-semibold text-[#663635] mb-4">Security</h3>
        <p className="mb-6">
          We implement security measures to protect your data. However, no
          method of transmission over the internet is entirely secure.
        </p>
        <h3 className="text-2xl font-semibold text-[#663635] mb-4">
          Contact Us
        </h3>
        <p className="mb-6">
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <a
            href="mailto:support@poshturf.com"
            className="text-blue-600 hover:underline"
          >
            support@poshturf.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
