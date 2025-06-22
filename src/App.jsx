import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button.jsx';
import './App.css';

// Import all product images
import kitchenCountertop1 from './assets/kitchen_countertop_1.jpg';
import kitchenSink1 from './assets/kitchen_sink_1.jpg';
import kitchenSink2 from './assets/kitchen_sink_2.jpg';
import kitchenCountertop2 from './assets/kitchen_countertop_2.jpg';
import standardSlab1 from './assets/standard_slab_1.jpg';
import standardSlab2 from './assets/standard_slab_2.jpg';
import standardSlab3 from './assets/standard_slab_3.jpg';
import standardCut1 from './assets/standard_cut_1.jpg';
import waterjetMedallion1 from './assets/waterjet_medallion_1.jpg';
import waterjetBorder1 from './assets/waterjet_border_1.jpg';
import waterjetFloor1 from './assets/waterjet_floor_1.webp';
import waterjetIntricate1 from './assets/waterjet_intricate_1.jpg';
import waterfallCountertop1 from './assets/waterfall_countertop_1.jpg';
import waterfallCountertop2 from './assets/waterfall_countertop_2.jpeg';
import waterfallCountertop3 from './assets/waterfall_countertop_3.jpg';
import waterfallCountertop4 from './assets/waterfall_countertop_4.jpg';
import fountainCube1 from './assets/fountain_cube_1.webp';
import fountainVenus1 from './assets/fountain_venus_1.webp';
import fountainTiered1 from './assets/fountain_tiered_1.jpg';
import fountainTiered2 from './assets/fountain_tiered_2.jpg';

// Navigation Component
const Navigation = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'sinks-kitchens', label: 'Sinks & Kitchens' },
    { id: 'standards', label: 'Standards' },
    { id: 'waterjet', label: 'Waterjet' },
    { id: 'waterfall', label: 'Waterfall' },
    { id: 'fountain', label: 'Fountain' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/98 shadow-lg' : 'bg-white/95'
    } backdrop-blur-md`}>
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center h-20">
        <div className="nav-logo">
          <h1 className="text-2xl font-serif font-semibold text-gray-800 tracking-tight">
            Elegante Marble
          </h1>
        </div>
        
        <ul className={`hidden md:flex space-x-8`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`text-gray-700 font-medium text-sm transition-colors duration-300 relative hover:text-yellow-600 ${
                  activeSection === item.id ? 'text-yellow-600' : ''
                }`}
              >
                {item.label}
                <span className={`absolute bottom-[-5px] left-0 h-0.5 bg-yellow-600 transition-all duration-300 ${
                  activeSection === item.id ? 'w-full' : 'w-0 hover:w-full'
                }`}></span>
              </button>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden flex flex-col space-y-1 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${
            isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-0' : ''
          }`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${
            isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}></span>
        </button>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed left-0 top-20 w-full bg-white/98 backdrop-blur-md shadow-lg transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <ul className="py-5">
            {navItems.map((item) => (
              <li key={item.id} className="my-4 text-center">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 font-medium hover:text-yellow-600 transition-colors duration-300"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section id="home" className="h-screen bg-gradient-to-br from-gray-600/40 to-gray-800/40 bg-gray-300 flex items-center justify-center text-center relative">
      <div className="max-w-4xl px-5 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight text-shadow-lg">
          Timeless Elegance in Stone
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10 font-light leading-relaxed text-shadow-md">
          Discover our exquisite collection of premium marble products, crafted to perfection for the most discerning tastes.
        </p>
        <Button
          onClick={() => document.getElementById('sinks-kitchens').scrollIntoView({ behavior: 'smooth' })}
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl uppercase tracking-wide"
        >
          Explore Collection
        </Button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-8 border-2 border-white border-t-0 border-l-0 transform rotate-45"></div>
      </div>
    </section>
  );
};

// Product Card Component
const ProductCard = ({ image, title, description, onInquire }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gray-800/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button
            onClick={onInquire}
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-3 rounded-full uppercase tracking-wide text-sm transform scale-105 hover:scale-110 transition-transform duration-300"
          >
            View Details
          </Button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold text-gray-800 mb-3 tracking-tight">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

// Product Section Component
const ProductSection = ({ id, title, description, products, isAlternate = false }) => {
  const handleInquire = (productName) => {
    const contactSection = document.getElementById('contact');
    const offsetTop = contactSection.offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
    
    setTimeout(() => {
      const messageField = document.getElementById('message');
      if (messageField) {
        messageField.value = `I'm interested in learning more about the ${productName}. Please provide more details and pricing information.`;
        messageField.focus();
      }
    }, 1000);
  };

  return (
    <section id={id} className={`py-24 ${isAlternate ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-800 mb-6 tracking-tight">
            {title}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-15">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              description={product.description}
              onInquire={() => handleInquire(product.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: ''
      });
      
      setTimeout(() => setShowSuccess(false), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6 tracking-tight">
              Get in Touch
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-10">
              Ready to transform your space with our premium marble products? Contact our experts for personalized consultation and quotes.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-yellow-600 font-semibold uppercase tracking-wide text-sm mb-2">
                  Phone
                </h4>
                <p className="text-white/90">+1 (555) 123-4567</p>
              </div>
              <div>
                <h4 className="text-yellow-600 font-semibold uppercase tracking-wide text-sm mb-2">
                  Email
                </h4>
                <p className="text-white/90">info@elegantemarble.com</p>
              </div>
              <div>
                <h4 className="text-yellow-600 font-semibold uppercase tracking-wide text-sm mb-2">
                  Address
                </h4>
                <p className="text-white/90">
                  123 Marble Avenue<br />
                  Stone City, SC 12345
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 p-10 rounded-2xl backdrop-blur-md">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 border border-white/20 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-yellow-600 focus:bg-white/15 transition-all duration-300"
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 border border-white/20 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-yellow-600 focus:bg-white/15 transition-all duration-300"
                />
              </div>
              <div className="mb-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-white/20 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-yellow-600 focus:bg-white/15 transition-all duration-300"
                />
              </div>
              <div className="mb-6">
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 border border-white/20 rounded-lg bg-white/10 text-white focus:outline-none focus:border-yellow-600 focus:bg-white/15 transition-all duration-300"
                >
                  <option value="">Select Your Interest</option>
                  <option value="sinks-kitchens">Sinks & Kitchens</option>
                  <option value="standards">Standard Slabs</option>
                  <option value="waterjet">Waterjet Designs</option>
                  <option value="waterfall">Waterfall Countertops</option>
                  <option value="fountain">Fountains</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-8">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full p-4 border border-white/20 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-yellow-600 focus:bg-white/15 transition-all duration-300 resize-none"
                ></textarea>
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold text-lg py-4 rounded-lg uppercase tracking-wide transition-all duration-300 transform hover:-translate-y-1"
              >
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      {showSuccess && (
        <div className="fixed top-24 right-5 bg-green-600 text-white p-4 rounded-lg shadow-lg z-50 animate-slide-in-right">
          Thank you! Your inquiry has been sent successfully.
        </div>
      )}
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-xl font-serif text-yellow-600 mb-3">
              Elegante Marble
            </h3>
            <p className="text-white/70 italic">
              Timeless elegance in stone
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <a href="#home" className="text-white/80 hover:text-yellow-600 transition-colors duration-300">Home</a>
            <a href="#sinks-kitchens" className="text-white/80 hover:text-yellow-600 transition-colors duration-300">Products</a>
            <a href="#contact" className="text-white/80 hover:text-yellow-600 transition-colors duration-300">Contact</a>
            <a href="#" className="text-white/80 hover:text-yellow-600 transition-colors duration-300">Privacy Policy</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-xl hover:scale-125 transition-transform duration-300">📘</a>
            <a href="#" className="text-xl hover:scale-125 transition-transform duration-300">📷</a>
            <a href="#" className="text-xl hover:scale-125 transition-transform duration-300">💼</a>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-white/60">
            &copy; 2025 Elegante Marble. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Product data
  const sinksKitchensProducts = [
    {
      image: kitchenCountertop1,
      title: "Carrara Kitchen Island",
      description: "Classic Carrara marble with distinctive veining, perfect for sophisticated kitchen designs."
    },
    {
      image: kitchenSink1,
      title: "Integrated Marble Sink",
      description: "Seamlessly integrated sink design that combines functionality with elegant aesthetics."
    },
    {
      image: kitchenSink2,
      title: "Polished Apron Sink",
      description: "Single bowl kitchen sink in pristine white marble with polished apron finish."
    },
    {
      image: kitchenCountertop2,
      title: "Premium Countertop",
      description: "Luxurious marble countertop with dramatic veining for statement kitchen designs."
    }
  ];

  const standardsProducts = [
    {
      image: standardSlab1,
      title: "Custom Cut Marble",
      description: "Precision-cut marble slabs tailored to your exact specifications and design requirements."
    },
    {
      image: standardSlab2,
      title: "Carrara Standard Slab",
      description: "Classic Carrara marble in standard sizes and thickness, ideal for various applications."
    },
    {
      image: standardSlab3,
      title: "Areti White Classic",
      description: "Premium white marble with subtle veining, perfect for wall covering and flooring."
    },
    {
      image: standardCut1,
      title: "Precision Cutting",
      description: "Expert cutting services ensuring perfect dimensions and smooth finishes for your project."
    }
  ];

  const waterjetProducts = [
    {
      image: waterjetMedallion1,
      title: "Neo Classic Medallion",
      description: "96\"x96\" marble waterjet medallion featuring intricate neo-classical design patterns."
    },
    {
      image: waterjetBorder1,
      title: "Ornate Border Design",
      description: "Detailed waterjet borders and medallions perfect for luxury living room installations."
    },
    {
      image: waterjetFloor1,
      title: "Inlay Floor Medallion",
      description: "Sophisticated medallion design for marble inlay flooring applications."
    },
    {
      image: waterjetIntricate1,
      title: "Intricate Mosaic Tiles",
      description: "Exquisite waterjet tiles featuring complex geometric and floral patterns."
    }
  ];

  const waterfallProducts = [
    {
      image: waterfallCountertop1,
      title: "Professional Waterfall Edge",
      description: "Elegant waterfall countertop installation showcasing seamless marble continuity."
    },
    {
      image: waterfallCountertop2,
      title: "Luxury Kitchen Island",
      description: "Sophisticated waterfall edge design that redefines luxury in modern kitchen spaces."
    },
    {
      image: waterfallCountertop3,
      title: "Contemporary Waterfall",
      description: "Gorgeous waterfall countertop that redefines luxury with its seamless design."
    },
    {
      image: waterfallCountertop4,
      title: "Expert Installation",
      description: "Professional waterfall countertop installation services ensuring perfect results."
    }
  ];

  const fountainProducts = [
    {
      image: fountainCube1,
      title: "Glacier Cube Fountain",
      description: "20\" luxury marble cube fountain perfect for modern garden and patio settings."
    },
    {
      image: fountainVenus1,
      title: "Daydreaming Venus",
      description: "Classical marble fountain featuring artistic sculpture, perfect for elegant garden spaces."
    },
    {
      image: fountainTiered1,
      title: "3-Tier Garden Fountain",
      description: "31-inch outdoor white marble water fountain with pump for garden and patio decoration."
    },
    {
      image: fountainTiered2,
      title: "Tiered Water Feature",
      description: "Elegant tiered marble fountain design for sophisticated outdoor garden decor."
    }
  ];

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'sinks-kitchens', 'standards', 'waterjet', 'waterfall', 'fountain', 'contact'];
      const scrollPosition = window.pageYOffset + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.clientHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <HeroSection />
      
      <ProductSection
        id="sinks-kitchens"
        title="Sinks & Kitchens"
        description="Transform your culinary space with our premium marble countertops and integrated sinks, designed for both beauty and functionality."
        products={sinksKitchensProducts}
      />
      
      <ProductSection
        id="standards"
        title="Standards"
        description="Our collection of standard marble slabs and precision cuts, available in various sizes and finishes to meet your project requirements."
        products={standardsProducts}
        isAlternate={true}
      />
      
      <ProductSection
        id="waterjet"
        title="Waterjet"
        description="Intricate marble designs created using advanced waterjet technology, featuring detailed patterns and artistic medallions."
        products={waterjetProducts}
      />
      
      <ProductSection
        id="waterfall"
        title="Waterfall"
        description="Stunning waterfall-style installations featuring continuous marble surfaces that create dramatic visual impact in modern spaces."
        products={waterfallProducts}
        isAlternate={true}
      />
      
      <ProductSection
        id="fountain"
        title="Fountain"
        description="Exquisite marble fountains and water features that bring tranquility and elegance to gardens, patios, and interior spaces."
        products={fountainProducts}
      />
      
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;

