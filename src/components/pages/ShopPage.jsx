import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../../data/mockData';
import ProductCard from '../shared/ProductCard';

const ShopPage = ({ handleNav, handleProductView, addToEnquiry, initialCategory }) => {
    // State for active category and pagination
    const [activeCategory, setActiveCategory] = useState(initialCategory || CATEGORIES[0].name);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    // Update active category when initialCategory prop changes
    React.useEffect(() => {
        if (initialCategory) {
            setActiveCategory(initialCategory);
            setCurrentPage(1);
        }
    }, [initialCategory]);

    // Filter products based on active category
    const filteredProducts = PRODUCTS.filter(product => product.category === activeCategory);

    // Pagination Logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const itemsOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(itemsOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const changePage = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    };

    const handleCategoryChange = (categoryName) => {
        setActiveCategory(categoryName);
        setCurrentPage(1); // Reset to first page when category changes
        window.scrollTo(0, 0);
    };

    return (
        <div className="animate-in fade-in">
            <div className="bg-[#f8fafc] py-12 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-[#0B2C4D] mb-4">Shop by Category</h1>
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
                <div className="w-full lg:w-64 space-y-8 flex-shrink-0 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto">
                    <div>
                        <h4 className="font-bold text-[#0B2C4D] mb-4 border-b-2 border-[#EA580C] pb-2 inline-block">
                            Categories
                        </h4>
                        <ul className="space-y-3 text-sm text-slate-600 font-medium">
                            {CATEGORIES.map(c => (
                                <li
                                    key={c.id}
                                    onClick={() => handleCategoryChange(c.name)}
                                    className={`flex items-center justify-between cursor-pointer transition-colors group ${activeCategory === c.name ? 'text-[#EA580C] font-bold' : 'hover:text-[#EA580C]'
                                        }`}
                                >
                                    <span>{c.name}</span>
                                    <ChevronRight size={14} className={`group-hover:text-[#EA580C] ${activeCategory === c.name ? 'text-[#EA580C]' : 'text-slate-300'}`} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold text-[#0B2C4D] mb-6 pb-2 border-b border-slate-200">
                            {activeCategory}
                        </h3>

                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {currentItems.map(product => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        onView={handleProductView}
                                        onAdd={addToEnquiry}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 text-slate-500">
                                No products found in this category.
                            </div>
                        )}
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
        </div>
    );
};

export default ShopPage;
