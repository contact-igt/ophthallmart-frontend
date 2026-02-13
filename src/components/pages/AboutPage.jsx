import React from 'react';

const AboutPage = () => (
    <div className="animate-in fade-in py-16">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-[#0B2C4D] mb-4">About Ophthall Mart</h1>
                <div className="w-20 h-1 bg-[#EA580C] mx-auto"></div>
            </div>
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                    <img
                        src="https://placehold.co/600x400/f1f5f9/0B2C4D?text=Our+Office"
                        alt="Office"
                        className="rounded-xl shadow-lg w-full"
                    />
                </div>
                <div className="flex-1 space-y-6 text-slate-600 leading-relaxed">
                    <h3 className="text-2xl font-bold text-[#0B2C4D]">
                        Empowering Vision Care Since 2010
                    </h3>
                    <p>
                        Ophthall Mart is India's premier B2B marketplace exclusively dedicated to ophthalmic equipment and supplies. We bridge the gap between world-class medical technology manufacturers and eye care professionals.
                    </p>
                    <p>
                        Our mission is to provide affordable, high-quality diagnostic and surgical solutions to clinics and hospitals across the globe. With a team of biomedical engineers and industry experts, we ensure that every piece of equipment we sell meets rigorous quality standards.
                    </p>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="bg-slate-50 p-4 rounded border-l-4 border-[#EA580C]">
                            <span className="block text-2xl font-bold text-[#0B2C4D]">2000+</span>
                            <span className="text-xs uppercase tracking-wide">Happy Clients</span>
                        </div>
                        <div className="bg-slate-50 p-4 rounded border-l-4 border-[#EA580C]">
                            <span className="block text-2xl font-bold text-[#0B2C4D]">15+</span>
                            <span className="text-xs uppercase tracking-wide">Countries Served</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default AboutPage;
