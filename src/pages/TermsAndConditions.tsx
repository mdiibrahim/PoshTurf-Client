import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Terms and Conditions</h2>
      <div className="prose">
        <p>
          Welcome to PoshTurf! By accessing or using our platform, you agree to
          the following terms and conditions.
        </p>
        <h3>Use of Services</h3>
        <p>
          Our services allow you to book sports facilities. You agree to use our
          platform responsibly and to abide by the rules and regulations of the
          facilities you book.
        </p>
        <h3>Bookings and Payments</h3>
        <p>
          All bookings must be paid in full at the time of reservation. In the
          event of a cancellation, refunds will be processed according to our
          cancellation policy.
        </p>
        <h3>Account Responsibilities</h3>
        <p>
          You are responsible for maintaining the confidentiality of your
          account and for all activities that occur under your account.
        </p>
        <h3>Changes to Terms</h3>
        <p>
          We may update these terms from time to time. Continued use of our
          services after any changes indicates your acceptance of the new terms.
        </p>
        <h3>Contact Us</h3>
        <p>
          If you have any questions about these Terms and Conditions, please
          contact us at support@poshturf.com.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
