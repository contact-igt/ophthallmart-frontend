import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

import { CONTACT_INFO } from '../../data/constants';

const FloatingWidgets = () => {
    const [showChatbot, setShowChatbot] = useState(false);

    const whatsappLink = `https://wa.me/${CONTACT_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('I want to find out about your support and servicesI want to find out about your support and services')}`;

    return (
        <div className="fixed bottom-6 right-4 flex flex-col items-end gap-4 z-50 pointer-events-none">
            {showChatbot && (
                <div className="bg-white p-4 rounded shadow-2xl border border-slate-100 w-72 mb-2 animate-in slide-in-from-bottom-10 pointer-events-auto">
                    <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded bg-[#0B2C4D] flex items-center justify-center text-white font-bold text-xs">
                                OM
                            </div>
                            <div>
                                <p className="font-bold text-sm text-[#0B2C4D]">Hi Doctor</p>
                                <p className="text-[10px] text-slate-500">Support Agent</p>
                            </div>
                        </div>
                        <button onClick={() => setShowChatbot(false)} className="text-slate-400 hover:text-slate-600">
                            <X size={14} />
                        </button>
                    </div>
                    <p className="text-sm text-slate-600 bg-slate-50 p-3 rounded rounded-tl-none">
                        Welcome to Ophthall Mart! How can I help you today?
                    </p>
                </div>
            )}
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-end pointer-events-auto"
            >
                <img
                    src="/assets/Footer/whatsappicon.png"
                    alt="WhatsApp"
                    className="w-16 h-16 md:w-15 md:h-15 drop-shadow-2xl object-contain rounded-full"
                />
            </a>
        </div>
    );
};

export default FloatingWidgets;
