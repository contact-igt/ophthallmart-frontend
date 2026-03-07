import React from 'react';
import { Camera, CheckCircle, ExternalLink, Play, Monitor, Zap } from 'lucide-react';
import Button from '../shared/Button';

const ImagingSystemsPage = () => {
    const benefits = [
        "Improves patient understanding and acceptance",
        "Enhances clinical documentation standards",
        "Supports teaching & academic presentations",
        "Builds trust through visual counselling",
        "Strengthens your digital practice presence"
    ];

    return (
        <div className="animate-in fade-in pb-24">
            {/* Hero Section */}
            <div className="bg-[#0B2C4D] pt-16 md:pt-24 pb-20 md:pb-32 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-[#EA580C] opacity-10 rounded-full blur-2xl md:blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-blue-400 opacity-5 rounded-full blur-xl md:blur-2xl transform -translate-x-1/4 translate-y-1/4"></div>

                <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
                    <div className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6">
                        Ophthall Imaging Solutions
                    </div>
                    <h1 className="text-3xl md:text-6xl font-extrabold mb-6 md:mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                        Transform Your Slit Lamp & Microscope <br className="hidden md:block" />
                        into a Powerful Digital Documentation System
                    </h1>
                    <p className="text-base md:text-xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
                        Modern ophthalmology demands precision, clarity, and seamless documentation. 
                        Our high-definition systems are designed specifically for eye hospitals and clinics.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-4 -mt-8 md:-mt-16 relative z-20">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Left Side: Text */}
                        <div className="p-6 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-slate-100">
                            <h2 className="text-xl md:text-2xl font-bold text-[#0B2C4D] mb-4 md:mb-6">Why Choose Our Imaging Systems?</h2>
                            <div className="prose text-sm md:text-base text-slate-600 leading-relaxed md:space-y-4 space-y-3">
                                <p>
                                    Ophthall Imaging Solutions offers high-definition imaging and video recording systems designed specifically for eye hospitals and clinics — helping you enhance patient counselling, improve case documentation, and strengthen academic presentations.
                                </p>
                                <p>
                                    Whether you want to capture anterior segment images or record full surgical procedures, our systems integrate effortlessly with your existing equipment.
                                </p>
                            </div>

                            <div className="mt-8 md:mt-10 space-y-3 md:space-y-4">
                                <h3 className="font-bold text-[#0B2C4D] uppercase text-xs tracking-widest text-slate-400 mb-3 md:mb-4">How It Helps Your Practice</h3>
                                {benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <div className="mt-1 bg-orange-100 p-1 rounded-full flex-shrink-0">
                                            <CheckCircle size={14} className="text-[#EA580C]" />
                                        </div>
                                        <span className="text-sm md:text-base text-slate-700 font-medium">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: Visuals & CTA */}
                        <div className="bg-slate-50 p-6 md:p-12 lg:p-16 flex flex-col justify-center">
                            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-12">
                                <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                                    <Monitor className="text-[#EA580C] mb-2 md:mb-3 md:w-8 md:h-8" size={24} />
                                    <span className="text-[9px] md:text-[10px] font-extrabold uppercase text-slate-400">HD Output</span>
                                </div>
                                <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                                    <Play className="text-blue-500 mb-2 md:mb-3 md:w-8 md:h-8" size={24} />
                                    <span className="text-[9px] md:text-[10px] font-extrabold uppercase text-slate-400">Video Recording</span>
                                </div>
                                <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                                    <Zap className="text-yellow-500 mb-2 md:mb-3 md:w-8 md:h-8" size={24} />
                                    <span className="text-[9px] md:text-[10px] font-extrabold uppercase text-slate-400">Easy Integration</span>
                                </div>
                                <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                                    <Camera className="text-purple-500 mb-2 md:mb-3 md:w-8 md:h-8" size={24} />
                                    <span className="text-[9px] md:text-[10px] font-extrabold uppercase text-slate-400">Still Photos</span>
                                </div>
                            </div>

                            <div className="text-center space-y-4 md:space-y-6">
                                <h3 className="text-lg md:text-xl font-bold text-[#0B2C4D]">Ready to upgrade your practice?</h3>
                                <p className="text-slate-500 text-xs md:text-sm">
                                    Learn more about our advanced ophthalmic imaging solutions on our dedicated portal.
                                </p>
                                <a 
                                    href="https://imagingsystems.ophthallmart.com/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 w-full bg-[#EA580C] hover:bg-[#c2410c] text-white py-3 md:py-4 px-6 md:px-8 rounded-xl font-bold text-sm md:text-lg shadow-xl shadow-orange-100 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    Explore Imaging Systems
                                    <ExternalLink size={18} className="md:w-5 md:h-5" />
                                </a>
                                <p className="text-[10px] md:text-[11px] text-slate-400 italic">
                                    You will be redirected to: imagingsystems.ophthallmart.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImagingSystemsPage;
