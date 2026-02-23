import React, { useState, useEffect } from 'react';
import { Phone, Mail } from 'lucide-react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './components/pages/HomePage';
import ShopPage from './components/pages/ShopPage';
import ProductPage from './components/pages/ProductPage';
import ProductDetailPage from './components/pages/ProductDetailPage';
import EnquiryCartPage from './components/pages/EnquiryCartPage';
import ValuationPage from './components/pages/ValuationPage';
import ContactPage from './components/pages/ContactPage';
import AboutPage from './components/pages/AboutPage';
import AccountPage from './components/pages/AccountPage';
import FloatingWidgets from './components/features/FloatingWidgets';
import { CONTACT_INFO } from './data/constants';

export default function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [enquiryCart, setEnquiryCart] = useState([]);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Load Poppins Font
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        return () => document.head.removeChild(link);
    }, []);

    // Actions
    const addToEnquiry = (product) => {
        if (!enquiryCart.find(item => item.id === product.id)) {
            setEnquiryCart([...enquiryCart, product]);
        }
    };

    const removeFromEnquiry = (id) => {
        setEnquiryCart(enquiryCart.filter(item => item.id !== id));
    };

    const handleProductView = (product) => {
        setSelectedProduct(product);
        setCurrentPage('product-detail');
        window.scrollTo(0, 0);
    };

    const handleNav = (page, category = null) => {
        setCurrentPage(page);
        if (category) {
            setSelectedCategory(category);
        }
        if (page !== 'products') {
            setSearchQuery(''); // Clear search when navigating away
        }
        setSelectedProduct(null);
        setIsMobileMenuOpen(false);
        window.scrollTo(0, 0);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        setCurrentPage('products');
        window.scrollTo(0, 0);
    };

    return (
        <div
            className="min-h-screen bg-white selection:bg-orange-100 selection:text-[#EA580C]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
        >
            {/* Top Bar */}
            <div className="bg-white text-slate-600 text-[13px] py-2 px-4 border-b border-slate-100 font-medium">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2">
                            <Phone size={14} className="text-[#0B2C4D]" /> {CONTACT_INFO.phone}
                        </span>
                        <span className="flex items-center gap-2">
                            <Mail size={14} className="text-[#0B2C4D]" /> {CONTACT_INFO.supportEmail}
                        </span>
                    </div>
                </div>
            </div>

            <Header
                enquiryCart={enquiryCart}
                handleNav={handleNav}
                handleSearch={handleSearch}
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
            />

            <main>
                {currentPage === 'home' && (
                    <HomePage
                        handleNav={handleNav}
                        handleProductView={handleProductView}
                        addToEnquiry={addToEnquiry}
                    />
                )}

                {currentPage === 'shop' && (
                    <ShopPage
                        handleNav={handleNav}
                        initialCategory={selectedCategory}
                    />
                )}

                {currentPage === 'products' && (
                    <ProductPage
                        handleNav={handleNav}
                        handleProductView={handleProductView}
                        addToEnquiry={addToEnquiry}
                        searchQuery={searchQuery}
                    />
                )}

                {currentPage === 'product-detail' && selectedProduct && (
                    <ProductDetailPage
                        product={selectedProduct}
                        onBack={() => handleNav('products')}
                        onAdd={addToEnquiry}
                    />
                )}

                {currentPage === 'valuation' && <ValuationPage />}

                {currentPage === 'enquiry' && (
                    <EnquiryCartPage
                        cart={enquiryCart}
                        onRemove={removeFromEnquiry}
                        onNav={handleNav}
                    />
                )}

                {currentPage === 'about' && <AboutPage />}

                {currentPage === 'contact' && <ContactPage />}

                {currentPage === 'account' && <AccountPage />}
            </main>

            <Footer handleNav={handleNav} />

            <FloatingWidgets />
        </div>
    );
}
