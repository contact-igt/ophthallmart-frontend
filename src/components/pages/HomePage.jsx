import React from 'react';
import Hero from '../features/Hero';
import CategorySection from '../features/CategorySection';
import ProductSection from '../features/ProductSection';
import TrustIndicators from '../features/TrustIndicators';

const HomePage = ({ handleNav, handleProductView, addToEnquiry }) => (
    <>
        <Hero handleNav={handleNav} />
        <CategorySection handleNav={handleNav} />
        <ProductSection
            title="Best Selling Products"
            filter="bestselling"
            handleNav={handleNav}
            handleProductView={handleProductView}
            addToEnquiry={addToEnquiry}
        />
        <ProductSection
            title="Featured Equipment"
            filter="featured"
            bg="bg-slate-50"
            handleNav={handleNav}
            handleProductView={handleProductView}
            addToEnquiry={addToEnquiry}
        />
        <ProductSection
            title="Trending Now"
            filter="trending"
            handleNav={handleNav}
            handleProductView={handleProductView}
            addToEnquiry={addToEnquiry}
        />
        <TrustIndicators />
    </>
);

export default HomePage;
