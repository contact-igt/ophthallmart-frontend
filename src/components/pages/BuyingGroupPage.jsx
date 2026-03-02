import React from 'react';

const BuyingGroupPage = () => {
    return (
        <div className="bg-slate-50 min-h-screen py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Banner Section */}
                {/* <div className="mb-12 rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white">
                    <img
                        src="/assets/Buying Grp/bg1.png"
                        alt="Ophthall Buying Group"
                        className="w-full h-auto object-contain"
                    />
                </div> */}

                {/* Content Section */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 prose prose-lg prose-slate max-w-none">

                    <h2 className="text-2xl font-bold text-[#0B2C4D] mb-6 border-b border-slate-100 pb-4">
                        What is a Buying Group?
                    </h2>

                    <p className="text-lg leading-relaxed text-slate-700 mb-8">
                        Group purchasing or group buying is a simple concept that adheres to the mentality of <span className="font-semibold text-[#EA580C]">power in numbers</span>. In essence, groups of buyers come together and leverage their size to gain access to large discounts on products or services.
                    </p>

                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 mb-8">
                        <p className="text-lg leading-relaxed text-slate-700">
                            In the Indian Eye Care Market, most purchases are individual purchases and very rarely has there been small unorganized group purchases. Hence, individual practices have never been able to leverage the power of group buying.
                        </p>
                    </div>

                    <p className="text-lg leading-relaxed text-slate-700 mb-10">
                        While many corporate Eye Care Chains have been able to aggregate purchasing within their own groups, individual Eye Hospitals have not historically had a platform where they could organize themselves for group buying. <strong className="text-[#0B2C4D]">Ophthall Buying group will be the first Organized platform</strong> for Ophthalmologists to combine and make their purchases.
                    </p>

                    {/* CTA Button */}
                    <div className="flex justify-center md:justify-start">
                        <a
                            href="https://www.ophthall.in/membership"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#EA580C] hover:bg-[#c2410c] text-white px-8 py-4 rounded-md font-bold uppercase tracking-wider transition-colors shadow-sm text-center"
                        >
                            Join Our Group Now
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BuyingGroupPage;
