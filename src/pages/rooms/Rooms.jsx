import HeaderComponent from "../../components/header/Header";
import BreadcrumbComponent from "../../components/pagebreadcrumbs/Breadcrumb";
import RoomsSection from "../../components/rooms/Rooms";
import FooterComponent from "../../components/footer/Footer";

const RoomsPage = () => {
  return (
    <div>
      <HeaderComponent />
      <BreadcrumbComponent title={"Our Rooms"} slug={"rooms"} />
      <RoomsSection />
      <FooterComponent />
    </div>
  );
};

export default RoomsPage;
