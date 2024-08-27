const CustomerTestimonial = () => {
  return (
    <div>
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Customer Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <p className="text-lg font-semibold mb-4">John Doe</p>
              <p className="text-gray-600">
                "The best turf I have ever played on! Booking was seamless, and
                the facility was top-notch."
              </p>
            </div>
            {/* Add more testimonial cards */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerTestimonial;
