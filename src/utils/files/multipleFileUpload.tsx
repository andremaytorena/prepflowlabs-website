/** @format */

import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";

interface MultipleFileUploadProps {
    selectedFiles: File[];
    // setSelectedFiles: React.Dispatch<React.SetStateAction<File[]>>;
    handleFileChangeRoot: (orderId: string, files: File[]) => void;
    removeFile: (orderId: string, fileToRemove: File) => void;
    orderId: string;
    fileType?: string;
}

export const MultipleFileUpload: React.FC<MultipleFileUploadProps> = ({
    selectedFiles,
    handleFileChangeRoot,
    removeFile,
    orderId,
    fileType = "CSV",
}) => {
    const [dragging, setDragging] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            // Convert FileList to an array and append new files to the existing ones
            const filesArray = Array.from(event.target.files);
            // setSelectedFiles((prevFiles) => [...prevFiles, ...filesArray]);
            handleFileChangeRoot(orderId, filesArray);
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

        if (event.dataTransfer.files) {
            // Convert the dropped files (FileList) to an array
            const droppedFilesArray = Array.from(event.dataTransfer.files);

            // Update the selected files, appending the new dropped files
            // setSelectedFiles((prevFiles) => [
            //     ...prevFiles,
            //     ...droppedFilesArray,
            // ]);
            handleFileChangeRoot(orderId, droppedFilesArray);
        }
    };

    // const handleRemoveFile = (indexToRemove: number) => {
    //     setSelectedFiles((prevFiles) =>
    //         prevFiles.filter((_, index) => index !== indexToRemove)
    //     );
    // };

    return (
        <div className="flex flex-row space-x-3 w-full overflow-x-scroll">
            <div
                className={`flex justify-center rounded-lg border border-dashed ${
                    dragging ? "border-accent" : "border-gray-900/25"
                } px-6 py-6 min-w-64 h-40`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
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
            </div>
            {selectedFiles &&
                selectedFiles.map((item, index) => (
                    <div
                        key={index}
                        className={`flex justify-center rounded-lg border border-dashed overflow-x-auto ${
                            dragging
                                ? "border-accent"
                                : "border-gray-900/25 relative"
                        } px-6 py-6 min-w-56 h-40`}
                    >
                        <div className="flex w-0 flex-1 items-center overflow-y-hidden">
                            <img
                                className="flex flex-1 items-center aspect-auto"
                                src={URL.createObjectURL(item)}
                            />
                            <div className="absolute right-0 top-0">
                                <XMarkIcon
                                    onClick={
                                        removeFile
                                            ? () => removeFile(orderId, item)
                                            : () => {}
                                    }
                                    className="w-8 h-8 hover:text-accenthighlight text-accent"
                                />
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};
