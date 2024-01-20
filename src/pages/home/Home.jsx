import HeaderComponent from "../../components/header/Header";
import HeroComponent from "../../components/herosection/Hero";
import AboutComponent from "../../components/aboutsection/About";
import ServicesComponent from "../../components/services/Services";
import RoomsComponent from "../../components/roomssection/Rooms";
import TestimonialsComponent from "../../components/testimonialsection/Testimonials";
import BlogComponent from "../../components/blogsection/Blog";
import FooterComponent from "../../components/footer/Footer";
import SearchModalComponent from "../../components/searchmodal/SearchModal";

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
      <SearchModalComponent />
    </div>
  );
};

export default HomePage;
