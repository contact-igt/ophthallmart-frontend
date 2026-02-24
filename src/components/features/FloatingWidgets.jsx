import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingWidgets = () => {
    const [showChatbot, setShowChatbot] = useState(true);

    return (
        <div className="fixed bottom-6 right-4 md:right-6 flex flex-col gap-4 z-40">
            {showChatbot && (
                <div className="bg-white p-4 rounded shadow-2xl border border-slate-100 w-72 mb-2 animate-in slide-in-from-bottom-10">
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
            <button className="bg-[#25D366] hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center">
                <MessageCircle size={28} />
            </button>
        </div>
    );
};

export default FloatingWidgets;
