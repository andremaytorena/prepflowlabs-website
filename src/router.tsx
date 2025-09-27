/** @format */

import { createBrowserRouter, redirect } from "react-router-dom";
import HomePage from "./pages/home/page";
import PrepcenterHomePage from "./pages/prepcenter/home/page";

// const Home = lazy(() => import("./pages/home/page"));
// const NotFound = lazy(() => import("./pages/not-found/page"));

const routes = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/prepcenter", element: <PrepcenterHomePage /> },
    { path: "/logout", loader: async () => redirect("/") },
    // { path: "*", element: <NotFound /> },
]);

export default routes;
