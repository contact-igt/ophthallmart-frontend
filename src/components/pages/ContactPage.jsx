import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Button from '../shared/Button';
import { CONTACT_INFO } from '../../data/constants';

const ContactPage = () => (
    <div className="animate-in fade-in py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                <div className="bg-[#0B2C4D] text-white p-10 md:w-2/5 flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                        <p className="text-blue-200 text-sm mb-8">
                            Fill up the form and our Team will get back to you within 24 hours.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-[#EA580C]" /> {CONTACT_INFO.phone}
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-[#EA580C]" /> {CONTACT_INFO.email}
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin size={18} className="text-[#EA580C] mt-1" /> {CONTACT_INFO.address}
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-8">
                        <Facebook size={20} className="hover:text-[#EA580C] cursor-pointer" />
                        <Twitter size={20} className="hover:text-[#EA580C] cursor-pointer" />
                        <Instagram size={20} className="hover:text-[#EA580C] cursor-pointer" />
                        <Linkedin size={20} className="hover:text-[#EA580C] cursor-pointer" />
                    </div>
                </div>
                <div className="p-10 md:w-3/5">
                    <h2 className="text-2xl font-bold text-[#0B2C4D] mb-6">Send us a Message</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase">First Name</label>
                                <input
                                    type="text"
                                    className="w-full border-b border-slate-300 py-2 outline-none focus:border-[#EA580C]"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase">Last Name</label>
                                <input
                                    type="text"
                                    className="w-full border-b border-slate-300 py-2 outline-none focus:border-[#EA580C]"
                                />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 uppercase">Email</label>
                            <input
                                type="email"
                                className="w-full border-b border-slate-300 py-2 outline-none focus:border-[#EA580C]"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 uppercase">Message</label>
                            <textarea
                                className="w-full border-b border-slate-300 py-2 outline-none focus:border-[#EA580C] h-24"
                            ></textarea>
                        </div>
                        <div className="pt-4">
                            <Button variant="secondary" className="w-full">Send Message</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

export default ContactPage;
