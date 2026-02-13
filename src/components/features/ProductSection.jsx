import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../../data/mockData';
import ProductCard from '../shared/ProductCard';

const ProductSection = ({ title, filter, bg = "bg-white", handleNav, handleProductView, addToEnquiry }) => (
    <section className={`py-20 ${bg}`}>
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div>
                    <span className="text-[#EA580C] font-bold uppercase text-xs tracking-wider">Catalog</span>
                    <h3 className="text-3xl font-bold text-[#0B2C4D] mt-2">{title}</h3>
                </div>
                <button
                    onClick={() => handleNav('shop')}
                    className="flex items-center gap-2 text-[#0B2C4D] font-bold hover:text-[#EA580C] transition text-sm uppercase tracking-wide"
                >
                    View All <ArrowRight size={16} />
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {PRODUCTS.filter(p => p.section === filter).map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onView={handleProductView}
                        onAdd={addToEnquiry}
                    />
                ))}
            </div>
        </div>
    </section>
);

export default ProductSection;
