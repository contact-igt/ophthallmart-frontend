import React from 'react';
import { CheckCircle, ArrowRight, ShoppingBag, Phone, Home, Mail, FileText } from 'lucide-react';
import Button from '../shared/Button';

const ThankYouPage = ({ type = 'enquiry', handleNav }) => {
    const getContent = () => {
        switch (type) {
            case 'valuation':
                return {
                    title: 'Valuation Request Received!',
                    subtitle: 'Our expert team is now analyzing your equipment details.',
                    description: 'We will review your submission and provide a professional market valuation within 24-48 hours. You will receive a detailed report via email/WhatsApp.',
                    icon: <FileText size={40} className="text-blue-600" />,
                    bgColor: 'bg-blue-100',
                    nextSteps: [
                        'Expert analysis of condition and market demand',
                        'Verification of brand and model specifications',
                        'Tailored valuation report sent to your contact info'
                    ]
                };
            case 'contact':
                return {
                    title: 'Message Sent Successfully!',
                    subtitle: 'Thank you for reaching out to Ophthall Mart.',
                    description: 'Your inquiry has been logged in our system. A support representative will review your message and get back to you shortly.',
                    icon: <Mail size={40} className="text-[#EA580C]" />,
                    bgColor: 'bg-orange-100',
                    nextSteps: [
                        'Review by our support department',
                        'Technical or commercial clarification if needed',
                        'Response via email or phone call'
                    ]
                };
            case 'enquiry':
            default:
                return {
                    title: 'Enquiry Submitted!',
                    subtitle: 'Your clinical requirement is now with our sales team.',
                    description: 'We have received your enquiry for the selected products. Our specialists are preparing the formal quotes and technical data sheets for you.',
                    icon: <ShoppingBag size={40} className="text-green-600" />,
                    bgColor: 'bg-green-100',
                    nextSteps: [
                        'Preparation of formal commercial quotes',
                        'Checking latest stock and shipping timelines',
                        'Direct contact from our regional sales manager'
                    ]
                };
        }
    };

    const content = getContent();

    return (
        <div className="animate-in fade-in py-12 md:py-20 bg-slate-50 min-h-[60vh] flex items-center justify-center">
            <div className="max-w-3xl w-full mx-auto px-4">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
                    <div className="h-2 bg-gradient-to-r from-[#0B2C4D] via-[#EA580C] to-[#0B2C4D]"></div>

                    <div className="p-8 md:p-12 text-center">
                        <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${content.bgColor} mb-8 border-8 border-white shadow-lg animate-bounce-subtle`}>
                            {content.icon}
                        </div>

                        <h1 className="text-4xl font-extrabold text-[#0B2C4D] mb-4 tracking-tight">
                            {content.title}
                        </h1>
                        <p className="text-[#EA580C] font-bold text-lg mb-6 tracking-wide uppercase text-sm">
                            {content.subtitle}
                        </p>

                        <div className="max-w-xl mx-auto mb-10">
                            <p className="text-slate-600 text-lg leading-relaxed">
                                {content.description}
                            </p>
                        </div>

                        {/* Next Steps Card */}
                        <div className="bg-slate-50 rounded-2xl p-6 md:p-8 mb-10 border border-slate-100 text-left max-w-2xl mx-auto">
                            <h3 className="text-[#0B2C4D] font-bold mb-5 flex items-center gap-2">
                                <ArrowRight size={20} className="text-[#EA580C]" />
                                What happens next?
                            </h3>
                            <ul className="space-y-4">
                                {content.nextSteps.map((step, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-slate-600">
                                        <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-sm md:text-base">{step}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button
                                onClick={() => handleNav('home')}
                                className="w-full sm:w-auto px-8 py-3.5 bg-[#0B2C4D] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#081d33] transition-all shadow-lg active:scale-95"
                            >
                                <Home size={20} />
                                Back to Home
                            </button>
                            <button
                                onClick={() => handleNav('products')}
                                className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#0B2C4D] border-2 border-slate-200 rounded-xl font-bold flex items-center justify-center gap-2 hover:border-[#EA580C] hover:text-[#EA580C] transition-all active:scale-95"
                            >
                                <ShoppingBag size={20} />
                                Continue Shopping
                            </button>
                        </div>

                        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col items-center gap-2">
                            <p className="text-slate-400 text-sm italic">Need immediate help?</p>
                            <a href="tel:+919840324333" className="text-[#0B2C4D] font-bold flex items-center gap-2 hover:text-[#EA580C] transition-colors">
                                <Phone size={18} />
                                +91 98403 24333
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes bounce-subtle {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }
                .animate-bounce-subtle {
                    animation: bounce-subtle 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default ThankYouPage;
