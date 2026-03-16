import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
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
import BuyingGroupPage from './components/pages/BuyingGroupPage';
import ImagingSystemsPage from './components/pages/ImagingSystemsPage';
import AccountPage from './components/pages/AccountPage';
import ThankYouPage from './components/pages/ThankYouPage';
import PrivacyPolicyPage from './components/pages/PrivacyPolicyPage';
import TermsPage from './components/pages/TermsPage';
import ReturnPolicyPage from './components/pages/ReturnPolicyPage';
import ShippingPage from './components/pages/ShippingPage';
import FloatingWidgets from './components/features/FloatingWidgets';
import { PRODUCTS } from './data/mockData';

export default function App() {
    // Persistent Cart State
    const [enquiryCart, setEnquiryCart] = useState(() => {
        const saved = localStorage.getItem('enquiryCart');
        if (!saved) return [];
        
        try {
            const parsed = JSON.parse(saved);
            // Filter out products that have been marked as sold out
            return parsed.filter(cartItem => {
                const product = PRODUCTS.find(p => p.id === cartItem.id);
                return product ? !product.isSoldOut : true;
            });
        } catch (e) {
            return [];
        }
    });

    // Helper to generate a URL-friendly slug
    const generateSlug = (name) => {
        return name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
    };

    // Helper to get initial state from URL
    const getPathInfo = () => {
        const path = window.location.pathname;
        if (path.startsWith('/product/')) {
            const slug = path.split('/')[2];
            const product = PRODUCTS.find(p => generateSlug(p.name) === slug);
            return { page: 'product-detail', product: product || null };
        }
        const page = path.substring(1) || 'home';
        return { page: page === 'thank-you' ? 'thank-you' : page, product: null };
    };

    const initialInfo = getPathInfo();
    const [currentPage, setCurrentPage] = useState(initialInfo.page);
    const [selectedProduct, setSelectedProduct] = useState(initialInfo.product);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [submissionType, setSubmissionType] = useState('enquiry');
    const [previousPage, setPreviousPage] = useState('products');

    // Sync cart to localStorage
    useEffect(() => {
        localStorage.setItem('enquiryCart', JSON.stringify(enquiryCart));
    }, [enquiryCart]);

    // Derived state: filter out products that might have been marked as sold out since being added
    const activeEnquiryCart = enquiryCart.filter(item => {
        const product = PRODUCTS.find(p => p.id === item.id);
        return product ? !product.isSoldOut : true;
    });

    // Load Poppins Font
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        // POPSTATE: Handle browser back/forward buttons
        const handlePopState = () => {
            const info = getPathInfo();
            setCurrentPage(info.page);
            setSelectedProduct(info.product);
        };

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
        setPreviousPage(currentPage === 'product-detail' ? previousPage : currentPage);
        setSelectedProduct(product);
        setCurrentPage('product-detail');
        window.scrollTo(0, 0);

        // Update URL to /product/SLUG
        const slug = generateSlug(product.name);
        const path = `/product/${slug}`;
        if (window.location.pathname !== path) {
            window.history.pushState({ type: 'product', slug }, '', path);
        }
    };

    const handleNav = (page, category = null) => {
        setCurrentPage(page);
        if (category) {
            setSelectedCategory(category);
        }
        if (page !== 'products') {
            setSearchQuery('');
        }
        setSelectedProduct(null);
        setIsMobileMenuOpen(false);
        window.scrollTo(0, 0);

        // Update URL path (manual routing)
        const path = page === 'home' ? '/' : `/${page}`;
        if (window.location.pathname !== path) {
            window.history.pushState({ type: 'page', page }, '', path);
        }
    };

    const handleSuccess = (type) => {
        setSubmissionType(type);
        setCurrentPage('thank-you');
        if (type === 'enquiry') setEnquiryCart([]);
        window.scrollTo(0, 0);
        window.location.href = "/thank-you"
        // Update URL to /thank-you
        // window.history.pushState(null, '', '/thank-you');
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        setCurrentPage('products');
        window.scrollTo(0, 0);
        window.history.pushState(null, '', '/products');
    };

    return (
        <div
            className="min-h-screen bg-white flex flex-col selection:bg-orange-100 selection:text-[#EA580C] overflow-x-hidden"
            style={{ fontFamily: "'Poppins', sans-serif" }}
        >
            <Header
                currentPage={currentPage}
                enquiryCart={activeEnquiryCart}
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
                        enquiryCart={activeEnquiryCart}
                        handleSearch={handleSearch}
                    />
                )}

                {currentPage === 'shop' && (
                    <ProductPage
                        handleNav={handleNav}
                        initialCategory={selectedCategory}
                        handleProductView={handleProductView}
                        addToEnquiry={addToEnquiry}
                        enquiryCart={activeEnquiryCart}
                    />
                )}

                {currentPage === 'products' && (
                    <ProductPage
                        handleNav={handleNav}
                        handleProductView={handleProductView}
                        addToEnquiry={addToEnquiry}
                        searchQuery={searchQuery}
                        enquiryCart={activeEnquiryCart}
                        initialCategory={selectedCategory}
                        onCategoryChange={setSelectedCategory}
                    />
                )}

                {currentPage === 'product-detail' && selectedProduct && (
                    <ProductDetailPage
                        product={selectedProduct}
                        onBack={() => handleNav(previousPage)}
                        backLabel={previousPage === 'home' ? 'Back to Home' : 'Back to Products'}
                        onAdd={addToEnquiry}
                        enquiryCart={activeEnquiryCart}
                        onViewDetail={handleProductView}
                    />
                )}

                {currentPage === 'enquiry' && (
                    <EnquiryCartPage
                        cart={activeEnquiryCart}
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
                        enquiryCart={activeEnquiryCart}
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
