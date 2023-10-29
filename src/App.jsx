import Articles from "./sections/Articles";
import Discount from "./sections/Discount";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Gallery from "./sections/Gallery";
import HowItWorks from "./sections/HowItWorks";
import Landing from "./sections/Landing";
import LatestEvents from "./sections/LatestEvents";
import NavBar from "./sections/NavBar";
import OurSkills from "./sections/OurSkills";
import PricingPlans from "./sections/PricingPlans";
import Services from "./sections/Services";
import Stats from "./sections/Stats";
import TeamMembers from "./sections/TeamMembers";
import Testimonials from "./sections/Testimonials";
import Video from "./sections/Video";

function App() {
  return (
    <div className="font-sans scroll-smooth">
      <NavBar />
      <Landing />
      <Articles />
      <Gallery />
      <Features />
      <Testimonials />
      <TeamMembers />
      <Services />
      <OurSkills />
      <HowItWorks />
      <LatestEvents />
      <PricingPlans />
      <Video />
      <Stats />
      <Discount />
      <Footer />
    </div>
  );
}
export default App;
