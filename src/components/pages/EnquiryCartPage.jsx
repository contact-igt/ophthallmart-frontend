import React from 'react';
import { ShoppingCart, Clock, Trash2 } from 'lucide-react';
import Button from '../shared/Button';
import { TextInput, TextArea, Select } from '../shared/Input';

const EnquiryCartPage = ({ cart, onRemove, onNav }) => {
    const initialProductNames = cart.map(item => item.name).join(', ');

    return (
        <div className="max-w-7xl mx-auto px-4 py-16 animate-in fade-in">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-[#0B2C4D] mb-4">Enquiry Cart</h1>
                <div className="w-16 h-1 bg-[#EA580C] mx-auto"></div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/2">
                    <h3 className="text-xl font-bold text-[#0B2C4D] mb-6 flex items-center gap-2">
                        <ShoppingCart size={20} /> Selected Products ({cart.length})
                    </h3>

                    {cart.length === 0 ? (
                        <div className="bg-slate-50 rounded-xl p-8 text-center border-2 border-dashed border-slate-200">
                            <p className="text-slate-500 mb-4">Your enquiry cart is currently empty.</p>
                            <Button onClick={() => onNav('shop')} variant="outline" className="mx-auto text-xs">
                                Browse Products
                            </Button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {cart.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded bg-slate-50" />
                                    <div className="flex-1">
                                        <h4 className="font-bold text-[#0B2C4D] text-sm">{item.name}</h4>
                                        <p className="text-xs text-[#EA580C] font-bold uppercase">{item.category}</p>
                                    </div>
                                    <button onClick={() => onRemove(item.id)} className="text-slate-400 hover:text-red-500 transition-colors">
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            ))}
                            <div className="bg-blue-50 text-[#0B2C4D] text-xs p-4 rounded-lg border border-blue-100 flex gap-2 items-start mt-4">
                                <Clock size={16} className="mt-0.5 flex-shrink-0" />
                                <p>Items in your enquiry cart are not reserved. Please submit the enquiry form to receive a quote.</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="lg:w-1/2">
                    <div className="bg-white rounded-xl shadow-lg border-t-4 border-[#EA580C] p-8">
                        <h3 className="text-xl font-bold text-[#0B2C4D] mb-6">Send Enquiry</h3>
                        <form className="space-y-5">
                            <div className="grid grid-cols-2 gap-4">
                                <Select
                                    label="Customer Type"
                                    options={['Doctor', 'Hospital / Clinic', 'Dealer / Distributor', 'Biomedical Engineer', 'Other']}
                                />
                                <TextInput label="Your Name" placeholder="Enter full name" />
                            </div>

                            <TextInput
                                label="Product Name(s)"
                                defaultValue={initialProductNames}
                                placeholder="Products you are interested in..."
                            />

                            <div className="grid grid-cols-2 gap-4">
                                <TextInput label="Contact Number" type="tel" placeholder="+91 98765..." />
                                <TextInput label="Location" placeholder="City, State" />
                            </div>

                            <TextInput label="Email Address" type="email" placeholder="name@example.com" />

                            <TextArea
                                label="Remark / Message"
                                className="h-24"
                                placeholder="Any specific requirements or questions?"
                            />

                            <Button variant="primary" className="w-full mt-4">Submit Enquiry</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnquiryCartPage;
