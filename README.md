# Ophthall Mart - B2B Ophthalmic Equipment Marketplace

A modern, fully-featured B2B e-commerce platform for ophthalmic equipment built with React, Vite, and Tailwind CSS.

## Features

- **Modern UI/UX**: Deep Navy (#0B2C4D) & Orange (#EA580C) theme with Poppins font
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Product Catalog**: Browse products by category with filtering
- **Product Details**: Detailed product pages with specifications
- **Enquiry System**: Add products to enquiry cart and submit enquiries
- **Valuation Tool**: Get quotes for used equipment
- **Multi-page Navigation**: Home, Shop, Product Detail, Enquiry Cart, Valuation, Contact, About, Account
- **Interactive Elements**: Hero slider, floating chatbot, WhatsApp integration

## Project Structure

```
ophthallmart/
├── src/
│   ├── components/
│   │   ├── shared/          # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── Input.jsx
│   │   ├── layout/          # Layout components
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/           # Page components
│   │   │   ├── HomePage.jsx
│   │   │   ├── ShopPage.jsx
│   │   │   ├── ProductDetailPage.jsx
│   │   │   ├── EnquiryCartPage.jsx
│   │   │   ├── ValuationPage.jsx
│   │   │   ├── ContactPage.jsx
│   │   │   ├── AboutPage.jsx
│   │   │   └── AccountPage.jsx
│   │   └── features/        # Feature components
│   │       ├── Hero.jsx
│   │       ├── CategorySection.jsx
│   │       ├── ProductSection.jsx
│   │       ├── TrustIndicators.jsx
│   │       └── FloatingWidgets.jsx
│   ├── data/
│   │   ├── mockData.js      # Mock product data
│   │   └── constants.js     # Theme and config constants
│   ├── App.jsx              # Main app component
│   ├── index.jsx            # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd c:\Invictus_Projects\ophthallmart
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## Component Architecture

### Shared Components
- **Button**: Reusable button with multiple variants (primary, secondary, accent, outline, ghost)
- **ProductCard**: Product display card with image, details, rating, and actions
- **Input**: Form input components (TextInput, TextArea, Select)

### Layout Components
- **Header**: Main navigation with logo, menu, search, cart, and mobile menu
- **Footer**: Footer with company info, links, and contact details

### Page Components
- **HomePage**: Composed of Hero, CategorySection, ProductSections, and TrustIndicators
- **ShopPage**: Product catalog with sidebar filters
- **ProductDetailPage**: Detailed product view with specifications
- **EnquiryCartPage**: Cart management and enquiry form
- **ValuationPage**: Equipment valuation form
- **ContactPage**: Contact form with company information
- **AboutPage**: Company information and statistics
- **AccountPage**: Customer login

### Feature Components
- **Hero**: Auto-rotating hero slider
- **CategorySection**: Product category grid
- **ProductSection**: Reusable product grid with filtering
- **TrustIndicators**: Trust badges (shipping, security, support)
- **FloatingWidgets**: Chatbot and WhatsApp buttons

## Technologies Used

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## Theme

- **Primary Color**: Deep Navy (#0B2C4D)
- **Secondary Color**: Orange (#EA580C)
- **Font**: Poppins (Google Fonts)

## Contact

- **Phone**: +91 87545 17944
- **Email**: sales@ophthallmart.com
- **Support**: support@ophthallmart.com
- **Address**: No. 12, Medical Park, Chennai, Tamil Nadu, 600001

## License

Copyright © 2024 Ophthall Mart. All rights reserved.
