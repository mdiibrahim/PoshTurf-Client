import { Link } from "react-router-dom";

const FeaturedItem = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Facilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Facility Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/assets/facility1.jpg"
              alt="Facility 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">Turf Soccer Field</h3>
              <p className="text-gray-700 mb-4">
                High-quality turf soccer field available for booking.
              </p>
              <Link
                to="/facility/:id"
                className="block text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                View Details
              </Link>
            </div>
          </div>
          {/* Add more cards as needed */}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItem;
