import React from 'react';
import Hero from '../features/Hero';
import CategorySection from '../features/CategorySection';
import ProductSection from '../features/ProductSection';
import TrustIndicators from '../features/TrustIndicators';

import { BEST_SELLING_PRODUCTS, TRENDING_PRODUCTS, FEATURED_PRODUCTS, HOME_CATEGORIES } from '../../data/mockData';
import TrendingSection from '../features/TrendingSection';

const HomePage = ({ handleNav, handleProductView, addToEnquiry, enquiryCart }) => (
    <>
        <Hero handleNav={handleNav} />
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
            title="Featured Equipment"
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
        <TrustIndicators />
    </>
);

export default HomePage;
