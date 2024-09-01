import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
      <div className="prose">
        <p>
          At PoshTurf, we prioritize your privacy. This Privacy Policy outlines
          how we collect, use, and protect your personal information when you
          use our services.
        </p>
        <h3>Information We Collect</h3>
        <p>
          We may collect personal information such as your name, email address,
          phone number, and payment details when you register, book facilities,
          or interact with our services.
        </p>
        <h3>How We Use Your Information</h3>
        <p>
          We use your information to process bookings, manage your account, and
          improve our services. We may also send you promotional offers and
          updates about our platform.
        </p>
        <h3>Sharing Your Information</h3>
        <p>
          We do not share your personal information with third parties except
          when necessary to complete a transaction or comply with legal
          requirements.
        </p>
        <h3>Security</h3>
        <p>
          We implement security measures to protect your data. However, no
          method of transmission over the internet is entirely secure.
        </p>
        <h3>Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at support@poshturf.com.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
