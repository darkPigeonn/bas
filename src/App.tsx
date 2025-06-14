import React, { useState, useEffect } from 'react';
import {
  Car,
  Wrench,
  Shield,
  Star,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  MessageCircle,
  Award,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Pemilik Bengkel",
      content: "Sparepart di sini benar-benar original dan berkualitas. Sudah langganan 6 bulan, tidak pernah kecewa!",
      rating: 5
    },
    {
      name: "Sari Indah",
      role: "Pengguna Pribadi",
      content: "Pelayanan sangat memuaskan, barang cepat sampai dan sesuai pesanan. Recommended banget!",
      rating: 5
    },
    {
      name: "Ahmad Rahman",
      role: "Mekanik",
      content: "Stok lengkap dan harga bersaing. Tim yang profesional dan fast response.",
      rating: 5
    }
  ];

  const products = [
    {
      title: "Sparepart Motor",
      description: "Komponen original untuk berbagai merk motor Honda, Yamaha, Suzuki, Kawasaki dengan garansi resmi",
      image: "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=500",
      category: "sparepart-motor"
    },
    {
      title: "Sparepart Mobil",
      description: "Parts premium untuk perawatan mobil Toyota, Honda, Suzuki, Mitsubishi dengan kualitas terjamin",
      image: "https://images.pexels.com/photos/3689532/pexels-photo-3689532.jpeg?auto=compress&cs=tinysrgb&w=500",
      category: "sparepart-mobil"
    },
    {
      title: "Aksesori Otomotif",
      description: "Aksesoris berkualitas untuk kendaraan motor dan mobil dengan desain modern",
      image: "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=500",
      category: "aksesoris-otomotif"
    },
    {
      title: "Oli & Pelumas",
      description: "Oli original untuk performa optimal motor dan mobil dengan berbagai pilihan merk",
      image: "https://images.pexels.com/photos/4315557/pexels-photo-4315557.jpeg?auto=compress&cs=tinysrgb&w=500",
      category: "oli-pelumas"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Pelanggan Puas" },
    { icon: Award, value: "100%", label: "Barang Original" },
    { icon: Clock, value: "24/7", label: "Customer Service" },
    { icon: CheckCircle, value: "1000+", label: "Produk Tersedia" }
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/6285727769524?text=Halo, saya tertarik dengan produk BHRAMANANDA SAKTI STORE', '_blank');
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-500 ${scrollY > 50
        ? 'bg-white/95 backdrop-blur-md shadow-lg'
        : 'bg-white/90 backdrop-blur-sm shadow-sm'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 group">
              <div className="bg-gradient-to-r from-red-600 to-red-700 p-2 rounded-lg transform group-hover:scale-110 transition-all duration-300 group-hover:rotate-12">
                <Car className="h-6 w-6 text-white" />
              </div>
              <div className="transform group-hover:translate-x-1 transition-transform duration-300">
                <h1 className="font-bold text-gray-900 text-lg">BHRAMANANDA SAKTI STORE</h1>
                <p className="text-xs text-red-600 font-medium">Sparepart Motor</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
              {['Beranda', 'Tentang', 'Produk', 'Testimoni', 'Kontak'].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-red-600 transition-all duration-300 relative group py-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-6 h-6">
                <span className={`absolute top-0 left-0 w-6 h-0.5 bg-gray-900 transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                  }`}></span>
                <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''
                  }`}></span>
                <span className={`absolute top-5 left-0 w-6 h-0.5 bg-gray-900 transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                  }`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden border-t border-gray-200 overflow-hidden transition-all duration-500 ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            }`}>
            <nav className="px-2 pt-2 pb-3 space-y-1" role="navigation" aria-label="Mobile navigation">
              {['Beranda', 'Tentang', 'Produk', 'Testimoni', 'Kontak'].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 transform hover:translate-x-2"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                    opacity: isMenuOpen ? 1 : 0,
                    transition: `all 0.3s ease ${index * 50}ms`
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section id="beranda" className="pt-16 bg-gradient-to-br from-red-50 via-white to-red-50 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-100 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div
                  className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium animate-bounce"
                  style={{ animationDuration: '3s' }}
                >
                  <Award className="h-4 w-4 mr-2 animate-spin" style={{ animationDuration: '3s' }} />
                  100% Original & Terpercaya
                  <Sparkles className="h-4 w-4 ml-2 animate-pulse" />
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="inline-block animate-fade-in-up">Sparepart</span>{' '}
                  <span className="text-red-600 inline-block animate-fade-in-up bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent" style={{ animationDelay: '0.2s' }}>
                    Premium
                  </span>
                  <br />
                  <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    untuk Kendaraan Anda
                  </span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                  BHRAMANANDA SAKTI STORE menyediakan sparepart motor dan mobil original dengan kualitas terjamin.
                  Cocok untuk pengguna pribadi maupun bengkel profesional. Harga bersaing, pengiriman cepat, garansi resmi.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                  <button
                    onClick={handleWhatsApp}
                    className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-2xl flex items-center justify-center group"
                    aria-label="Hubungi kami via WhatsApp"
                  >
                    <MessageCircle className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                    Hubungi Kami
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <a
                    href="#produk"
                    className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group text-center"
                    aria-label="Lihat produk sparepart kami"
                  >
                    Lihat Produk
                    <ArrowRight className="h-5 w-5 ml-2 inline group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>

              <div className="relative animate-fade-in-up" style={{ animationDelay: '1s' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 rounded-3xl transform rotate-6 animate-pulse"></div>
                <div className="relative z-10 group">
                  <img
                    src="/assets/images/logo.jpg"
                    alt="Sparepart otomotif premium untuk motor dan mobil - BHRAMANANDA SAKTI STORE"
                    className="w-full h-96 object-cover rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-500 group-hover:rotate-1"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50" data-animate id="stats" aria-label="Statistik toko">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center transform transition-all duration-700 hover:scale-110 ${isVisible.stats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4 group hover:bg-red-200 transition-colors duration-300">
                    <stat.icon className="h-8 w-8 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2 counter" data-target={stat.value}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="tentang" className="py-20" data-animate>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`transform transition-all duration-1000 ${isVisible.tentang ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}>
                <div className="relative group">
                  <img
                    src="https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Tentang BHRAMANANDA SAKTI STORE - Toko sparepart otomotif terpercaya"
                    className="w-full h-96 object-cover rounded-2xl shadow-xl transform group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              <div className={`transform transition-all duration-1000 ${isVisible.tentang ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`} style={{ transitionDelay: '200ms' }}>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Tentang <span className="text-red-600 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">BHRAMANDA SAKTI STORE</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Didirikan pada tahun 2024 oleh Alexander David Gregorian, kami berkomitmen menyediakan
                  sparepart otomotif berkualitas tinggi dengan jaminan 100% original. Kami melayani kebutuhan
                  sparepart motor dan mobil untuk pengguna pribadi maupun bengkel profesional.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Shield, title: "Kualitas Terjamin", desc: "Semua produk dijamin 100% original dari distributor resmi dengan garansi lengkap" },
                    { icon: Wrench, title: "Stok Lengkap", desc: "Tersedia berbagai macam sparepart untuk semua jenis kendaraan motor dan mobil" },
                    { icon: Users, title: "Pelayanan Prima", desc: "Melayani pelanggan pribadi dan bengkel dengan profesional dan responsif" }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 group hover:bg-red-50 p-3 rounded-lg transition-all duration-300 transform hover:translate-x-2"
                      style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                    >
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                        <item.icon className="h-6 w-6 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition-colors duration-300">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="produk" className="py-20 bg-gray-50" data-animate>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible.produk ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Produk <span className="text-red-600 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Unggulan</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Kami menyediakan berbagai macam sparepart otomotif berkualitas tinggi
                untuk memenuhi kebutuhan kendaraan motor dan mobil Anda
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <article
                  key={index}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2 ${isVisible.produk ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={`${product.title} - ${product.description}`}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      Original
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <button
                      className="text-red-600 font-semibold hover:text-red-700 transition-all duration-300 flex items-center group-hover:translate-x-2"
                      onClick={handleWhatsApp}
                      aria-label={`Tanya harga untuk ${product.title}`}
                    >
                      Tanya Harga
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimoni" className="py-20" data-animate>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible.testimoni ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Apa Kata <span className="text-red-600 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Pelanggan</span>
              </h2>
              <p className="text-xl text-gray-600">Kepuasan pelanggan adalah prioritas utama kami</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <blockquote
                  key={index}
                  className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible.testimoni ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <cite className="font-semibold text-gray-900 not-italic">{testimonial.name}</cite>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontak" className="py-20 bg-gray-50" data-animate>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible.kontak ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Hubungi <span className="text-red-600 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Kami</span>
              </h2>
              <p className="text-xl text-gray-600">Siap melayani kebutuhan sparepart otomotif Anda</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className={`transform transition-all duration-1000 ${isVisible.kontak ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group hover:bg-white p-4 rounded-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                      <Phone className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Telepon</h4>
                      <a href="tel:+6285727769524" className="text-gray-600 hover:text-red-600 transition-colors duration-300">
                        +62 857-2776-9524
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group hover:bg-white p-4 rounded-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                      <MessageCircle className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                      <a href="https://wa.me/6285727769524" className="text-gray-600 hover:text-red-600 transition-colors duration-300">
                        +62 857-2776-9524
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group hover:bg-white p-4 rounded-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                      <Mail className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <a href="mailto:info@bhramananda-sakti-store.com" className="text-gray-600 hover:text-red-600 transition-colors duration-300">
                        info@bhramananda-sakti-store.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group hover:bg-white p-4 rounded-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                      <MapPin className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Lokasi</h4>
                      <p className="text-gray-600">Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`transform transition-all duration-1000 ${isVisible.kontak ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`} style={{ transitionDelay: '200ms' }}>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
                  <p className="text-gray-600 mb-6">
                    Silakan hubungi kami untuk informasi produk, harga, dan pemesanan sparepart otomotif.
                  </p>
                  <button
                    onClick={handleWhatsApp}
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl flex items-center justify-center group"
                    aria-label="Hubungi kami via WhatsApp untuk informasi produk"
                  >
                    <MessageCircle className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                    Chat WhatsApp
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-red-600 p-2 rounded-lg">
                  <Car className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">BHRAMANDA</h3>
                  <p className="text-sm text-red-400">SAKTI STORE</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Penyedia sparepart motor dan mobil original terpercaya dengan kualitas terjamin.
                Melayani kebutuhan pribadi dan bengkel profesional.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/bhramananda.sakti.store" className="text-gray-400 hover:text-red-400 transition-colors duration-300" aria-label="Facebook">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/bhramananda_sakti_store" className="text-gray-400 hover:text-red-400 transition-colors duration-300" aria-label="Instagram">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323C6.001 8.198 7.152 7.708 8.449 7.708s2.448.49 3.323 1.416c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323c-.875.807-2.026 1.218-3.323 1.218zm7.718-1.297c-.875.875-2.026 1.365-3.323 1.365s-2.448-.49-3.323-1.365c-.875-.875-1.365-2.026-1.365-3.323s.49-2.448 1.365-3.323c.875-.875 2.026-1.365 3.323-1.365s2.448.49 3.323 1.365c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323z" />
                  </svg>
                </a>
                <a href="https://wa.me/6285727769524" className="text-gray-400 hover:text-red-400 transition-colors duration-300" aria-label="WhatsApp">
                  <span className="sr-only">WhatsApp</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Produk</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#sparepart-motor" className="hover:text-red-400 transition-colors duration-300">Sparepart Motor</a></li>
                <li><a href="#sparepart-mobil" className="hover:text-red-400 transition-colors duration-300">Sparepart Mobil</a></li>
                <li><a href="#aksesoris-otomotif" className="hover:text-red-400 transition-colors duration-300">Aksesoris Otomotif</a></li>
                <li><a href="#oli-pelumas" className="hover:text-red-400 transition-colors duration-300">Oli & Pelumas</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Telepon: +62 857-2776-9524</li>
                <li>WhatsApp: +62 857-2776-9524</li>
                <li>Email: info@bhramananda-sakti-store.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BHRAMANDA SAKTI STORE. All rights reserved. | Dibuat oleh Alexander David Gregorian</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;