import ContactInformation from "../components/ui/AboutUsPage/ContactInformation";
import HistoryMilestones from "../components/ui/AboutUsPage/HistoryMilestones";
import MissionStatement from "../components/ui/AboutUsPage/MissionStatement";
import TeamSection from "../components/ui/AboutUsPage/TeamSection";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <MissionStatement />
      <TeamSection />
      <HistoryMilestones />
      <ContactInformation />
    </div>
  );
};

export default AboutUs;
