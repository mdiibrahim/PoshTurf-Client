const MapIntegration = () => {
  return (
    <div>
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-6">Our Location</h2>
        <div className="flex justify-center">
          {/* Embedded Google Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0879729373744!2d144.95565131531835!3d-37.81720997975183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xb2d5b1ddc037888e!2sFlinders%20St%20Station!5e0!3m2!1sen!2sau!4v1637102031568!5m2!1sen!2sau"
            width="600"
            height="450"
            allowFullScreen={false}
            loading="lazy"
            className="border-0"
            title="Our Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default MapIntegration;
