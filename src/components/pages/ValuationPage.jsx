import React from 'react';
import Button from '../shared/Button';
import { TextInput, TextArea } from '../shared/Input';

const ValuationPage = () => (
    <div className="animate-in fade-in">
        <div className="bg-[#0B2C4D] py-20 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#EA580C] opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="max-w-3xl mx-auto px-4 relative z-10">
                <h1 className="text-4xl font-bold mb-4">Equipment Valuation</h1>
                <p className="text-lg text-slate-300 font-light">
                    Get the best market price for your used ophthalmic equipment.
                </p>
            </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-10 mb-20">
            <div className="bg-white rounded shadow-xl p-8 md:p-12 border-t-4 border-[#EA580C]">
                <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <TextInput label="Full Name" placeholder="Dr. John Doe" />
                        <TextInput label="Phone Number" type="tel" placeholder="+91 98765 43210" />
                        <TextInput label="Email Address" type="email" placeholder="clinic@hospital.com" />
                        <TextInput label="Location (City)" placeholder="Chennai, India" />
                    </div>
                    <div className="space-y-4">
                        <label className="text-xs font-bold text-[#0B2C4D] uppercase tracking-wide">
                            Equipment Type
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {['Phaco Machine', 'Microscope', 'Slit Lamp', 'OCT', 'Perimeter', 'Autorefractometer', 'Other'].map((type) => (
                                <label
                                    key={type}
                                    className="flex items-center gap-3 p-3 border border-slate-200 rounded cursor-pointer hover:border-[#EA580C] hover:bg-orange-50 transition group"
                                >
                                    <input type="radio" name="eqType" className="accent-[#EA580C] w-4 h-4" />
                                    <span className="text-sm text-slate-700 font-medium group-hover:text-[#0B2C4D]">
                                        {type}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <TextArea
                        label="Equipment Condition & Details"
                        className="h-32"
                        placeholder="Please mention model year, working condition, and any defects..."
                    />
                    <div className="flex justify-end pt-4">
                        <Button variant="primary" className="w-full md:w-auto px-12 text-sm">
                            Submit for Valuation
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
);

export default ValuationPage;
