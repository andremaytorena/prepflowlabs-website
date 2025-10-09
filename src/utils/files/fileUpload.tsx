/** @format */

import React, { useState } from "react";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";

interface FileUploadProps {
    selectedFile: File | null;
    setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>;
    fileType?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
    selectedFile,
    setSelectedFile,
    fileType = "CSV",
}) => {
    const [dragging, setDragging] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        setDragging(true);
    };

    const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        setDragging(false);
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        setDragging(false);

        if (event.dataTransfer.files && event.dataTransfer.files[0]) {
            setSelectedFile(event.dataTransfer.files[0]);
        }
    };

    return (
        <div className="col-span-full pt-3 w-full">
            <div
                className={`mt-2 flex justify-center rounded-lg border border-dashed ${
                    dragging ? "border-accent" : "border-gray-900/25"
                } px-6 py-10 w-full`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                {selectedFile === null ? (
                    <div className="text-center">
                        <svg
                            aria-hidden="true"
                            className="mx-auto h-12 w-12 text-gray-300"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 15a4 4 0 004 4h10a4 4 0 004-4M7 10l5-5m0 0l5 5m-5-5v12"
                            />
                        </svg>
                        <div className="mt-4 flex text-sm leading-6 text-gray-600 w-full">
                            <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer rounded-md bg-white font-semibold text-accent focus-within:outline-none hover:text-accenthighlight"
                            >
                                <span>Upload a file</span>
                                <input
                                    id="file-upload"
                                    name="file-upload"
                                    type="file"
                                    className="sr-only"
                                    onChange={handleFileChange}
                                />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs leading-5 text-gray-600">
                            {fileType} up to 10MB
                        </p>
                    </div>
                ) : (
                    <div className="flex w-0 flex-1 items-center relative">
                        <PaperClipIcon
                            aria-hidden="true"
                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                        />
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                            <span className="truncate font-medium">
                                {selectedFile.name}
                            </span>
                        </div>
                        <div className="absolute right-0">
                            <XMarkIcon
                                onClick={() => setSelectedFile(null)}
                                className="w-8 h-8 hover:text-accenthighlight text-accent"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
