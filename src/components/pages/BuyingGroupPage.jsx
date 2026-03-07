import React from 'react';
import { Users, TrendingDown, Layers, ShieldCheck, ArrowRight, CheckCircle, Info, ExternalLink } from 'lucide-react';
import Button from '../shared/Button';

const BuyingGroupPage = () => {
    const benefits = [
        {
            icon: <TrendingDown className="text-[#EA580C]" size={24} />,
            title: "Massive Discounts",
            description: "Leverage collective volume to negotiate significantly lower prices on premium equipment and consumables."
        },
        {
            icon: <ShieldCheck className="text-blue-500" size={24} />,
            title: "Verified Vendors",
            description: "We partner with trusted manufacturers and suppliers to ensure quality, warranty, and reliable service."
        },
        {
            icon: <Layers className="text-purple-500" size={24} />,
            title: "Supply Chain Stability",
            description: "Ensure consistent availability of essential supplies even during market fluctuations or shortages."
        },
        {
            icon: <Users className="text-green-500" size={24} />,
            title: "Expert community",
            description: "Join a network of ophthalmologists sharing insights and best practices in procurement."
        }
    ];

    return (
        <div className="animate-in fade-in pb-24 bg-slate-50/50">
            {/* Hero Section */}
            <div className="bg-[#0B2C4D] pt-16 md:pt-24 pb-24 md:pb-40 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-[#EA580C] opacity-10 rounded-full blur-2xl md:blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-blue-400 opacity-5 rounded-full blur-xl md:blur-2xl transform -translate-x-1/4 translate-y-1/4"></div>

                <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
                    <div className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6">
                        First Organized Platform for Ophthalmologists
                    </div>
                    <h1 className="text-3xl md:text-6xl font-extrabold mb-6 md:mb-8 leading-tight">
                        Ophthall Buying Group: <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#EA580C] to-orange-300">Power in Numbers</span>
                    </h1>
                    <p className="text-base md:text-xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
                        Historically, individual eye hospitals couldn't leverage group buying like corporate chains. 
                        We're changing that. Join the movement that levels the playing field.
                    </p>
                </div>
            </div>

            {/* Core Concept Section */}
            <div className="max-w-7xl mx-auto px-4 -mt-12 md:-mt-24 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* Main Story Card */}
                    <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-6 md:p-12 border border-slate-100">
                        <div className="flex items-center gap-3 mb-6 md:mb-8">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                                <Info className="text-[#EA580C]" size={20} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#0B2C4D]">What is a Buying Group?</h2>
                        </div>
                        
                        <div className="prose prose-base md:prose-lg text-slate-600 max-w-none space-y-4 md:space-y-6">
                            <p className="text-lg md:text-xl text-[#0B2C4D] font-medium leading-relaxed">
                                Group purchasing is a simple concept: leverage collective size to gain access to huge discounts.
                            </p>
                            <p>
                                In the Indian Eye Care Market, most purchases are individual. Very rarely have there been organized 
                                group purchases, leaving individual practices unable to leverage their true market value.
                            </p>
                            <div className="bg-slate-50 border-l-4 border-[#EA580C] p-6 rounded-r-2xl italic">
                                "While corporate Eye Care Chains aggregate purchasing internally, individual Eye Hospitals 
                                lacked a platform—until now."
                            </div>
                            <p className="font-semibold text-[#0B2C4D]">
                                Ophthall Buying Group is the first organized platform for Ophthalmologists to combine 
                                and make their purchases with absolute strength.
                            </p>
                        </div>
                    </div>

                    {/* Quick Benefits Sidebar */}
                    <div className="flex flex-col gap-6">
                        <div className="bg-[#EA580C] rounded-3xl p-8 text-white shadow-xl shadow-orange-200/50">
                            <h3 className="text-2xl font-bold mb-6">Why Join Us?</h3>
                            <ul className="space-y-4">
                                {[
                                    "Save 15-30% on Consumables",
                                    "Direct Factory Relationships",
                                    "Exclusive Inventory Access",
                                    "Standardized Quality Controls"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 font-medium">
                                        <CheckCircle size={20} className="text-orange-200" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 pt-8 border-t border-white/20">
                                <p className="text-sm text-orange-100 mb-4 italic">"Leveling the playing field for individual practitioners across India."</p>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-3xl p-8 border border-slate-200 flex-grow">
                             <h4 className="font-bold text-[#0B2C4D] mb-4">Targeted Assets</h4>
                             <p className="text-slate-500 text-sm mb-6">We're currently aggregating demand for Phaco Consumables, IOLs, and Slit Lamp modules.</p>
                             <button className="text-[#EA580C] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                                View Current Opportunities <ArrowRight size={16} />
                             </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits Grid */}
            <div className="max-w-7xl mx-auto px-4 mt-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-[#0B2C4D] mb-4">Member Advantages</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">Discover how group buying transforms your procurement process into a strategic advantage.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-orange-100 hover:shadow-lg transition-all group">
                            <div className="mb-6 transform group-hover:scale-110 transition-transform">{benefit.icon}</div>
                            <h4 className="text-lg font-bold text-[#0B2C4D] mb-3">{benefit.title}</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Final CTA */}
            <div className="max-w-5xl mx-auto px-4 mt-20 md:mt-32">
                <div className="bg-[#0B2C4D] rounded-[2.5rem] p-8 md:p-12 text-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-4xl font-extrabold mb-4 md:mb-6 leading-tight">Start Leveraging Our Collective Strength</h2>
                        <p className="text-base md:text-lg text-slate-300 mb-8 md:mb-10 max-w-2xl mx-auto">
                            Join over 500+ clinics already benefiting from the Ophthall Buying Group. No upfront fees, just pure savings.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a 
                                href="https://www.ophthall.in/membership" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto bg-[#EA580C] hover:bg-[#d94e25] text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg shadow-xl shadow-orange-900/20 transition-all flex items-center justify-center gap-2"
                            >
                                Join Membership Now
                                <ExternalLink size={18} className="md:w-5 md:h-5" />
                            </a>
                        </div>
                        <p className="mt-6 text-xs md:text-sm text-slate-400">Secure registration via Ophthall Main Portal</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyingGroupPage;
