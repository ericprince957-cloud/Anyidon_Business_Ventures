import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Truck,
  Shield,
  BadgeDollarSign,
  ChevronRight,
  ArrowRight,
  Mountain,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  CheckCircle,
  Clock,
  Package,
  Send,
} from 'lucide-react';

// WhatsApp number
const WHATSAPP_NUMBER = '2349067663663';

// Helper to create WhatsApp links
function createWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// ============ HEADER ============
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-dark/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-construction-yellow rounded-md flex items-center justify-center">
              <Mountain className="w-5 h-5 md:w-6 md:h-6 text-slate-dark" />
            </div>
            <span className="text-white font-extrabold text-sm md:text-lg tracking-tight uppercase">
              Anyidon Business Ventures
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-construction-yellow transition-colors font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href={createWhatsAppLink('Hello, I would like to request a quote for granite chippings.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-construction-yellow hover:bg-construction-yellow-dark text-slate-dark font-bold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-construction-yellow/25 text-sm"
            >
              Request Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-dark/95 backdrop-blur-md border-t border-white/10 pb-4 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-white/80 hover:text-construction-yellow transition-colors py-3 px-4 font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-2">
              <a
                href={createWhatsAppLink('Hello, I would like to request a quote for granite chippings.')}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-construction-yellow hover:bg-construction-yellow-dark text-slate-dark font-bold px-5 py-3 rounded-lg transition-all"
              >
                Request Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// ============ HERO SECTION ============
function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?auto=format&fit=crop&w=1920&q=80"
          alt="Granite quarry with construction materials"
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-dark/80 via-slate-dark/70 to-slate-dark/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-construction-yellow/10 border border-construction-yellow/30 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
            <CheckCircle className="w-4 h-4 text-construction-yellow" />
            <span className="text-construction-yellow text-sm font-medium">
              Nigeria's Trusted Aggregate Supplier
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 animate-fade-in-up">
            Premium Granite Chippings for{' '}
            <span className="text-construction-yellow">Major Construction</span>{' '}
            Projects.
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl animate-fade-in-up animation-delay-200">
            Trusted supplier of 3/4, 1/2, 3/8 chippings, and Stone Base across Nigeria.
            Quality materials, competitive prices, prompt delivery.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
            <a
              href={createWhatsAppLink('Hello, I would like to get a price estimate for granite chippings. Please share your current pricing.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-construction-yellow hover:bg-construction-yellow-dark text-slate-dark font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-construction-yellow/30 text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Get a Price Estimate</span>
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center space-x-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:bg-white/5 text-lg"
            >
              <span>View Our Products</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10 animate-fade-in-up animation-delay-600">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-construction-yellow">500+</div>
              <div className="text-white/60 text-sm mt-1">Projects Supplied</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-construction-yellow">10+</div>
              <div className="text-white/60 text-sm mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-construction-yellow">36</div>
              <div className="text-white/60 text-sm mt-1">States Covered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-construction-yellow rounded-full" />
        </div>
      </div>
    </section>
  );
}

// ============ PRODUCTS SECTION ============
function ProductsSection() {
  const products = [
    {
      title: '3/4 Inch Chippings',
      description: 'Ideal for concrete mixing and foundations. The most versatile aggregate for structural work.',
      icon: '🪨',
      color: 'from-amber-500/20 to-orange-600/20',
    },
    {
      title: '1/2 Inch Chippings',
      description: 'Perfect for drainage systems and landscaping projects. Smooth finish and consistent sizing.',
      icon: '⬛',
      color: 'from-slate-500/20 to-slate-700/20',
    },
    {
      title: '3/8 Inch Chippings',
      description: 'Great for fine concrete work, plastering, and decorative applications.',
      icon: '🔹',
      color: 'from-blue-500/20 to-indigo-600/20',
    },
    {
      title: '1" Chippings',
      description: 'Heavy-duty construction projects requiring maximum strength and load-bearing capacity.',
      icon: '🏗️',
      color: 'from-emerald-500/20 to-teal-600/20',
    },
    {
      title: 'Stone Base (Granite)',
      description: 'Solid foundation material for roads, floors, and heavy construction. Superior compaction.',
      icon: '🏔️',
      color: 'from-purple-500/20 to-violet-600/20',
    },
  ];

  return (
    <section id="products" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-construction-yellow/10 rounded-full px-4 py-1.5 mb-4">
            <Package className="w-4 h-4 text-construction-yellow-dark" />
            <span className="text-construction-yellow-dark text-sm font-semibold">Our Products</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-dark mb-4">
            Our Premium Aggregates
          </h2>
          <p className="text-slate-dark/60 text-lg">
            We supply high-quality granite chippings in various sizes to meet every construction need.
            All materials are sourced directly from our quarry.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              className={`group relative bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 ${
                index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-4xl mb-4">{product.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-dark mb-2 group-hover:text-slate-dark">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-slate-dark/60 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Order Button */}
                <a
                  href={createWhatsAppLink(`Hello, I would like to order ${product.title}. Please share availability and pricing.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-construction-yellow-dark font-semibold hover:text-construction-yellow transition-colors group/btn"
                >
                  <span>Order Now</span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ WHY CHOOSE US ============
function WhyUsSection() {
  const reasons = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Quality Assurance',
      description:
        'Only the hardest, most durable stones sourced directly from our quarry. Every batch is tested for strength and consistency.',
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Prompt Delivery',
      description:
        'Reliable logistics network ensuring your materials arrive on time, every time. We serve all 36 states across Nigeria.',
    },
    {
      icon: <BadgeDollarSign className="w-8 h-8" />,
      title: 'Competitive Pricing',
      description:
        'Bulk discounts and transparent pricing for contractors and individuals. No hidden charges, no surprises.',
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-slate-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-construction-yellow rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-construction-yellow rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-construction-yellow/10 border border-construction-yellow/20 rounded-full px-4 py-1.5 mb-4">
            <CheckCircle className="w-4 h-4 text-construction-yellow" />
            <span className="text-construction-yellow text-sm font-semibold">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Why Builders Trust Anyidon
          </h2>
          <p className="text-white/60 text-lg">
            We've built our reputation on reliability, quality, and fair pricing.
            Here's why top contractors choose us.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-construction-yellow/30 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-construction-yellow/10 text-construction-yellow mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-white/60 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ HOW IT WORKS ============
function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Select Material',
      description: 'Choose from our range of premium granite chippings and stone base products.',
      icon: <Package className="w-6 h-6" />,
    },
    {
      number: '02',
      title: 'Request Quote',
      description: 'Send us your requirements via WhatsApp or call. Get pricing within minutes.',
      icon: <MessageCircle className="w-6 h-6" />,
    },
    {
      number: '03',
      title: 'We Deliver',
      description: 'Our trucks deliver directly to your site. Fast, reliable, on schedule.',
      icon: <Truck className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-construction-yellow/10 rounded-full px-4 py-1.5 mb-4">
            <Clock className="w-4 h-4 text-construction-yellow-dark" />
            <span className="text-construction-yellow-dark text-sm font-semibold">Simple Process</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-dark mb-4">
            How It Works
          </h2>
          <p className="text-slate-dark/60 text-lg">
            Getting quality materials to your site is simple. Just three easy steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-construction-yellow/20 via-construction-yellow to-construction-yellow/20" />

          {steps.map((step, index) => (
            <div key={step.title} className="relative text-center">
              {/* Step Number Circle */}
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-construction-yellow text-slate-dark font-black text-2xl mb-6 shadow-lg shadow-construction-yellow/30">
                {step.number}
              </div>

              {/* Icon */}
              <div className="absolute top-2 right-1/4 md:right-1/3 w-8 h-8 bg-slate-dark rounded-full flex items-center justify-center text-construction-yellow">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-dark mb-2">{step.title}</h3>
              <p className="text-slate-dark/60 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>

              {/* Arrow between steps (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 -right-4 text-construction-yellow">
                  <ArrowRight className="w-8 h-8" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ CONTACT / QUOTE FORM ============
function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    material: '',
    quantity: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Anyidon Business Ventures! I'd like to request a quote.\n\n📋 *Order Details:*\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Delivery Location: ${formData.location}\n• Material: ${formData.material}\n• Quantity: ${formData.quantity}\n\nPlease share pricing and availability. Thank you!`;
    window.open(createWhatsAppLink(message), '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-construction-yellow/10 rounded-full px-4 py-1.5 mb-4">
            <Send className="w-4 h-4 text-construction-yellow-dark" />
            <span className="text-construction-yellow-dark text-sm font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-dark mb-4">
            Request a Quick Quote
          </h2>
          <p className="text-slate-dark/60 text-lg">
            Fill in the form below and we'll get back to you with pricing within minutes via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-dark mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-all text-slate-dark placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-dark mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="08012345678"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-all text-slate-dark placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-dark mb-2">
                  Delivery Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Lekki Phase 1, Lagos"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-all text-slate-dark placeholder:text-slate-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-dark mb-2">
                    Material Needed
                  </label>
                  <select
                    name="material"
                    value={formData.material}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-all text-slate-dark bg-white"
                  >
                    <option value="">Select material</option>
                    <option value="3/4 Inch Chippings">3/4 Inch Chippings</option>
                    <option value="1/2 Inch Chippings">1/2 Inch Chippings</option>
                    <option value="3/8 Inch Chippings">3/8 Inch Chippings</option>
                    <option value="1 Inch Chippings">1" Chippings</option>
                    <option value="Stone Base">Stone Base (Granite)</option>
                    <option value="Multiple Materials">Multiple Materials</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-dark mb-2">
                    Quantity (Tonnes / Trips)
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    placeholder="e.g., 20 tonnes or 3 trips"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-construction-yellow focus:ring-2 focus:ring-construction-yellow/20 outline-none transition-all text-slate-dark placeholder:text-slate-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-construction-yellow hover:bg-construction-yellow-dark text-slate-dark font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-construction-yellow/30 text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send Request via WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="bg-slate-dark rounded-2xl p-8 h-full">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-construction-yellow/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-construction-yellow" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">Phone / WhatsApp</div>
                    <a href="tel:+2349067663663" className="text-white font-medium hover:text-construction-yellow transition-colors">
                      +234 906 766 3663
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-construction-yellow/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-construction-yellow" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">Email</div>
                    <a href="mailto:info@anyidonventures.com" className="text-white font-medium hover:text-construction-yellow transition-colors">
                      info@anyidonventures.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-construction-yellow/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-construction-yellow" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">Office Address</div>
                    <p className="text-white font-medium">
                      No. 15 Quarry Road,<br />
                      Abuja, FCT, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-construction-yellow/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-construction-yellow" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">Working Hours</div>
                    <p className="text-white font-medium">
                      Mon - Sat: 7:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp CTA */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href={createWhatsAppLink('Hello, I need more information about your granite products.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-construction-yellow font-semibold hover:text-construction-yellow-light transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat with us now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer className="bg-slate-darker py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-construction-yellow rounded-md flex items-center justify-center">
                <Mountain className="w-5 h-5 text-slate-dark" />
              </div>
              <span className="text-white font-extrabold text-lg tracking-tight uppercase">
                Anyidon Business Ventures
              </span>
            </div>
            <p className="text-white/50 leading-relaxed max-w-md mb-6">
              Nigeria's trusted supplier of premium granite chippings and stone base materials.
              Delivering quality construction aggregates since 2014.
            </p>
            {/* Social Links */}
            <div className="flex space-x-3">
              {[
                { icon: <Facebook className="w-4 h-4" />, href: '#' },
                { icon: <Instagram className="w-4 h-4" />, href: '#' },
                { icon: <Twitter className="w-4 h-4" />, href: '#' },
                { icon: <Linkedin className="w-4 h-4" />, href: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-construction-yellow/20 border border-white/10 hover:border-construction-yellow/30 flex items-center justify-center text-white/60 hover:text-construction-yellow transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Products', 'Why Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-white/50 hover:text-construction-yellow transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold mb-4">Products</h4>
            <ul className="space-y-3">
              {['3/4" Chippings', '1/2" Chippings', '3/8" Chippings', '1" Chippings', 'Stone Base'].map((product) => (
                <li key={product}>
                  <a
                    href="#products"
                    className="text-white/50 hover:text-construction-yellow transition-colors text-sm"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2026 Anyidon Business Ventures. All Rights Reserved.
          </p>
          <p className="text-white/40 text-sm">
            Built with excellence for Nigeria's construction industry.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ============ FLOATING WHATSAPP BUTTON ============
function FloatingWhatsApp() {
  return (
    <a
      href={createWhatsAppLink('Hello, I need information about your granite products.')}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-200 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
}

// ============ MAIN APP ============
export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductsSection />
      <WhyUsSection />
      <HowItWorksSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
