import ContactInformation from "../components/ui/AboutUsPage/ContactInformation";
import ContactForm from "../components/ui/ContactUsPage/ContactForm";
import MapIntegration from "../components/ui/ContactUsPage/MapIntegration";

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <ContactForm />
      <MapIntegration />
      <ContactInformation />
    </div>
  );
};

export default ContactUs;
