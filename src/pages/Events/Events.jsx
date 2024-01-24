import HeaderComponent from "../../components/header/Header";
import BreadcrumbComponent from "../../components/pagebreadcrumbs/Breadcrumb";
import EventSection from "../../components/Events/Events";
import FooterComponent from "../../components/footer/Footer";

const EventsPage = () => {
  return (
    <div>
      <HeaderComponent />
      <BreadcrumbComponent title={"Events"} slug={"events"} />
      <EventSection />
      <FooterComponent />
    </div>
  );
};

export default EventsPage;
