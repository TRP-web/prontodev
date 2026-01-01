const Page: React.FC = () => {
    return (
        <section className="w-full py-16 ">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                    FAQ — Frequently Asked Questions
                </h2>

                <div className="space-y-8">

                    {/* Question 1 */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900">1. What does Pronto Dev do?</h3>
                        <p className="mt-2 text-gray-800">
                            Pronto Dev builds powerful, scalable, and intuitive web solutions—from small business websites
                            to internal systems and automation tools. We create software that helps companies work smarter,
                            move faster, and grow confidently.
                        </p>
                    </div>

                    {/* Question 2 */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900">2. What types of businesses do you work with?</h3>
                        <p className="mt-2 text-gray-800">
                            We work with small businesses, startups, and mid-sized companies that want to modernize systems,
                            optimize workflows, or build a custom digital product.
                        </p>
                    </div>

                    {/* Question 3 */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900">3. What solutions do you offer?</h3>
                        <p className="mt-2 text-gray-800">
                            We deliver tailored software solutions for each client's needs, including:
                        </p>
                        <ul className="list-disc list-inside mt-2 text-gray-800 space-y-1">
                            <li>Small business websites with flexible CMS</li>
                            <li>Workflow optimization & system modernization</li>
                            <li>Internal management systems (CRM, ERP, HR platforms)</li>
                            <li>Custom dashboards & automation tools</li>
                            <li>Client portals & service platforms</li>
                        </ul>
                    </div>

                    {/* Question 4 */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900">4. Do you provide technical support after launch?</h3>
                        <p className="mt-2 text-gray-800">
                            Yes. We offer ongoing post-launch support: updates, feature improvements,
                            maintenance, performance monitoring, and long-term scalability planning.
                        </p>
                    </div>

                    {/* Question 5 */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900">5. Can I expand or modify the product after it’s launched?</h3>
                        <p className="mt-2 text-gray-800">
                            Absolutely. All our systems are built with scalability in mind, allowing new features,
                            integrations, and upgrades as your business grows.
                        </p>
                    </div>

                    {/* Question 6 */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900">6. What technologies do you use?</h3>
                        <p className="mt-2 text-gray-800">
                            We use modern, reliable technologies such as React, Next.js, Node.js, Laravel, and PostgreSQL.
                            The tech stack is chosen based on performance, scalability, and your business needs.
                        </p>
                    </div>

                    {/* Question 7 */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900">7. What does the development process look like?</h3>
                        <ol className="list-decimal list-inside mt-2 text-gray-800 space-y-1">
                            <li>Discovery & consultation</li>
                            <li>Planning & architecture</li>
                            <li>UI/UX design</li>
                            <li>Development & testing</li>
                            <li>Launch & ongoing support</li>
                        </ol>
                    </div>

                    {/* Question 8 */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900">8. How much does a project cost?</h3>
                        <p className="mt-2 text-gray-800">
                            Pricing depends on the scope, features, integrations, and deadlines.
                            We can provide an estimated quote after a short consultation or project brief.
                        </p>
                    </div>

                    {/* Question 9 */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900">9. How do we get started?</h3>
                        <p className="mt-2 text-gray-800">
                            Contact us and tell us about your project. We'll propose the best solution,
                            outline the plan, and prepare an initial estimate.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page