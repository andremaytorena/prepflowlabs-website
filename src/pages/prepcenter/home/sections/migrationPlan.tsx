/** @format */
import iconTemplate from "./iconTemplate.svg";
import { FaFileImport } from "react-icons/fa6";
import { GrConfigure } from "react-icons/gr";
import { LiaShippingFastSolid } from "react-icons/lia";

export default function MigrationPlan() {
    return (
        <section className="flex flex-col items-center mx-auto max-w-4xl text-center bg-gray/60 sm:px-20 rounded-2xl py-10">
            <h1 className="font-bold text-3xl sm:mx-0 mx-4">
                Switch to PrepFlow with Zero Headache
            </h1>
            <p className="mt-4 text-slate-700 font-medium sm:mx-0 mx-4">
                Whether you're running another WMS like PrepBusiness, PrepFlow
                makes the switch easy. Migrate your data, keep your workflows,
                and start shipping smarter today.
            </p>

            <div className="mt-10 grid md:grid-cols-3 gap-12 sm:mx-0 mx-4">
                <div className="flex flex-col items-center">
                    <div className="relative inline-block">
                        <img src={iconTemplate} alt="" />
                        <FaFileImport className="w-7 h-auto absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#302b63]" />
                    </div>

                    <h3 className="font-semibold text-lg">
                        Step 1: Import Your Data
                    </h3>
                    <p className="mt-2 text-slate-600">
                        Upload your inventory, client lists and shipment
                        history. We handle the rest.
                    </p>
                </div>
                <div className="flex flex-col items-center ">
                    <div className="relative inline-block">
                        <img src={iconTemplate} alt="" />
                        <GrConfigure className="w-7 h-auto absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#302b63]" />
                    </div>

                    <h3 className="font-semibold text-lg">
                        Step 2: Configure Your Workflow
                    </h3>
                    <p className="mt-2 text-slate-600">
                        Set labels, storage locations and branding to match your
                        business — custom for you.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="relative inline-block">
                        <img src={iconTemplate} alt="" />
                        <LiaShippingFastSolid className="w-7 h-auto absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#302b63]" />
                    </div>
                    <h3 className="font-semibold text-lg">
                        Step 3: Go Live & Ship
                    </h3>
                    <p className="mt-2 text-slate-600">
                        Launch your new system without downtime. Your team keeps
                        working while we transition behind the scenes.
                    </p>
                </div>
            </div>
        </section>
    );
}
