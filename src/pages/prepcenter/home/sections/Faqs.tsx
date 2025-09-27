/** @format */

import { Container } from "./container";

const faqs = [
    [
        {
            question: "Are printing integrations offered?",
            answer: "Yes, you'll be able to download our printing software to connect via the dashboard.",
        },
        {
            question: "Are barcode scanners supported?",
            answer: "We've designed our systems with scanners in mind, to make the process smoother when receiving or sending out shipments.",
        },
        {
            question:
                "Does the dashboard automatically identify tracking number carriers?",
            answer: "Yes, currently we support USPS, UPS, Fedex, and more.",
        },
    ],
    [
        {
            question:
                "Can custom permissions be given to administrator accounts?",
            answer: "When adding an administrator account to your team, you'll be able to select their specific permissions.",
        },
        {
            question:
                "What do we do if our workflow is different than the system's?",
            answer: "We are able to create custom features from scratch to fit your specific needs and branding.",
        },
        {
            question: "Can custom prices for different clients be set?",
            answer: "The dashboard allows for different unit prices for each type of shipment, and each client. Pricing is extremely customizable.",
        },
    ],
    [
        {
            question: "Can we export our data from the dashboard?",
            answer: "Yes, every page allows you to export your own data, and your client's data",
        },
        {
            question: "Can we add our own branding to the software?",
            answer: "Yes your logo and preferred color schemes will be added upon signing up.",
        },
    ],
];

export function Faqs() {
    return (
        <section
            id="faq"
            aria-labelledby="faq-title"
            className="relative overflow-hidden bg-[#DDE1E5] py-20 sm:py-32"
        >
            <Container className="relative">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2
                        id="faq-title"
                        className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
                    >
                        Frequently asked questions
                    </h2>
                    <p className="mt-4 text-lg tracking-tight text-slate-700">
                        If you can't find what you're looking for, fill out the
                        form{" "}
                        <a className="text-[#C33764]" href="/register">
                            here{" "}
                        </a>
                        and we will be in contact.
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
                >
                    {faqs.map((column, columnIndex) => (
                        <li key={columnIndex}>
                            <ul role="list" className="flex flex-col gap-y-8">
                                {column.map((faq, faqIndex) => (
                                    <li key={faqIndex}>
                                        <h3 className="font-display text-lg/7 text-slate-900">
                                            {faq.question}
                                        </h3>
                                        <p className="mt-4 text-sm text-slate-700">
                                            {faq.answer}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
