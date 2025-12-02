// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import withRouter from "../hooks/withRouter"
// import { Home } from "../pages/home";
// import { Portfolio } from "../pages/portfolio";
// import { ContactUs } from "../pages/contact";
// import { About } from "../pages/about";
// import { CSSTransition, TransitionGroup } from "react-transition-group";

// const AnimatedRoutes = withRouter(({ location }) => (
//     <TransitionGroup>
//         <CSSTransition
//             key={location.key}
//             timeout={{
//                 enter: 400,
//                 exit: 400,
//             }}
//             classNames="page"
//             unmountOnExit
//         >
//             <Routes location={location}>
//                 <Route exact path="/" element={<Home />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/portfolio" element={<Portfolio />} />
//                 <Route path="/contact" element={<ContactUs />} />
//                 <Route path="*" element={<Home />} />
//             </Routes>
//         </CSSTransition>
//     </TransitionGroup>
// ));

// function AppRoutes() {
//     return (
//         <div className="s_c">
//             <AnimatedRoutes />
//         </div>
//     );
// }

// export default AppRoutes;


//     AbortedDeferredError, 
//     Await, 
//     BrowserRouter, 
//     Form, 
//     HashRouter, 
//     Link, 
//     MemoryRouter, 
//     NavLink, 
//     Navigate, 
//     NavigationType, 
//     Outlet, 
//     Route, 
//     Router, 
//     RouterProvider, 
//     Routes, 
//     ScrollRestoration, 
//     UNSAFE_DataRouterContext, 
//     UNSAFE_DataRouterStateContext, 
//     UNSAFE_ErrorResponseImpl, 
//     UNSAFE_FetchersContext, 
//     UNSAFE_LocationContext, 
//     UNSAFE_NavigationContext, 
//     UNSAFE_RouteContext, 
//     UNSAFE_ViewTransitionContext, 
//     UNSAFE_useRouteId, 
//     UNSAFE_useScrollRestoration, 
//     createBrowserRouter, 
//     createHashRouter, 
//     createMemoryRouter, 
//     createPath, 
//     createRoutesFromChildren, 
//     createRoutesFromElements, 
//     createSearchParams, 
//     defer, 
//     generatePath, 
//     isRouteErrorResponse, 
//     json, 
//     matchPath, 
//     matchRoutes, 
//     parsePath, 
//     redirect, 
//     redirectDocument, 
//     renderMatches, 
//     replace, 
//     resolvePath, 
//     unstable_HistoryRouter, 
//     unstable_usePrompt, 
//     useActionData, 
//     useAsyncError, 
//     useAsyncValue, 
//     useBeforeUnload, 
//     useBlocker, 
//     useFetcher, 
//     useFetchers, 
//     useFormAction, 
//     useHref, 
//     useInRouterContext, 
//     useLinkClickHandler, 
//     useLoaderData, 
//     useLocation, 
//     useMatch, 
//     useMatches, 
//     useNavigate, 
//     useNavigation, 
//     useNavigationType, 
//     useOutlet, 
//     useOutletContext, 
//     useParams, 
//     useResolvedPath, 
//     useRevalidator, 
//     useRouteError, 
//     useRouteLoaderData, 
//     useRoutes, 
//     useSearchParams, 
//     useSubmit, 
//     useViewTransitionState
// )