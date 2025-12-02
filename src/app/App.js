// import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router, useLocation } from "react-router-dom";
// // import { HashRouter as Router, useLocation } from "react-router-dom";
// import withRouter from "../hooks/withRouter";
// import AppRoutes from "./routes";
// import Headermain from "../header";
// import "./App.css";

// function _ScrollToTop(props) {
//     const { pathname } = useLocation();
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [pathname]);
//     return props.children;
// }
// const ScrollToTop = withRouter( _ScrollToTop );

// export default function App() {
//     return (
//         // <Router basename={process.env.PUBLIC_URL}>
//         <Router>
//             <ScrollToTop>
//                 <Headermain />
//                 <AppRoutes />
//             </ScrollToTop>
//         </Router>
//     );
// }





import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, useLocation, Route, Routes } from "react-router-dom";
// import { HashRouter as Router, useLocation, Route, Routes  } from "react-router-dom";
import withRouter from "../hooks/withRouter";
import Headermain from "../header";
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";

const AnimatedRoutes = withRouter(({ location }) => (
    <TransitionGroup>
        <CSSTransition
            key={location.key}
            timeout={{
                enter: 400,
                exit: 400,
            }}
            classNames="page"
            unmountOnExit
        >
            <Routes location={location}>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </CSSTransition>
    </TransitionGroup>
));

function _ScrollToTop(props) {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return props.children;
}
const ScrollToTop = withRouter( _ScrollToTop );

export default function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
        {/* <Router> */}
            <ScrollToTop>
                <Headermain />
                <AnimatedRoutes />
            </ScrollToTop>
        </Router>
    );
}
