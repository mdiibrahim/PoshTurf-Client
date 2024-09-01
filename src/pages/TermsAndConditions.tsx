import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="container mx-auto p-8 bg-gradient-to-r from-green-50 to-blue-100 my-20 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#663635]">
        Terms and Conditions
      </h2>
      <div className="prose max-w-none">
        <p className="text-lg leading-relaxed mb-6">
          Welcome to PoshTurf! By accessing or using our platform, you agree to
          the following terms and conditions.
        </p>
        <h3 className="text-2xl font-semibold text-[#663635] mb-4">
          Use of Services
        </h3>
        <p className="mb-6">
          Our services allow you to book sports facilities. You agree to use our
          platform responsibly and to abide by the rules and regulations of the
          facilities you book.
        </p>
        <h3 className="text-2xl font-semibold text-[#663635] mb-4">
          Bookings and Payments
        </h3>
        <p className="mb-6">
          All bookings must be paid in full at the time of reservation. In the
          event of a cancellation, refunds will be processed according to our
          cancellation policy.
        </p>
        <h3 className="text-2xl font-semibold text-[#663635] mb-4">
          Account Responsibilities
        </h3>
        <p className="mb-6">
          You are responsible for maintaining the confidentiality of your
          account and for all activities that occur under your account.
        </p>
        <h3 className="text-2xl font-semibold text-[#663635] mb-4">
          Changes to Terms
        </h3>
        <p className="mb-6">
          We may update these terms from time to time. Continued use of our
          services after any changes indicates your acceptance of the new terms.
        </p>
        <h3 className="text-2xl font-semibold text-[#663635] mb-4">
          Contact Us
        </h3>
        <p className="mb-6">
          If you have any questions about these Terms and Conditions, please
          contact us at{" "}
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

export default TermsAndConditions;
