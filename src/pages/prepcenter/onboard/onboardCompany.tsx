/** @format */

import { useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { apiRequest } from "../../../utils/api/apiRequest";
import { FileUpload } from "../../../utils/files/fileUpload";
import { Button } from "../../../components/Button";
import LoadingWheel from "../../../components/LoadingWheel";

export const onboardCompany = async (
    first_name: string,
    last_name: string,
    email: string,
    company_name: string,
    domain: string,
    logo_file: File | null,
    password: string,
    confirm_password: string,
    accent_color: string
) => {
    return apiRequest("/whitelabel/onboard", "POST", logo_file, true, {
        first_name,
        last_name,
        email,
        company_name,
        domain,
        password,
        confirm_password,
        accent_color,
    });
};

export default function OnboardCompany() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [domain, setDomain] = useState("");
    const [accentColor, setAccentColor] = useState("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const handleSave = async () => {
        setLoading(true);
        if (!canSubmit) {
            setLoading(false);
            return;
        }
        const data = await onboardCompany(
            firstName,
            lastName,
            email,
            companyName,
            domain,
            selectedFile,
            password,
            confirmPassword,
            accentColor
        );
        if (data.status === "success") {
            setIsSubmitted(true);
        }
        setLoading(false);
    };

    const canSubmit =
        firstName.length > 0 &&
        lastName.length > 0 &&
        email.length > 0 &&
        companyName.length > 0 &&
        domain.length > 0 &&
        password.length > 0 &&
        confirmPassword.length > 0 &&
        accentColor.length > 0 &&
        selectedFile;

    const [isSubmitted, setIsSubmitted] = useState(false);

    return (
        <div className="items-center flex flex-col justify-center pt-10 ">
            {!isSubmitted ? (
                <>
                    <div className="space-y-12 sm:w-2/5 w-full sm:px-0 px-5">
                        <h2 className="font-bold text-gray-900 text-2xl">
                            Onboard Company
                        </h2>

                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base/7 font-semibold text-gray-900">
                                Account Information
                            </h2>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        First name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="first-name"
                                            name="first-name"
                                            type="text"
                                            autoComplete="given-name"
                                            value={firstName}
                                            onChange={(e) =>
                                                setFirstName(e.target.value)
                                            }
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400  focus:outline-2 focus:-outline-offset-2 focus:outline-accent sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="last-name"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Last name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="last-name"
                                            name="last-name"
                                            type="text"
                                            autoComplete="family-name"
                                            value={lastName}
                                            onChange={(e) =>
                                                setLastName(e.target.value)
                                            }
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400  focus:outline-2 focus:-outline-offset-2 focus:outline-accent sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400  focus:outline-2 focus:-outline-offset-2 focus:outline-accent sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label
                                        htmlFor="street-address"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Company Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            value={companyName}
                                            onChange={(e) =>
                                                setCompanyName(e.target.value)
                                            }
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-accent sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label
                                        htmlFor="street-address"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Domain
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            value={domain}
                                            onChange={(e) =>
                                                setDomain(e.target.value)
                                            }
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-accent sm:text-sm/6"
                                            placeholder="urvafreight.com"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label
                                        htmlFor="street-address"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Accent Color
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            value={accentColor}
                                            onChange={(e) =>
                                                setAccentColor(e.target.value)
                                            }
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-accent sm:text-sm/6"
                                            placeholder="#9e7ad8"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-full border-b border-gray-900/10 pb-12">
                            <label
                                htmlFor="cover-photo"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                Company Logo
                            </label>
                            <p className="text-sm ">
                                Upload your logo with a clear/invisible
                                background. Ideally no text on the logo.
                            </p>
                            <FileUpload
                                selectedFile={selectedFile}
                                setSelectedFile={setSelectedFile}
                                fileType={"Any"}
                            />
                        </div>
                        <div className="sm:col-span-3">
                            <label
                                htmlFor="last-name"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400  focus:outline-2 focus:-outline-offset-2 focus:outline-accent sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label
                                htmlFor="last-name"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                Confirm Password
                            </label>
                            <div className="mt-2">
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400  focus:outline-2 focus:-outline-offset-2 focus:outline-accent sm:text-sm/6"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6 pb-20">
                        <button
                            type="button"
                            className="text-sm/6 font-semibold text-gray-900"
                        >
                            Cancel
                        </button>
                        <Button onClick={handleSave} className="gap-x-2">
                            {loading ? <LoadingWheel color="white" /> : null}
                            <p>Save</p>
                        </Button>
                    </div>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center pt-20">
                    <div className="h-36 w-36 bg-green-100 rounded-full items-center justify-center flex">
                        <CheckIcon className="text-green-500 h-20 w-20" />
                    </div>
                    <p className="pt-6 max-w-3/5 text-center">
                        Your account details have been recorded. We will follow
                        up shortly with more instructions.
                    </p>
                </div>
            )}
        </div>
    );
}
