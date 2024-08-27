import Achievement from "../components/ui/LandingPage/Achievement";
import Banner from "../components/ui/LandingPage/Banner";
import CustomerTestimonial from "../components/ui/LandingPage/CustomerTestimonial";
import FeaturedItem from "../components/ui/LandingPage/FeaturedItem";
import WorkFlow from "../components/ui/LandingPage/WorkFlow";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedItem />
      <WorkFlow />
      <CustomerTestimonial />
      <Achievement />
    </div>
  );
};

export default Home;
