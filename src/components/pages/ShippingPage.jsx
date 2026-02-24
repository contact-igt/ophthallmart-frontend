import React, { useEffect } from 'react';
import { Truck, MapPin, Clock, CreditCard, AlertCircle, Search, Mail, Phone, MessageSquare } from 'lucide-react';

const ShippingPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="max-w-4xl mx-auto px-4 py-16 md:py-24 animate-in fade-in duration-700 min-h-[60vh]">
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#0B2C4D] mb-10 border-b-4 border-[#EA580C] pb-6">
                Shipping & Delivery
            </h1>

            <div className="prose prose-slate max-w-none space-y-10 text-slate-700 leading-relaxed">
                <section>
                    <p className="text-lg">
                        We aim to deliver your orders as quickly and smoothly as possible across India. Here's everything you need to know:
                    </p>
                </section>

                <section className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-3 mb-4">
                        <Truck className="text-[#EA580C]" size={24} />
                        <h2 className="text-xl md:text-2xl font-bold text-[#0B2C4D] m-0">Shipping Options (Within India)</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                            <h3 className="text-lg font-bold text-[#0B2C4D]">Standard Delivery</h3>
                            <p><strong>Delivery Time:</strong> 3–7 business days</p>
                            <p><strong>Cost:</strong> Free for orders above ₹499, ₹49 for orders below ₹499</p>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <MapPin className="text-[#EA580C]" size={24} />
                        <h2 className="text-xl md:text-2xl font-bold text-[#0B2C4D] m-0">Delivery Areas</h2>
                    </div>
                    <p>
                        We deliver across most PIN codes in India through our trusted courier partners like **Delhivery, Bluedart, Ekart, and India Post**.
                    </p>
                    <p className="bg-blue-50 border-l-4 border-[#0B2C4D] p-4 text-sm">
                        To check if we deliver to your area, enter your PIN code on the product page or during checkout.
                    </p>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <Clock className="text-[#EA580C]" size={24} />
                        <h2 className="text-xl md:text-2xl font-bold text-[#0B2C4D] m-0">Order Processing Time</h2>
                    </div>
                    <p>
                        Orders are processed within **24–48 hours** (excluding Sundays and public holidays).
                        You will receive a confirmation and tracking link once your order is dispatched.
                    </p>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <CreditCard className="text-[#EA580C]" size={24} />
                        <h2 className="text-xl md:text-2xl font-bold text-[#0B2C4D] m-0">Cash on Delivery (COD)</h2>
                    </div>
                    <p className="flex items-center gap-2">
                        <span className="line-through text-slate-400">COD Available</span>
                        <span className="font-bold text-red-600">Not Available</span>
                    </p>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <AlertCircle className="text-[#EA580C]" size={24} />
                        <h2 className="text-xl md:text-2xl font-bold text-[#0B2C4D] m-0">Failed Delivery / Returns</h2>
                    </div>
                    <p>If a delivery attempt fails due to an incorrect address or unavailability:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>A reattempt will be made automatically.</li>
                        <li>After 3 failed attempts, the order will be returned to us.</li>
                        <li>For reshipment, additional charges may apply.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[#0B2C4D] mb-4">Delivery Delays</h2>
                    <p>We strive to meet all delivery timelines, but delays can occur due to:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Weather disruptions</li>
                        <li>Festival season rush</li>
                        <li>Logistics issues in remote areas</li>
                    </ul>
                    <p className="mt-4 italic">We’ll keep you informed if any delays are expected.</p>
                </section>

                <section className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-3 mb-4">
                        <Search className="text-[#EA580C]" size={24} />
                        <h2 className="text-xl md:text-2xl font-bold text-[#0B2C4D] m-0">Track Your Order</h2>
                    </div>
                    <p>Track your order at any time via:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Your Account Dashboard under "My Orders"</li>
                        <li>SMS/Email tracking link sent after dispatch</li>
                    </ul>
                </section>

                <section className="bg-[#0B2C4D] text-white p-8 rounded-2xl shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
                        <MessageSquare className="text-orange-400" size={24} />
                        Need Help?
                    </h2>
                    <p className="mb-6 opacity-90">We're here to assist you with any delivery issues.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[#EA580C] transition-colors">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Email</p>
                                <a href="mailto:info@ophthall.in" className="text-lg hover:text-orange-400 transition-colors">info@ophthall.in</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[#EA580C] transition-colors">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Customer Care</p>
                                <a href="tel:+918754517944" className="text-lg hover:text-orange-400 transition-colors">+91-8754517944</a>
                                <p className="text-[10px] text-slate-400">10 AM to 7 PM, Mon–Sat</p>
                            </div>
                        </div>
                    </div>
                    <p className="mt-8 text-center text-sm font-medium border-t border-white/10 pt-6">
                        Live Chat: Available on the website
                    </p>
                </section>
            </div>
        </div>
    );
};

export default ShippingPage;
