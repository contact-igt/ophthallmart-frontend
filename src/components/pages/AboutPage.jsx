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
                        src="/assets/About/aboutbg.png"
                        alt="Office"
                        className="rounded-xl shadow-lg w-full h-full object-cover min-h-[400px]"
                    />
                </div>
                <div className="flex-1 space-y-6 text-slate-600 leading-relaxed">
                    <h3 className="text-2xl font-bold text-[#0B2C4D]">
                        About Ophthallmart
                    </h3>
                    <p>
                        Ophthallmart.com is an Initiative of Ophthall Practice Development, India’s Largest Practice Development Organization for Independent Ophthalmology Practices. We offer only the best brands so you can remain assured of the quality of every item we sell.
                    </p>
                    <p>
                        We aim to provide you an incredible shopping experience, a wide range of brands and excellent customer service at the click of a single button. Through Ophthall Buying Group, we would provide Opportunity for the buyers to get the best price for their purchases by leveraging the power of volumes. We will soon become India’s Largest Online Supermarket for Ophthalmology Products.
                    </p>
                    <p className="font-bold text-[#0B2C4D]">
                        Team Ophthallmart.com
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default AboutPage;
