import HeaderComponent from "../../components/header/Header";
import BreadcrumbComponent from "../../components/pagebreadcrumbs/Breadcrumb";
import RoomDetailsComponent from "../../components/rooms/RoomDetails";
import FooterComponent from "../../components/footer/Footer";

const RoomDetails = () => {
  return (
    <div>
      <HeaderComponent />
      <BreadcrumbComponent title={"Our Room"} slug={"room"} />
      <RoomDetailsComponent />
      <FooterComponent />
    </div>
  );
};

export default RoomDetails;
