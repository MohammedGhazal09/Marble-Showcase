# Elegante Marble - React Showcase Website

A modern, responsive single-page React application showcasing premium marble products. Built with React, Vite, TypeScript patterns, and Tailwind CSS.

## 🚀 Live Demo

The application is running locally at: http://localhost:5173/

## 📋 Project Overview

This is a complete conversion of the original HTML/CSS/JavaScript marble showcase website into a modern React application. The site features:

- **Elegant Design**: Sophisticated aesthetic with premium marble company branding
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Navigation**: Smooth scrolling navigation with active section highlighting
- **Product Showcase**: Five distinct product categories with high-quality images
- **Contact Form**: Fully functional contact form with validation and success feedback
- **Modern Tech Stack**: React, Vite, Tailwind CSS, and modern JavaScript patterns

## 🛠️ Tech Stack

- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript (JSX)**: Modern JavaScript with React JSX syntax
- **shadcn/ui**: Pre-installed UI component library
- **Lucide Icons**: Icon library (available but not used in current design)

## 📁 Project Structure

```
marble-showcase-react/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Product images and static assets
│   │   ├── kitchen_countertop_1.jpg
│   │   ├── kitchen_sink_1.jpg
│   │   ├── standard_slab_1.jpg
│   │   ├── waterjet_medallion_1.jpg
│   │   ├── waterfall_countertop_1.jpg
│   │   ├── fountain_cube_1.webp
│   │   └── ... (20+ product images)
│   ├── components/
│   │   └── ui/            # shadcn/ui components
│   ├── App.jsx            # Main application component
│   ├── App.css            # Global styles and Tailwind configuration
│   ├── main.jsx           # Application entry point
│   └── index.css          # Base styles
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## 🎨 Key Features

### Navigation
- Fixed header with smooth scroll navigation
- Active section highlighting
- Mobile-responsive hamburger menu
- Elegant typography with Playfair Display and Inter fonts

### Product Sections
1. **Sinks & Kitchens**: Kitchen countertops and integrated sinks
2. **Standards**: Standard marble slabs and precision cuts
3. **Waterjet**: Intricate designs created with waterjet technology
4. **Waterfall**: Waterfall-style countertop installations
5. **Fountain**: Marble fountains and water features

### Interactive Elements
- Hover effects on product cards
- "View Details" buttons with smooth animations
- Contact form with real-time validation
- Success notifications for form submissions
- Responsive grid layouts that adapt to screen size

### Design Features
- Custom marble background patterns
- Elegant color scheme (charcoal, white, gold accents)
- Professional typography hierarchy
- Smooth animations and transitions
- Accessibility-friendly focus states

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- pnpm (preferred) or npm

### Installation

1. **Extract the project** (if you received a compressed file):
   ```bash
   tar -xzf marble-showcase-react-source.tar.gz
   cd marble-showcase-react
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**:
   ```bash
   pnpm run dev --host
   # or
   npm run dev -- --host
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:5173
   ```

### Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build
- `pnpm run lint` - Run ESLint

## 🎯 Component Architecture

### Main Components

#### App.jsx
The main application component containing all sections and state management.

#### Navigation Component
- Fixed header with smooth scroll functionality
- Mobile-responsive hamburger menu
- Active section highlighting based on scroll position

#### HeroSection Component
- Full-screen hero with marble background
- Call-to-action button with smooth scroll
- Animated scroll indicator

#### ProductSection Component
- Reusable component for all product categories
- Grid layout that adapts to screen size
- Alternating background colors for visual separation

#### ProductCard Component
- Individual product display with image and details
- Hover effects and overlay interactions
- "View Details" button that scrolls to contact form

#### ContactSection Component
- Two-column layout with company info and contact form
- Form validation and success feedback
- Responsive design for mobile devices

#### Footer Component
- Company branding and navigation links
- Social media links (placeholder)
- Copyright information

## 🎨 Styling Approach

### Tailwind CSS
The project uses Tailwind CSS for styling with custom configurations:

- **Custom Colors**: Defined in App.css for brand consistency
- **Typography**: Custom font imports for Playfair Display and Inter
- **Animations**: Custom keyframes for fade-in and slide effects
- **Responsive Design**: Mobile-first approach with breakpoints

### Custom CSS Classes
- `.text-shadow-*` - Text shadow utilities
- `.animate-fade-in-up` - Custom fade-in animation
- `.font-serif` - Playfair Display font family
- `.marble-bg` - Custom marble background pattern

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile**: < 768px (single column, hamburger menu)
- **Tablet**: 768px - 1024px (2-3 columns)
- **Desktop**: > 1024px (4 columns, full navigation)

## 🔧 Customization

### Adding New Products
1. Add product images to `src/assets/`
2. Import images in `App.jsx`
3. Add product data to the respective product arrays
4. The grid will automatically adjust

### Modifying Styles
- Edit `src/App.css` for global styles
- Use Tailwind classes in components for styling
- Custom colors and fonts are defined in the CSS variables

### Contact Form Integration
The contact form currently shows success messages. To integrate with a backend:

1. Replace the `handleSubmit` function in `ContactSection`
2. Add your API endpoint
3. Handle form submission and responses

## 🌟 Performance Features

- **Lazy Loading**: Images load as needed
- **Optimized Assets**: Compressed images for faster loading
- **Smooth Animations**: Hardware-accelerated CSS transitions
- **Efficient Rendering**: React functional components with hooks
- **Fast Development**: Vite's hot module replacement

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is created for demonstration purposes. All product images are used for showcase only.

## 🤝 Contributing

This is a showcase project. For modifications:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions about this React implementation:
- Check the component documentation in the code
- Review the Tailwind CSS documentation
- Consult the React and Vite documentation

---

**Built with ❤️ using React, Vite, and Tailwind CSS**

