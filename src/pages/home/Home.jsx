import HeaderComponent from "../../components/header/Header";
import HeroComponent from "../../components/herosection/Hero";
import AboutComponent from "../../components/aboutsection/About";
import ServicesComponent from "../../components/services/Services";
import RoomsComponent from "../../components/roomssection/Rooms";
import TestimonialsComponent from "../../components/testimonialsection/Testimonials";
import BlogComponent from "../../components/blogsection/Blog";
import FooterComponent from "../../components/footer/Footer";

const HomePage = () => {
  return (
    <div>
      <HeaderComponent />
      <HeroComponent />
      <AboutComponent />
      <ServicesComponent />
      <RoomsComponent />
      <TestimonialsComponent />
      <BlogComponent />
      <FooterComponent />
    </div>
  );
};

export default HomePage;
