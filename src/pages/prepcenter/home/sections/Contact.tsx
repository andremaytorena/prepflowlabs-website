/** @format */

"use client";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import LoadingWheel from "./LoadingWheel";
import CalendlyEmbed from "./CalendlyEmbed";

export default function Contact() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
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
                message,
            }),
        });
        setLoading(false);
        setSubmitted(true);
    };

    return (
        <div>
            <div className="relative isolate bg-white">
                <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                    <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-20">
                        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                                <svg
                                    aria-hidden="true"
                                    className="absolute inset-0 size-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
                                >
                                    <defs>
                                        <pattern
                                            x="100%"
                                            y={-1}
                                            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                                            width={200}
                                            height={200}
                                            patternUnits="userSpaceOnUse"
                                        >
                                            <path
                                                d="M130 200V.5M.5 .5H200"
                                                fill="none"
                                            />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="white"
                                        width="100%"
                                        height="100%"
                                        strokeWidth={0}
                                    />
                                    <svg
                                        x="100%"
                                        y={-1}
                                        className="overflow-visible fill-gray-50"
                                    >
                                        <path
                                            d="M-470.5 0h201v201h-201Z"
                                            strokeWidth={0}
                                        />
                                    </svg>
                                    <rect
                                        fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                                        width="100%"
                                        height="100%"
                                        strokeWidth={0}
                                    />
                                </svg>
                            </div>
                            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                Get in touch
                            </h2>
                            <p className="mt-6 text-lg/8 text-gray-600">
                                Looking for more information? or a free trial?
                                Fill out the contact form and we'll be in touch.
                            </p>
                            <dl className="mt-10 space-y-4 text-base/7 text-gray-600">
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Email</span>
                                        <EnvelopeIcon
                                            aria-hidden="true"
                                            className="h-7 w-6 text-gray-400"
                                        />
                                    </dt>
                                    <dd>
                                        <a
                                            href="mailto:hello@example.com"
                                            className="hover:text-gray-900"
                                        >
                                            support@prepflowlabs.com
                                        </a>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <div className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-20">
                        {!submitted ? (
                            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="first-name"
                                            className="block text-sm/6 font-semibold text-gray-900"
                                        >
                                            First name
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                id="first-name"
                                                name="first-name"
                                                type="text"
                                                value={firstName}
                                                onChange={(e) =>
                                                    setFirstName(e.target.value)
                                                }
                                                autoComplete="given-name"
                                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline  -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline  focus:-outline-offset-2 focus:outline-[#C33764]"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="last-name"
                                            className="block text-sm/6 font-semibold text-gray-900"
                                        >
                                            Last name
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                id="last-name"
                                                name="last-name"
                                                type="text"
                                                autoComplete="family-name"
                                                value={lastName}
                                                onChange={(e) =>
                                                    setLastName(e.target.value)
                                                }
                                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline  focus:-outline-offset-2 focus:outline-[#C33764]"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm/6 font-semibold text-gray-900"
                                        >
                                            Email
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline  -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline  focus:-outline-offset-2 focus:outline-[#C33764]"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="phone-number"
                                            className="block text-sm/6 font-semibold text-gray-900"
                                        >
                                            Phone number
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                id="phone-number"
                                                name="phone-number"
                                                type="tel"
                                                autoComplete="tel"
                                                value={phone}
                                                onChange={(e) =>
                                                    setPhone(e.target.value)
                                                }
                                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline  -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline  focus:-outline-offset-2 focus:outline-[#C33764]"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="message"
                                            className="block text-sm/6 font-semibold text-gray-900"
                                        >
                                            Message
                                        </label>
                                        <div className="mt-2.5">
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={message}
                                                onChange={(e) =>
                                                    setMessage(e.target.value)
                                                }
                                                rows={4}
                                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline  -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline  focus:-outline-offset-2 focus:outline-[#C33764]"
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 flex justify-end">
                                    <button
                                        onClick={() => handleSubmit()}
                                        className="w-32 cursor-pointer rounded-md bg-gradient-to-r from-[#C33764] via-[#302b63] to-[#1D2671] py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#C33764] hover:from-[#C33764] hover:via-[#302b63] hover:to-[#1D2671] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#C33764]"
                                    >
                                        {!loading ? (
                                            <p>Send message</p>
                                        ) : (
                                            <LoadingWheel color="white" />
                                        )}
                                    </button>
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
                                    className="size-30 text-green-500"
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
                    </div>
                </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center justify-items-center pt-14 pr-6">
                <h1 className="px-6 pb-4 text-3xl font-bold tracking-tight text-gray-900 sm:pb-0">
                    Schedule an Onboarding Meeting
                </h1>
                <CalendlyEmbed url="https://calendly.com/urvadevelopments/prepflow-meeting" />
            </div>
        </div>
    );
}
