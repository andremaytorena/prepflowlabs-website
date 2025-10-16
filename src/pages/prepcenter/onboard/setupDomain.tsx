/** @format */

import { CheckIcon, ClipboardDocumentIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { apiRequest } from "../../../utils/api/apiRequest";
import { FileUpload } from "../../../utils/files/fileUpload";
import { Button } from "../../../components/Button";
import LoadingWheel from "../home/sections/LoadingWheel";

export function CopyButton({ textToCopy }: { textToCopy: string }) {
    const [copied, setCopied] = useState(false);

    const copyUrl = () => {
        navigator.clipboard.writeText(textToCopy);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <button
            onClick={(e) => {
                e.stopPropagation();
                copyUrl();
            }}
            className="px-2"
        >
            {copied ? (
                <CheckIcon className="w-4 h-4 text-green-500" />
            ) : (
                <ClipboardDocumentIcon className="w-4 h-4" />
            )}
        </button>
    );
}

function DomainRecord({
    type,
    name,
    value,
    index,
}: {
    type: string;
    name: string;
    value: string;
    index: number;
}) {
    return (
        <div>
            Record {index}
            <div className="bg-gray-100 rounded-lg">
                <div className="grid grid-cols-3 text-base px-4 py-4">
                    <div>
                        <h2 className="font-medium text-base">Type</h2>
                        <p>{type}</p>
                    </div>
                    <div>
                        <h2 className="font-medium text-base">Name</h2>
                        <p>{name}</p>
                    </div>
                    <div>
                        <h2 className="font-medium text-base">Value</h2>
                        <p className="flex flex-row items-center">
                            {value}
                            <CopyButton textToCopy={value} />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const setupDomain = async (file: File | null) => {
    return apiRequest("/whitelabel/setup-domain", "POST", file, true);
};

export default function SetupDomain() {
    const [loading, setLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSave = async () => {
        setLoading(true);
        const data = await setupDomain(selectedFile);
        if (data.status === "success") {
            setIsSubmitted(true);
        }
        setLoading(false);
    };

    const domains = [
        { type: "CNAME", name: "api", value: "mqxbz8zg.up.railway.app" },
        {
            type: "CNAME",
            name: "app",
            value: "prepflow-dashboard.pages.dev",
        },
    ];

    const blackBoxDomains = [
        { type: "CNAME", name: "api", value: "jyl7w8kz.up.railway.app" },
        {
            type: "CNAME",
            name: "dashboard",
            value: "20ce3145ddb71897.vercel-dns-016.com",
        },
    ];

    // ✅ Detect query param
    const searchParams = new URLSearchParams(window.location.search);
    const company = searchParams.get("company");

    // ✅ Use correct domains list based on param
    const activeDomains =
        company === "blackboxprepcenter" ? blackBoxDomains : domains;

    return (
        <div className="items-center flex flex-col justify-center pt-10 ">
            {!isSubmitted ? (
                <>
                    <div className="space-y-12 sm:w-2/5 w-full sm:px-0 px-5">
                        <h2 className="font-bold text-gray-900 text-2xl">
                            Onboard Company
                        </h2>
                        <div>
                            <h2 className="text-base/7 font-semibold text-gray-900 pb-2">
                                Setup Domain
                            </h2>
                            <p className="pb-2">
                                Please add these following records to your
                                domain custom records. If you are unsure how to,
                                here is a guide,{" "}
                                <a
                                    className="text-accent cursor-pointer font-medium"
                                    href="https://www.youtube.com/watch?v=P-hRkV6pI0M"
                                >
                                    press here to see the guide.
                                </a>{" "}
                                If you are not using Namecheap, the process is
                                the same, if unsure google "How to add domain
                                record to domain provider"
                            </p>
                            <div className="flex flex-col space-y-2">
                                {activeDomains.map((domain, index) => (
                                    <DomainRecord
                                        key={index}
                                        type={domain.type}
                                        name={domain.name}
                                        value={domain.value}
                                        index={index + 1}
                                    />
                                ))}
                            </div>
                            <div className="col-span-full border-b border-gray-900/10 pb-12 pt-4">
                                <label
                                    htmlFor="cover-photo"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    Confirm Photo
                                </label>
                                <p className="text-sm ">
                                    Please upload a screenshot of the uploaded
                                    domain records so that we can verify they
                                    are correctly inputted.
                                </p>
                                <FileUpload
                                    selectedFile={selectedFile}
                                    setSelectedFile={setSelectedFile}
                                    fileType={"Any"}
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
                        Your domain details have been recorded. We will follow
                        up shortly with more instructions.
                    </p>
                </div>
            )}
        </div>
    );
}
