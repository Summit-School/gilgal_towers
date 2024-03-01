import HeaderComponent from "../../components/header/Header";
import BreadcrumbComponent from "../../components/pagebreadcrumbs/Breadcrumb";
import FilterComponent from "../../components/filter/FilterComponent";
import RoomsSection from "../../components/rooms/Rooms";
import FooterComponent from "../../components/footer/Footer";

const RoomsPage = () => {
  return (
    <div>
      <HeaderComponent />
      <BreadcrumbComponent title={"Our Rooms"} slug={"rooms"} />
      {/* <FilterComponent /> */}
      <RoomsSection />
      <FooterComponent />
    </div>
  );
};

export default RoomsPage;
