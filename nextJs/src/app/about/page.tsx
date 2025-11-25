const Page: React.FC = () => {
    return (
        <>
            <main>
                <section className="max-w-4xl mx-auto px-4 py-12 space-y-12">

                    <div>
                        <h1 className="text-3xl font-bold mb-4">About Us</h1>
                        <p className="text-gray-700 leading-relaxed">
                            At <span className="font-semibold">Pronto Dev</span>, we build powerful, scalable, and intuitive web software that helps businesses work smarter, move faster, and grow with confidence. We believe technology should simplify operations—not complicate them. That’s why we focus on creating clean, reliable, and future-proof solutions tailored to each client’s unique needs.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
                        <p className="text-gray-700 leading-relaxed">
                            To empower companies with modern, high-performing web tools that streamline workflows, automate processes, and unlock new opportunities for growth.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
                        <p className="text-gray-700 mb-4">
                            We design, develop, and support custom business software, including:
                        </p>

                        <ul className="list-disc pl-6 space-y-2 text-gray-800">
                            <li>Small buissnes websites with flexible management (CMS)</li>
                            <li>Internal management systems (CRM, ERP, HR platforms)</li>
                            <li>Custom dashboards & automation tools</li>
                            <li>Client portals & service platforms</li>
                            <li>Work process optimization & system modernization</li>
                        </ul>

                        <p className="text-gray-700 mt-4 leading-relaxed">
                            Whether you're a startup launching your first product or an established company improving your digital infrastructure, we bring the technical expertise and business-oriented mindset to deliver real results.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">How We Work</h2>
                        <p className="text-gray-700 mb-4">We combine strategic thinking with strong engineering. Our process is transparent, collaborative, and centered around quality:</p>

                        <ol className="list-decimal pl-6 space-y-2 text-gray-800">
                            <li>Discovery & analysis - understanding your business goals and challenges</li>
                            <li>Product design - transforming ideas into clear UX and technical plans</li>
                            <li>Development - building secure, scalable, well-tested software</li>
                            <li>Iteration & improvement - refining based on real user feedback</li>
                            <li>Support & growth - keeping your product running smoothly long term</li>
                        </ol>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>

                        <ul className="space-y-3 text-gray-800">
                            <li><span className="font-semibold">Business-aware development:</span> We don’t just write code—we build solutions that support your strategy.</li>
                            <li><span className="font-semibold">Modern technologies:</span> Leveraging proven frameworks for performance and scalability.</li>
                            <li><span className="font-semibold">Flexible collaboration:</span> From end-to-end development to supporting your internal team.</li>
                            <li><span className="font-semibold">Long-term partnership:</span> We stay involved and invested in your success.</li>
                        </ul>
                    </div>

                </section>

            </main>
        </>
    )
}

export default Page