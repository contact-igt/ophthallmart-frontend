import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../../data/mockData';
import ProductCard from '../shared/ProductCard';

const ProductPage = ({ handleNav, handleProductView, addToEnquiry, searchQuery }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    // Filter Logic
    const filteredProducts = (searchQuery
        ? PRODUCTS.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
        : [...PRODUCTS]).sort((a, b) => a.name.localeCompare(b.name));

    // Pagination Logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const itemsOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(itemsOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const changePage = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    };

    return (
        <div className="animate-in fade-in">
            <div className="bg-[#f8fafc] py-12 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-[#0B2C4D] mb-4">All Products</h1>
                    <div className="flex justify-center gap-2 text-sm text-slate-500 font-medium">
                        <span onClick={() => handleNav('home')} className="cursor-pointer hover:text-[#0B2C4D]">
                            Home
                        </span>
                        <span>/</span>
                        <span onClick={() => handleNav('shop')} className="cursor-pointer hover:text-[#0B2C4D]">
                            Shop
                        </span>
                        <span>/</span>
                        <span className="text-[#EA580C]">Products</span>
                    </div>
                </div>
            </div>
            {/* Main Grid */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {currentItems.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onView={handleProductView}
                            onAdd={addToEnquiry}
                        />
                    ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-12">
                        <button
                            onClick={() => changePage(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`p-2 rounded border border-slate-200 ${currentPage === 1 ? 'text-slate-300 cursor-not-allowed' : 'text-[#0B2C4D] hover:border-[#EA580C] hover:text-[#EA580C]'}`}
                        >
                            <ChevronLeft size={20} />
                        </button>

                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => changePage(index + 1)}
                                className={`w-10 h-10 rounded font-medium transition-all ${currentPage === index + 1
                                    ? 'bg-[#EA580C] text-white shadow-md'
                                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                                    }`}
                            >
                                {index + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => changePage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`p-2 rounded border border-slate-200 ${currentPage === totalPages ? 'text-slate-300 cursor-not-allowed' : 'text-[#0B2C4D] hover:border-[#EA580C] hover:text-[#EA580C]'}`}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductPage;
