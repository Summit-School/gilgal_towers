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
import "./js/jquery.slicknav";
// import "./js/owl.carousel.min";
// import "./js/main";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageError from "./pages/PageError";
import HomePage from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* UNPROTECTED ROUTES */}
          <Route path="/" element={<HomePage />} />

          {/* 404 ROUTE */}
          <Route path="*" element={<PageError />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
