/** @format */

import { createBrowserRouter, redirect } from "react-router-dom";
import HomePage from "./pages/home/page";
import PrepcenterHomePage from "./pages/prepcenter/home/page";
import ClientManagement from "./pages/prepcenter/client-management/page";
import PrepCenterInventoryManagement from "./pages/prepcenter/inventory-management/page";
import PrepcenterShipments from "./pages/prepcenter/shipments/page";
import PrepcenterKPIS from "./pages/prepcenter/kpis/page";
import PrepcenterBilling from "./pages/prepcenter/billing/page";
import PrepcenterReferrals from "./pages/prepcenter/affiliates/page";
import PrepcenterEmployees from "./pages/prepcenter/employees/page";
import PricingPage from "./pages/pricing/page";
import PrepcenterRegister from "./pages/prepcenter/register/page";
import PrepcenterContact from "./pages/prepcenter/contact/page";
import NotFound from "./pages/notfound/page";
import PrivacyPolicy from "./pages/privacy-policy/page";
import OnboardCompany from "./pages/prepcenter/onboard/onboardCompany";
import SetupDomain from "./pages/prepcenter/onboard/setupDomain";

// const Home = lazy(() => import("./pages/home/page"));
// const NotFound = lazy(() => import("./pages/not-found/page"));

const routes = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/pricing", element: <PricingPage /> },

    { path: "/prepcenter", element: <PrepcenterHomePage /> },
    { path: "/contact", element: <PrepcenterContact /> },
    { path: "/prepcenter/client-management", element: <ClientManagement /> },
    {
        path: "/prepcenter/inventory-management",
        element: <PrepCenterInventoryManagement />,
    },
    { path: "/prepcenter/shipments", element: <PrepcenterShipments /> },
    { path: "/prepcenter/kpis", element: <PrepcenterKPIS /> },
    { path: "/prepcenter/billing", element: <PrepcenterBilling /> },
    { path: "/prepcenter/affiliates", element: <PrepcenterReferrals /> },
    { path: "/prepcenter/employees", element: <PrepcenterEmployees /> },
    { path: "/prepcenter/register", element: <PrepcenterRegister /> },

    { path: "/prepcenter/onboard", element: <OnboardCompany /> },
    { path: "/prepcenter/onboard/domains", element: <SetupDomain /> },

    { path: "/privacy-policy", element: <PrivacyPolicy /> },

    { path: "/logout", loader: async () => redirect("/") },
    { path: "*", element: <NotFound /> },
]);

export default routes;
