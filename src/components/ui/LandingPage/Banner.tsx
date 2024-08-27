import { Link } from "react-router-dom";
import bannerImage from "../../../assets/banner.png";
const Banner = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex items-center"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl font-bold mb-6">
          Book Your Sports Facility Today!
        </h1>
        <p className="mb-8 text-lg">
          Get the best facilities for sports and leisure at PoshTurf. Easy
          booking, secure payments, and excellent services.
        </p>
        <Link
          to="/bookings"
          className="bg-primary px-6 py-3 text-lg font-semibold rounded-md hover:bg-blue-600"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
};

export default Banner;
