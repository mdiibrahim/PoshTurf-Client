const ContactInformation = () => {
  return (
    <div>
      <section className="text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg">
          Office Address: 123 Sports Avenue, City, Country <br />
          Phone: (123) 456-7890 <br />
          Email:{" "}
          <a
            href="mailto:contact@poshturf.com"
            className="text-blue-600 hover:underline"
          >
            contact@poshturf.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default ContactInformation;
