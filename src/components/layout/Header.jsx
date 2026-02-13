import React from 'react';
import {
    Search, ShoppingCart, Menu, X, Phone, Mail,
    User, ChevronDown
} from 'lucide-react';
import { CATEGORIES } from '../../data/mockData';

const Header = ({ enquiryCart, handleNav, isMobileMenuOpen, setIsMobileMenuOpen }) => (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between gap-8">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNav('home')}>
                    <div className="relative w-12 h-8">
                        <div className="absolute inset-0 border-t-4 border-[#0B2C4D] rounded-t-full transform -skew-x-12"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-1 bg-[#EA580C] rounded-full"></div>
                    </div>
                    <div className="leading-none">
                        <h1 className="text-2xl font-bold text-[#0B2C4D] tracking-tight">
                            OPHTHALL<span className="text-[#EA580C]">MART</span>
                        </h1>
                    </div>
                </div>

                <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-semibold text-[13px] text-[#0B2C4D] uppercase tracking-wide">
                    <button onClick={() => handleNav('home')} className="hover:text-[#EA580C] transition-colors">
                        Home
                    </button>
                    <div className="relative group">
                        <button className="flex items-center gap-1 hover:text-[#EA580C] transition-colors py-4">
                            Shop <ChevronDown size={14} />
                        </button>
                        <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-lg border-t-2 border-[#EA580C] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                            <div className="flex flex-col p-2">
                                {CATEGORIES.map(c => (
                                    <button
                                        key={c.id}
                                        onClick={() => handleNav('shop')}
                                        className="text-left px-4 py-3 hover:bg-slate-50 hover:text-[#EA580C] text-slate-600 font-medium text-xs border-b border-slate-50 last:border-0"
                                    >
                                        {c.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <button onClick={() => handleNav('shop')} className="hover:text-[#EA580C] transition-colors">
                        Products
                    </button>
                    <button onClick={() => handleNav('enquiry')} className="hover:text-[#EA580C] transition-colors">
                        Enquiry Cart
                    </button>
                    <button onClick={() => handleNav('valuation')} className="hover:text-[#EA580C] transition-colors">
                        Valuation
                    </button>
                    <button onClick={() => handleNav('contact')} className="hover:text-[#EA580C] transition-colors">
                        Contact
                    </button>
                </nav>

                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center bg-slate-50 border border-slate-200 rounded-full px-4 py-2 mr-2 w-48 lg:w-64 focus-within:border-[#EA580C] focus-within:ring-1 focus-within:ring-[#EA580C] transition-all">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="bg-transparent border-none outline-none text-sm w-full placeholder:text-slate-400 text-slate-700"
                        />
                        <Search size={16} className="text-slate-400 cursor-pointer hover:text-[#EA580C]" />
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="p-2 hover:bg-slate-50 rounded-full text-[#0B2C4D]" onClick={() => handleNav('account')}>
                            <User size={22} />
                        </button>
                        <button className="relative p-2 hover:bg-slate-50 rounded-full transition-colors" onClick={() => handleNav('enquiry')}>
                            <ShoppingCart size={22} className="text-[#0B2C4D]" />
                            {enquiryCart.length > 0 && (
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#EA580C] text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                                    {enquiryCart.length}
                                </span>
                            )}
                        </button>
                        <button className="lg:hidden p-2 text-[#0B2C4D]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        {isMobileMenuOpen && (
            <div className="lg:hidden bg-white border-t border-slate-100 p-4 shadow-xl absolute w-full z-50">
                <nav className="flex flex-col gap-4 text-base font-medium text-[#0B2C4D]">
                    <button onClick={() => handleNav('home')} className="text-left px-4 py-2 hover:bg-slate-50 rounded">
                        Home
                    </button>
                    <button onClick={() => handleNav('shop')} className="text-left px-4 py-2 hover:bg-slate-50 rounded">
                        Shop
                    </button>
                    <button onClick={() => handleNav('enquiry')} className="text-left px-4 py-2 hover:bg-slate-50 rounded text-[#EA580C]">
                        Enquiry Cart
                    </button>
                    <button onClick={() => handleNav('valuation')} className="text-left px-4 py-2 hover:bg-slate-50 rounded">
                        Valuation Tool
                    </button>
                    <button onClick={() => handleNav('contact')} className="text-left px-4 py-2 hover:bg-slate-50 rounded">
                        Contact Us
                    </button>
                </nav>
            </div>
        )}
    </header>
);

export default Header;
