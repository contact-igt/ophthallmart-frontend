import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../../data/mockData';
import ProductCard from '../shared/ProductCard';

const ProductSection = ({ title, filter, data, bg = "bg-white", handleNav, handleProductView, addToEnquiry, enquiryCart = [], onViewAll }) => {
    const productsToRender = data || PRODUCTS.filter(p => p.section === filter);

    return (
        <section className={`py-12 md:py-20 ${bg}`}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-3 md:gap-4">
                    <div>
                        <span className="text-[#EA580C] font-bold uppercase text-[10px] md:text-xs tracking-wider">Catalog</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#0B2C4D] mt-1 md:mt-2">{title}</h3>
                    </div>
                    <button
                        onClick={onViewAll || (() => handleNav('products'))}
                        className="flex items-center gap-2 text-[#0B2C4D] font-bold hover:text-[#EA580C] transition text-xs md:text-sm uppercase tracking-wide"
                    >
                        View All <ArrowRight size={14} className="md:w-4 md:h-4" />
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {productsToRender.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onView={handleProductView}
                            onAdd={addToEnquiry}
                            isAdded={enquiryCart.some(item => item.id === product.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
