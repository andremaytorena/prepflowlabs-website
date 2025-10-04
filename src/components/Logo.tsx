/** @format */

export function Logo() {
    return (
        <div className="flex flex-row items-center space-x-4">
            <img
                className="w-16 h-auto"
                src="/logo-transparent.png"
                alt=""
                sizes="1rem"
            />
            <h1 className="text-2xl font-bold whitespace-nowrap text-[#182145]">
                PrepFlow
            </h1>
        </div>
    );
}
