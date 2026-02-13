import React from 'react';
import { ChevronRight } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../../data/mockData';
import ProductCard from '../shared/ProductCard';

const ShopPage = ({ handleNav, handleProductView, addToEnquiry }) => (
    <div className="animate-in fade-in">
        <div className="bg-[#f8fafc] py-12 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold text-[#0B2C4D] mb-4">Product Catalog</h1>
                <div className="flex justify-center gap-2 text-sm text-slate-500 font-medium">
                    <span onClick={() => handleNav('home')} className="cursor-pointer hover:text-[#0B2C4D]">
                        Home
                    </span>
                    <span>/</span>
                    <span className="text-[#EA580C]">Shop</span>
                </div>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-10">
            {/* Sidebar */}
            <div className="w-full lg:w-64 space-y-8 flex-shrink-0">
                <div>
                    <h4 className="font-bold text-[#0B2C4D] mb-4 border-b-2 border-[#EA580C] pb-2 inline-block">
                        Categories
                    </h4>
                    <ul className="space-y-3 text-sm text-slate-600 font-medium">
                        {CATEGORIES.map(c => (
                            <li
                                key={c.id}
                                className="flex items-center justify-between cursor-pointer hover:text-[#EA580C] transition-colors group"
                            >
                                <span>{c.name}</span>
                                <ChevronRight size={14} className="text-slate-300 group-hover:text-[#EA580C]" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* Main Grid */}
            <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PRODUCTS.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onView={handleProductView}
                            onAdd={addToEnquiry}
                        />
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default ShopPage;
