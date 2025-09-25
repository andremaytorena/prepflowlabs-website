/** @format */

// /** @format */

// import Header from "../../components/header2";
// import { FaChevronRight } from "react-icons/fa";
// import Hero from "../../components/hero";

// function HomePage() {
//     return (
//         <div className="">
//             <Header />
//             <div className="mt-36">
//                 <Hero />
//             </div>
//         </div>
//     );
// }

// export default HomePage;

/** @format */

import Header from "../../components/header2";
import { FaChevronRight } from "react-icons/fa";
import Hero from "../../components/hero";

function HomePage() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Content */}
            <Header />
            <div className="mt-36 relative z-10">
                <Hero />
            </div>
        </div>
    );
}

export default HomePage;
