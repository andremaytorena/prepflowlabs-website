/** @format */
import { useState } from "react";
import { SlimLayout } from "../../../components/SlimLayout";
import { Logo } from "../../../components/Logo";
import { TextField } from "../../../components/Fields";
import { Button } from "../../../components/Button";
import LoadingWheel from "../home/sections/LoadingWheel";

export default function PrepcenterRegister() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        await fetch("https://api.urvadevelopments.com/api/v1/company/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email,
                phone,
            }),
        });
        setLoading(false);
        setSubmitted(true);
    };

    return (
        <div className="relative min-h-screen h-screen overflow-hidden ">
            <SlimLayout>
                <div className="flex">
                    <a href="/" aria-label="Home">
                        <Logo />
                    </a>
                </div>
                <h2 className="mt-4 text-lg font-semibold text-gray-900">
                    Get started
                </h2>
                <p className="mt-2 text-sm text-gray-700">
                    After filling out the form, we will contact you via email.
                </p>
                {!submitted ? (
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                        <TextField
                            label="First name"
                            name="first_name"
                            type="text"
                            autoComplete="given-name"
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        <TextField
                            label="Last name"
                            name="last_name"
                            type="text"
                            autoComplete="family-name"
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                        <TextField
                            className="col-span-full"
                            label="Email address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <TextField
                            className="col-span-full"
                            label="Phone"
                            name="phone"
                            type="phone"
                            autoComplete="phone"
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                        <div className="col-span-full">
                            <Button
                                onClick={() => handleSubmit()}
                                variant="solid"
                                className="h-10 w-full"
                            >
                                {!loading ? (
                                    <span>
                                        Start your trial{" "}
                                        <span aria-hidden="true">&rarr;</span>
                                    </span>
                                ) : (
                                    <LoadingWheel color="white" />
                                )}
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center pt-4 pb-10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="size-50 text-green-500"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                        <p className="mt-2 text-sm text-gray-700">
                            Successfully submitted form.
                        </p>
                    </div>
                )}
            </SlimLayout>
        </div>
    );
}
