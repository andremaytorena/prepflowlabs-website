/** @format */

import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { SlimLayout } from "../../components/SlimLayout";

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <div className="h-screen">
            <SlimLayout>
                <div className="flex">
                    <Logo />
                </div>
                <p className="mt-20 text-sm font-medium text-gray-700">404</p>
                <h1 className="mt-3 text-lg font-semibold text-gray-900">
                    Page not found
                </h1>
                <p className="mt-3 text-sm text-gray-700">
                    Sorry, we couldn't find the page you're looking for.
                </p>
                <Button onClick={() => navigate("/")} className="mt-10">
                    Go back home
                </Button>
            </SlimLayout>
        </div>
    );
}
