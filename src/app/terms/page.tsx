export default function TermsOfService() {
    return (
        <div className="min-h-screen pt-32 pb-20 bg-zinc-950 text-zinc-300">
            <div className="container px-6 max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
                <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

                <div className="space-y-8">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">1. Services</h2>
                        <p>Cortex Automotive provides standard and specialized automotive maintenance and repair services. All work is performed by certified technicians using approved equipment and parts.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">2. Estimates & Authorizations</h2>
                        <p>We provide written estimates for all repairs. You must authorize any work before it commences. Use of our website or booking system constitutes agreement to our diagnostic and storage fees where applicable.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">3. Warranty</h2>
                        <p>We stand behind our work with a 24-month / 24,000-mile warranty on qualifying parts and labor, subject to normal use conditions. This warranty covers defects in workmanship and materials supplied by Cortex.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">4. Payment</h2>
                        <p>Payment is due in full upon completion of services and prior to vehicle release. We accept major credit cards, debit, and certified funds. Vehicles left over 48 hours after completion notice may incur storage fees.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
