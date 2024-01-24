import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

import "./css/bootstrap.min.css";
import "./css/elegant-icons.css";
import "./css/flaticon.css";
import "./css/font-awesome.min.css";
import "./css/jquery-ui.min.css";
import "./css/magnific-popup.css";
import "./css/nice-select.css";
import "./css/owl.carousel.min.css";
import "./css/slicknav.min.css";
import "./css/style.css";

// import "./js/jquery-3.3.1.min";
// import "./js/bootstrap.min";
// import "./js/jquery.magnific-popup.min";
import "./js/jquery.nice-select.min";
// import "./js/jquery-ui.min";
// import "./js/jquery.slicknav";
// import "./js/owl.carousel.min";
// import "./js/main";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageError from "./pages/PageError";
import HomePage from "./pages/home/Home";
import RoomsPage from "./pages/rooms/Rooms";
import RoomDetails from "./pages/rooms/RoomDetails";
import AboutPage from "./pages/about/About";
import EventsPage from "./pages/Events/Events";
import EventDetails from "./pages/Events/EventDetails";
import ContactPage from "./pages/contact/Contact";
import GalleryPage from "./pages/Gallery/Gallery";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* UNPROTECTED ROUTES */}
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/room-details/:id" element={<RoomDetails />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/event-details/:id" element={<EventDetails />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />

          {/* 404 ROUTE */}
          <Route path="*" element={<PageError />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
