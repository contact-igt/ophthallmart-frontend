import React from 'react';
import Hero from '../features/Hero';
import CategorySection from '../features/CategorySection';
import ProductSection from '../features/ProductSection';
import TrustIndicators from '../features/TrustIndicators';
import ClientsSection from '../features/ClientsSection';
import TestimonialsSection from '../features/TestimonialsSection';

import { BEST_SELLING_PRODUCTS, TRENDING_PRODUCTS, FEATURED_PRODUCTS, HOME_CATEGORIES } from '../../data/mockData';
import TrendingSection from '../features/TrendingSection';

const HomePage = ({ handleNav, handleProductView, addToEnquiry, enquiryCart, handleSearch }) => (
    <>
        <Hero handleNav={handleNav} handleProductView={handleProductView} handleSearch={handleSearch} />
        <CategorySection handleNav={handleNav} data={HOME_CATEGORIES} />
        <ProductSection
            title="Best Selling Products"
            data={BEST_SELLING_PRODUCTS}
            handleNav={handleNav}
            handleProductView={handleProductView}
            addToEnquiry={addToEnquiry}
            enquiryCart={enquiryCart}
        />
        <ProductSection
            title="Pre-owned Market Place"
            data={FEATURED_PRODUCTS}
            bg="bg-slate-50"
            handleNav={handleNav}
            handleProductView={handleProductView}
            addToEnquiry={addToEnquiry}
            enquiryCart={enquiryCart}
        />
        <TrendingSection
            data={TRENDING_PRODUCTS}
            handleNav={handleNav}
            enquiryCart={enquiryCart}
        />
        <TestimonialsSection />
        <ClientsSection />
        <TrustIndicators />
    </>
);

export default HomePage;
