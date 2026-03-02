import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { CONTACT_INFO } from '../../data/constants';

const Footer = ({ handleNav }) => (
    <footer className="bg-[#0B2C4D] text-slate-400 border-t border-slate-800 pt-16 pb-8 text-sm">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-6">
                <div className="flex items-center cursor-pointer mb-6 bg-white p-2 rounded-lg inline-block shadow-sm" onClick={() => handleNav('home')}>
                    <img src="/assets/brandlogo.png" alt="Ophthall Mart" className="h-10 md:h-12 w-auto" />
                </div>

                <p className="leading-relaxed text-slate-400 flex-grow">
                    India's largest marketplace for ophthalmic equipment. Connecting doctors with premium diagnostic and surgical technology since 2010.
                </p>
            </div>
            <div>
                <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Quick Links</h4>
                <ul className="space-y-3">
                    <li>
                        <button onClick={() => handleNav('home')} className="hover:text-white transition-colors">
                            Home
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleNav('products')} className="hover:text-white transition-colors">
                            Products
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleNav('valuation')} className="hover:text-white transition-colors">
                            Sell Equipment
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleNav('about')} className="hover:text-white transition-colors">
                            About Us
                        </button>
                    </li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Quick Links</h4>
                <ul className="space-y-3">
                    <li>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#EA580C] transition-colors">
                            <Facebook size={18} />
                            <span>Facebook</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#EA580C] transition-colors">
                            <Twitter size={18} />
                            <span>Twitter</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#EA580C] transition-colors">
                            <Instagram size={18} />
                            <span>Instagram</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#EA580C] transition-colors">
                            <Linkedin size={18} />
                            <span>LinkedIn</span>
                        </a>

                    </li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Categories</h4>
                <ul className="space-y-3">
                    <li>
                        <button onClick={() => handleNav('products')} className="hover:text-white">
                            Diagnostic
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleNav('products')} className="hover:text-white">
                            Surgical
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleNav('products')} className="hover:text-white">
                            Consumables
                        </button>
                    </li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Contact Support</h4>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <MapPin className="text-[#EA580C] mt-1 flex-shrink-0" size={18} />
                        <span>{CONTACT_INFO.address}</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Phone className="text-[#EA580C] flex-shrink-0" size={18} />
                        <div className="flex flex-col">
                            <span className="text-xs text-slate-500 uppercase font-bold tracking-tight">24/7 Customer Care</span>
                            <span className="text-white font-semibold"><a href={`tel:${CONTACT_INFO.tollFree}`}>{CONTACT_INFO.tollFree} (Toll Free)</a></span>
                        </div>
                    </li>
                    <li className="flex items-center gap-3">
                        <Mail className="text-[#EA580C] flex-shrink-0" size={18} />
                        <div className="flex flex-col">
                            {/* <span>{CONTACT_INFO.email}</span> */}
                            <span>{CONTACT_INFO.generalEmail}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 border-t border-slate-800 pt-8 pb-40 md:pb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-slate-500">
            <p>&copy; 2024 Ophthall Mart. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 md:gap-6">
                <button
                    onClick={() => handleNav('privacy')}
                    className="hover:text-white transition-colors py-1 text-left"
                >
                    Privacy Policy
                </button>
                <button
                    onClick={() => handleNav('terms')}
                    className="hover:text-white transition-colors py-1 text-left"
                >
                    Terms and Conditions
                </button>
                <button
                    onClick={() => handleNav('returns')}
                    className="hover:text-white transition-colors py-1 text-left"
                >
                    Return Policy
                </button>
                <button
                    onClick={() => handleNav('shipping')}
                    className="hover:text-white transition-colors py-1 text-left"
                >
                    Shipping & Delivery
                </button>
            </div>
        </div>
    </footer>
);

export default Footer;
