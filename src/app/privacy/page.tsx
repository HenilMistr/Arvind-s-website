export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen pt-32 pb-20 bg-zinc-950 text-zinc-300">
            <div className="container px-6 max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
                <p className="mb-4">Effective Date: {new Date().toLocaleDateString()}</p>

                <div className="space-y-8">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">1. Introduction</h2>
                        <p>Welcome to Cortex Automotive ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This policy explains how we collect, use, and safeguard your data when you visit our website or use our services.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">2. Information We Collect</h2>
                        <p>We gather information necessary to provide top-tier automotive care, including:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Personal Identification: Name, phone number, email address.</li>
                            <li>Vehicle Information: VIN, make, model, service history.</li>
                            <li>Payment Data: Securely processed via third-party providers; we do not store raw credit card numbers.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">3. How We Use Your Information</h2>
                        <p>Your data is used solely for:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Scheduling and performing vehicle services.</li>
                            <li>Communicating service updates, estimates, and invoices.</li>
                            <li>Internal record keeping and warranty tracking.</li>
                        </ul>
                        <p className="mt-2">We do not sell, trade, or rent your personal identification information to others.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
