import React from 'react';
import { Search, ShoppingCart, Menu, X, ChevronDown, Phone } from 'lucide-react';
import { CATEGORIES } from '../../data/mockData';
import { CONTACT_INFO } from '../../data/constants';

const NAV_LINKS = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Products', page: 'products' },
    { label: 'Imaging Systems', page: 'imaging-systems' },
    { label: 'Pre-owned Tool', page: 'valuation' },
    { label: 'Buying Group', page: 'buying-group' },
    { label: 'Enquiry Cart', page: 'enquiry' },
    { label: 'Contact Us', page: 'contact' },
];

const Header = ({ currentPage, enquiryCart, handleNav, handleSearch, isMobileMenuOpen, setIsMobileMenuOpen, selectedCategory, setSelectedCategory }) => {
    const [searchTerm, setSearchTerm] = React.useState('');

    const onSearch = () => {
        if (searchTerm.trim()) {
            handleSearch(searchTerm, selectedCategory);
            if (isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') onSearch();
    };

    const isActive = (page) => currentPage === page;

    const [scrolled, setScrolled] = React.useState(false);
    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header 
            className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-xl' : ''}`} 
            style={{ fontFamily: "'Poppins', sans-serif" }}
        >

            {/* ── TOP ROW ── */}
            <div className="bg-[#0B2C4D]">
                <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-between gap-4">

                    {/* Logo & Slogan Area */}
                    <div className="flex items-center gap-4 lg:gap-8 flex-shrink-0">
                        {/* Logo Button */}
                        <div
                            className="cursor-pointer bg-white rounded-md p-1 md:p-1.5 transition-all duration-200 shadow-sm"
                            onClick={() => handleNav('home')}
                        >
                            <img
                                src="/assets/brandlogo.png"
                                alt="Ophthall Mart"
                                className="h-8 md:h-12 lg:h-14 w-auto"
                            />
                        </div>

                        {/* Welcome Slogan */}
                        <div className="hidden lg:flex flex-col justify-center">
                            <span className="text-white font-extrabold italic text-[15px] leading-tight flex items-center gap-2">
                                Welcome to Ophthall mart.
                            </span>
                            <span className="text-[#65B7D7] font-bold text-[14px] leading-tight">
                                Online Ophthalmic Super Market
                            </span>
                            <span className="text-slate-300 font-medium text-[12px] leading-tight mt-0.5">
                                Initiative Of Ophthall Practice Development
                            </span>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="flex flex-1 hidden md:flex items-stretch rounded overflow-hidden shadow-sm">
                        {/* Category Dropdown */}
                        <div className="relative hidden md:flex items-center bg-slate-100 border-r border-slate-300 transition-all duration-200 h-10" style={{ width: '120px' }}>
                            <div
                                className="w-full min-w-0 pl-3 pr-8 text-[#0B2C4D] text-[13px] font-bold truncate"
                                title={!selectedCategory || selectedCategory === 'All' ? 'All Categories' : selectedCategory}
                            >
                                {!selectedCategory || selectedCategory === 'All' ? 'All Categories' : selectedCategory}
                            </div>
                            <select
                                value={selectedCategory || 'All'}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setSelectedCategory(val);
                                    handleNav('shop', val);
                                }}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            >
                                <option value="All">All Categories</option>
                                {CATEGORIES.map(c => (
                                    <option key={c.id} value={c.name}>{c.name}</option>
                                ))}
                            </select>
                            <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                        </div>

                        {/* Text Input */}
                        <input
                            type="text"
                            placeholder="Search ophthalmic products, equipment..."
                            className="flex-1 h-10 px-4 text-sm text-slate-800 outline-none border-none bg-white placeholder:text-slate-400"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />

                        {/* Search Button */}
                        <button
                            onClick={onSearch}
                            className="bg-[#EA580C] hover:bg-[#c2410c] px-4 h-10 flex items-center justify-center transition-colors duration-200"
                        >
                            <Search size={20} className="text-white" />
                        </button>
                    </div>

                    {/* Right: Contact + Cart */}
                    <div className="flex items-center gap-4 flex-shrink-0">
                        {/* Contact (desktop only) */}
                        <div className="hidden xl:flex flex-col items-end leading-tight">
                            <span className="text-slate-400 text-[11px]">24/7 Customer Care</span>
                            <span className="text-white text-sm font-semibold">{CONTACT_INFO.tollFree}</span>
                        </div>

                        {/* Enquiry Cart */}
                        <button
                            className={`relative flex items-center gap-2 border-2 rounded px-2 py-1 transition-all duration-200 group ${isActive('enquiry') ? 'border-[#EA580C] bg-white/5' : 'border-transparent hover:border-white'}`}
                            onClick={() => handleNav('enquiry')}
                        >
                            <div className="relative">
                                <ShoppingCart size={28} className={isActive('enquiry') ? 'text-[#EA580C]' : 'text-white'} />
                                {enquiryCart.length > 0 && (
                                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#EA580C] text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-[#0B2C4D]">
                                        {enquiryCart.length}
                                    </span>
                                )}
                            </div>
                            <div className="hidden md:flex flex-col leading-tight">
                                <span className="text-slate-400 text-[11px]">Enquiry</span>
                                <span className={`text-sm font-semibold ${isActive('enquiry') ? 'text-[#EA580C]' : 'text-white'}`}>Cart</span>
                            </div>
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-2 -mr-2 text-white hover:text-[#EA580C] transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle Menu"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* ── BOTTOM NAV ROW ── */}
            <div className="bg-[#122d4b] border-t border-[#1e4068]">
                <div className="max-w-[1400px] mx-auto px-4">
                    <nav className="hidden lg:flex items-center justify-center gap-1 w-full">
                        {/* Nav Links */}
                        {NAV_LINKS.map(link => (
                            <button
                                key={link.page}
                                onClick={() => handleNav(link.page)}
                                className={`text-sm font-medium px-6 py-3 transition-all whitespace-nowrap border-b-2 hover:bg-white/5 ${
                                    isActive(link.page) 
                                    ? 'text-[#EA580C] border-[#EA580C] bg-white/10' 
                                    : 'text-white border-transparent hover:border-white/30'
                                }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>

            {/* ── MOBILE MENU ── */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-[#0B2C4D] border-t border-[#1e4068] absolute w-full z-50 shadow-2xl">
                    {/* Mobile Search */}
                    <div className="px-4 py-3 border-b border-[#1e4068]">
                        <div className="flex items-stretch rounded overflow-hidden">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="flex-1 px-4 py-2 text-sm text-slate-800 outline-none bg-white"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                            <button onClick={onSearch} className="bg-[#EA580C] px-4 flex items-center">
                                <Search size={18} className="text-white" />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Nav */}
                    <nav className="flex flex-col">
                        {NAV_LINKS.map(link => (
                            <button
                                key={link.page}
                                onClick={() => handleNav(link.page)}
                                className={`text-left px-5 py-3 text-sm font-medium border-b border-[#1e4068] transition-colors ${
                                    isActive(link.page)
                                    ? 'bg-[#EA580C] text-white'
                                    : 'text-white hover:bg-white/5'
                                }`}
                            >
                                {link.label}
                            </button>
                        ))}
                        <div className="border-t border-[#1e4068] mt-1">
                            {CATEGORIES.map(c => (
                                <button
                                    key={c.id}
                                    onClick={() => handleNav('shop', c.name)}
                                    className="w-full text-left px-5 py-2.5 text-slate-300 text-xs hover:bg-white/10 border-b border-[#1e4068] transition-colors"
                                >
                                    {c.name}
                                </button>
                            ))}
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
