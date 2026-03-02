import { Globe, ShieldCheck, Clock, HeartHandshake } from 'lucide-react';

const TrustIndicators = () => (
    <section className="bg-[#0B2C4D] py-16 text-white border-t border-blue-900">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
            <div className="flex items-center gap-6 justify-center md:justify-start">
                {/* <div className="w-12 h-12 rounded-full bg-[#EA580C] flex items-center justify-center text-white flex-shrink-0">
                </div> */}
                <HeartHandshake size={48} className="text-[#EA580C]" />

                <div>
                    <h4 className="font-bold text-lg">Trusted By</h4>
                    <p className="text-sm text-slate-300">6000+ Ophthalmologist</p>
                </div>
            </div>
            <div className="flex items-center gap-6 justify-center md:justify-start">
                <Globe size={48} className="text-[#EA580C]" />
                <div>
                    <h4 className="font-bold text-lg">Worldwide Shipping</h4>
                    <p className="text-sm text-slate-300">Safe delivery to over 15+ countries.</p>
                </div>
            </div>
            <div className="flex items-center gap-6 justify-center md:justify-start">
                <ShieldCheck size={48} className="text-[#EA580C]" />
                <div>
                    <h4 className="font-bold text-lg">Secure Payments</h4>
                    <p className="text-sm text-slate-300">100% secure transaction processing.</p>
                </div>
            </div>
            <div className="flex items-center gap-6 justify-center md:justify-start">
                <Clock size={48} className="text-[#EA580C]" />
                <div>
                    <h4 className="font-bold text-lg">24/7 Support</h4>
                    <p className="text-sm text-slate-300">Dedicated biomedical engineering team.</p>
                </div>
            </div>
        </div>
    </section>
);

export default TrustIndicators;
