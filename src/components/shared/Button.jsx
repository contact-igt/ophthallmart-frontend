import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyle = "px-6 py-3 rounded text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 tracking-wide uppercase";
    const variants = {
        primary: "bg-[#0B2C4D] text-white hover:bg-[#061a2e] shadow-lg shadow-blue-900/10",
        secondary: "bg-[#EA580C] text-white hover:bg-[#c2410c] shadow-lg shadow-orange-500/20",
        accent: "bg-[#EA580C] text-white hover:bg-[#c2410c]",
        outline: "border-2 border-[#0B2C4D] text-[#0B2C4D] hover:bg-[#0B2C4D] hover:text-white",
        ghost: "text-slate-600 hover:text-[#0B2C4D] hover:bg-slate-100"
    };

    return (
        <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
