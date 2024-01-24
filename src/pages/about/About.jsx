import HeaderComponent from "../../components/header/Header";
import BreadcrumbComponent from "../../components/pagebreadcrumbs/Breadcrumb";
import AboutSection from "../../components/about/About";
import VideoSection from "../../components/videosection/Video";
import GallerSection from "../../components/gallerysection/Gallery";
import FooterComponent from "../../components/footer/Footer";

const AboutPage = () => {
  return (
    <div>
      <HeaderComponent />
      <BreadcrumbComponent title={"About Us"} slug={"About Us"} />
      <AboutSection />
      <VideoSection />
      <GallerSection />
      <FooterComponent />
    </div>
  );
};

export default AboutPage;
