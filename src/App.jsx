import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './components/pages/HomePage';
import ShopPage from './components/pages/ShopPage'; // Deprecated in favor of ProductPage
import ProductPage from './components/pages/ProductPage';
import ProductDetailPage from './components/pages/ProductDetailPage';
import EnquiryCartPage from './components/pages/EnquiryCartPage';
import ValuationPage from './components/pages/ValuationPage';
import ContactPage from './components/pages/ContactPage';
import AboutPage from './components/pages/AboutPage';
import BuyingGroupPage from './components/pages/BuyingGroupPage';
import ImagingSystemsPage from './components/pages/ImagingSystemsPage';
import AccountPage from './components/pages/AccountPage';
import ThankYouPage from './components/pages/ThankYouPage';
import PrivacyPolicyPage from './components/pages/PrivacyPolicyPage';
import TermsPage from './components/pages/TermsPage';
import ReturnPolicyPage from './components/pages/ReturnPolicyPage';
import ShippingPage from './components/pages/ShippingPage';
import FloatingWidgets from './components/features/FloatingWidgets';

export default function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [enquiryCart, setEnquiryCart] = useState([]);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [submissionType, setSubmissionType] = useState('enquiry'); // 'enquiry' | 'contact' | 'valuation'

    // Load Poppins Font
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        // POPSTATE: Handle browser back/forward buttons
        const handlePopState = () => {
            const path = window.location.pathname.substring(1) || 'home';
            // Simple mapping of path to state
            if (path === 'thank-you') {
                setCurrentPage('thank-you');
            } else if (path === 'home' || path === '') {
                setCurrentPage('home');
            } else {
                setCurrentPage(path);
            }
        };

        // Handle initial path on load
        handlePopState();

        window.addEventListener('popstate', handlePopState);
        return () => {
            document.head.removeChild(link);
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    // Actions
    const addToEnquiry = (product) => {
        if (enquiryCart.some(item => item.id === product.id)) {
            setEnquiryCart(enquiryCart.filter(item => item.id !== product.id));
        } else {
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

        // Update URL path (manual routing)
        const path = page === 'home' ? '/' : `/${page}`;
        if (window.location.pathname !== path) {
            window.history.pushState(null, '', path);
        }
    };

    const handleSuccess = (type) => {
        setSubmissionType(type);
        setCurrentPage('thank-you');
        if (type === 'enquiry') setEnquiryCart([]); // Clear cart after successful enquiry
        window.scrollTo(0, 0);
        window.location.href = "/thank-you"
        // Update URL to /thank-you
        // window.history.pushState(null, '', '/thank-you');
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        setCurrentPage('products');
        window.scrollTo(0, 0);
    };

    return (
        <div
            className="min-h-screen bg-white flex flex-col selection:bg-orange-100 selection:text-[#EA580C] overflow-x-hidden"
            style={{ fontFamily: "'Poppins', sans-serif" }}
        >
            <Header
                currentPage={currentPage}
                enquiryCart={enquiryCart}
                handleNav={handleNav}
                handleSearch={handleSearch}
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />

            <main className="flex-grow">
                {currentPage === 'home' && (
                    <HomePage
                        handleNav={handleNav}
                        handleProductView={handleProductView}
                        addToEnquiry={addToEnquiry}
                        enquiryCart={enquiryCart}
                        handleSearch={handleSearch}
                    />
                )}

                {currentPage === 'shop' && (
                    <ProductPage
                        handleNav={handleNav}
                        initialCategory={selectedCategory}
                        handleProductView={handleProductView}
                        addToEnquiry={addToEnquiry}
                        enquiryCart={enquiryCart}
                    />
                )}

                {currentPage === 'products' && (
                    <ProductPage
                        handleNav={handleNav}
                        handleProductView={handleProductView}
                        addToEnquiry={addToEnquiry}
                        searchQuery={searchQuery}
                        enquiryCart={enquiryCart}
                    />
                )}

                {currentPage === 'product-detail' && selectedProduct && (
                    <ProductDetailPage
                        product={selectedProduct}
                        onBack={() => handleNav('products')}
                        onAdd={addToEnquiry}
                        enquiryCart={enquiryCart}
                        onViewDetail={handleProductView}
                    />
                )}

                {currentPage === 'enquiry' && (
                    <EnquiryCartPage
                        cart={enquiryCart}
                        setEnquiryCart={setEnquiryCart}
                        onRemove={removeFromEnquiry}
                        onNav={handleNav}
                        onSuccess={() => handleSuccess('enquiry')}
                    />
                )}

                {currentPage === 'valuation' && (
                    <ValuationPage
                        onSuccess={() => handleSuccess('valuation')}
                        handleProductView={handleProductView}
                        addToEnquiry={addToEnquiry}
                        enquiryCart={enquiryCart}
                    />
                )}

                {currentPage === 'imaging-systems' && <ImagingSystemsPage />}

                {currentPage === 'about' && <AboutPage />}

                {currentPage === 'buying-group' && <BuyingGroupPage />}

                {currentPage === 'contact' && (
                    <ContactPage
                        onSuccess={() => handleSuccess('contact')}
                    />
                )}

                {currentPage === 'account' && <AccountPage />}

                {currentPage === 'privacy' && <PrivacyPolicyPage />}

                {currentPage === 'terms' && <TermsPage />}

                {currentPage === 'returns' && <ReturnPolicyPage />}

                {currentPage === 'shipping' && <ShippingPage />}

                {currentPage === 'thank-you' && (
                    <ThankYouPage
                        type={submissionType}
                        handleNav={handleNav}
                    />
                )}
            </main>

            <Footer handleNav={handleNav} />

            <FloatingWidgets />
        </div>
    );
}
