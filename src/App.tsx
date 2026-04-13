/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Anchor, 
  Ship, 
  Globe, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight,
  ArrowRight,
  Award,
  Users,
  Clock
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Layanan', href: '#services' },
    { name: 'Armada', href: '#fleet' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-navy/95 backdrop-blur-md py-3 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Anchor className={`w-8 h-8 ${isScrolled ? 'text-gold' : 'text-gold'}`} />
          <span className={`text-xl font-serif font-bold tracking-wider ${isScrolled ? 'text-white' : 'text-white'}`}>
            SAMUDERA <span className="text-gold">NUSANTARA</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium tracking-widest uppercase transition-colors hover:text-gold ${isScrolled ? 'text-white' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-gold hover:bg-gold-light text-navy px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all transform hover:scale-105">
            Hubungi Kami
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-lg font-medium hover:text-gold"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden bg-navy">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544441893-675973e31d85?q=80&w=2070&auto=format&fit=crop" 
          alt="Cargo Ship" 
          className="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="inline-block text-gold font-bold tracking-[0.3em] uppercase text-sm mb-4">
            Global Maritime Excellence
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">
            Menghubungkan <span className="italic text-gold">Nusantara</span> ke Seluruh Dunia
          </h1>
          <p className="text-white/80 text-lg mb-10 leading-relaxed max-w-xl">
            PT Samudera Nusantara hadir sebagai mitra logistik maritim terpercaya di Semarang, 
            memberikan solusi pelayaran kelas dunia dengan armada modern dan layanan prima.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-gold text-navy px-8 py-4 rounded-full font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-gold-light transition-all group">
              Layanan Kami <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
              Tentang Kami
            </button>
          </div>
        </motion.div>
      </div>

      {/* Stats Overlay */}
      <div className="absolute bottom-0 left-0 w-full bg-white/5 backdrop-blur-sm border-t border-white/10 py-8 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-white">
          <div className="flex items-center gap-4">
            <span className="text-4xl font-serif text-gold">25+</span>
            <span className="text-xs uppercase tracking-widest opacity-70">Tahun<br/>Pengalaman</span>
          </div>
          <div className="h-10 w-px bg-white/20" />
          <div className="flex items-center gap-4">
            <span className="text-4xl font-serif text-gold">150+</span>
            <span className="text-xs uppercase tracking-widest opacity-70">Armada<br/>Modern</span>
          </div>
          <div className="h-10 w-px bg-white/20" />
          <div className="flex items-center gap-4">
            <span className="text-4xl font-serif text-gold">500+</span>
            <span className="text-xs uppercase tracking-widest opacity-70">Klien<br/>Global</span>
          </div>
          <div className="h-10 w-px bg-white/20" />
          <div className="flex items-center gap-4">
            <span className="text-4xl font-serif text-gold">24/7</span>
            <span className="text-xs uppercase tracking-widest opacity-70">Dukungan<br/>Operasional</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1516216628859-9bccecab13ca?q=80&w=2069&auto=format&fit=crop" 
                alt="Semarang Port" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-navy p-10 rounded-2xl shadow-2xl hidden lg:block">
              <Award className="text-gold w-12 h-12 mb-4" />
              <h4 className="text-white font-serif text-2xl mb-2">Terbaik di Semarang</h4>
              <p className="text-white/60 text-sm">Penghargaan Logistik Maritim 2025</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-bold tracking-widest uppercase text-sm">Warisan & Visi</span>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mt-4 mb-8">
              Membangun Jembatan Maritim yang Kokoh
            </h2>
            <p className="text-navy/70 text-lg mb-6 leading-relaxed">
              Berpusat di kota pelabuhan strategis Semarang, PT Samudera Nusantara telah tumbuh menjadi pemimpin dalam industri pelayaran nasional. Kami memahami bahwa setiap kargo adalah janji yang harus ditepati.
            </p>
            <p className="text-navy/70 text-lg mb-8 leading-relaxed">
              Dengan dedikasi pada integritas dan inovasi, kami terus memperluas jangkauan kami, memastikan arus logistik yang lancar untuk mendukung pertumbuhan ekonomi Indonesia.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-lg">
                  <ShieldCheck className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-navy">Keamanan Utama</h5>
                  <p className="text-sm text-navy/60">Standar keamanan internasional (ISPS Code).</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-lg">
                  <Globe className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-navy">Jaringan Luas</h5>
                  <p className="text-sm text-navy/60">Koneksi ke pelabuhan utama dunia.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Ocean Freight",
      description: "Layanan pengiriman peti kemas internasional dan domestik dengan jadwal yang presisi.",
      icon: <Ship className="w-8 h-8" />,
    },
    {
      title: "Logistik Terpadu",
      description: "Solusi rantai pasok end-to-end mulai dari pergudangan hingga distribusi akhir.",
      icon: <Globe className="w-8 h-8" />,
    },
    {
      title: "Manajemen Armada",
      description: "Layanan teknis dan operasional profesional untuk pemeliharaan kapal kargo.",
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Chartering",
      description: "Penyewaan kapal khusus untuk kebutuhan kargo curah, cair, maupun proyek berat.",
      icon: <Clock className="w-8 h-8" />,
    }
  ];

  return (
    <section id="services" className="py-24 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-gold font-bold tracking-widest uppercase text-sm">Layanan Premium</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6">Solusi Maritim Komprehensif</h2>
          <p className="text-white/60 text-lg">
            Kami menyediakan berbagai layanan yang dirancang untuk memenuhi kebutuhan logistik modern Anda dengan efisiensi maksimal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-gold hover:text-navy transition-all duration-500 group cursor-pointer"
            >
              <div className="text-gold group-hover:text-navy mb-6 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/60 group-hover:text-navy/80 transition-colors">
                {service.description}
              </p>
              <div className="mt-8 flex items-center gap-2 font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Selengkapnya <ChevronRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Fleet = () => {
  const ships = [
    {
      name: "Nusantara Explorer",
      type: "Container Ship",
      capacity: "15,000 TEU",
      image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Semarang Pride",
      type: "Bulk Carrier",
      capacity: "80,000 DWT",
      image: "https://images.unsplash.com/photo-1516216628859-9bccecab13ca?q=80&w=2069&auto=format&fit=crop"
    },
    {
      name: "Oceanic Titan",
      type: "Oil Tanker",
      capacity: "120,000 DWT",
      image: "https://images.unsplash.com/photo-1544441893-675973e31d85?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="fleet" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold font-bold tracking-widest uppercase text-sm">Armada Kami</span>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mt-4">Kekuatan di Lautan</h2>
          </div>
          <button className="text-navy font-bold uppercase tracking-widest border-b-2 border-gold pb-2 hover:text-gold transition-colors">
            Lihat Semua Armada
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {ships.map((ship, index) => (
            <motion.div
              key={ship.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-xl"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={ship.image} 
                  alt={ship.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-gold text-xs font-bold uppercase tracking-widest mb-2 block">
                  {ship.type}
                </span>
                <h3 className="text-white text-2xl font-serif mb-4">{ship.name}</h3>
                <div className="flex justify-between items-center border-t border-white/20 pt-4">
                  <span className="text-white/60 text-sm italic">Kapasitas: {ship.capacity}</span>
                  <div className="bg-gold text-navy p-2 rounded-full transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-navy rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 md:p-20 text-white">
            <span className="text-gold font-bold tracking-widest uppercase text-sm">Hubungi Kami</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-10">Mari Berdiskusi Tentang Kebutuhan Anda</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-white/10 p-4 rounded-xl">
                  <MapPin className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-1">Kantor Pusat Semarang</h5>
                  <p className="text-white/60">Jl. Pemuda No. 123, Kota Semarang, Jawa Tengah 50132</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-white/10 p-4 rounded-xl">
                  <Phone className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-1">Telepon</h5>
                  <p className="text-white/60">+62 (24) 1234 5678</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-white/10 p-4 rounded-xl">
                  <Mail className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-1">Email</h5>
                  <p className="text-white/60">info@samuderanusantara.co.id</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-white p-12 md:p-20">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-navy/60">Nama Lengkap</label>
                  <input type="text" className="w-full border-b border-navy/20 py-3 focus:border-gold outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-navy/60">Email</label>
                  <input type="email" className="w-full border-b border-navy/20 py-3 focus:border-gold outline-none transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-navy/60">Subjek</label>
                <select className="w-full border-b border-navy/20 py-3 focus:border-gold outline-none transition-colors bg-transparent">
                  <option>Layanan Ocean Freight</option>
                  <option>Chartering Kapal</option>
                  <option>Kerjasama Logistik</option>
                  <option>Lainnya</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-navy/60">Pesan</label>
                <textarea className="w-full border-b border-navy/20 py-3 focus:border-gold outline-none transition-colors min-h-[120px]" placeholder="Bagaimana kami bisa membantu Anda?" />
              </div>
              <button className="w-full bg-navy text-white py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-navy/90 transition-all shadow-lg">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Anchor className="text-gold w-8 h-8" />
              <span className="text-2xl font-serif font-bold tracking-wider">
                SAMUDERA <span className="text-gold">NUSANTARA</span>
              </span>
            </div>
            <p className="text-white/60 leading-relaxed">
              Pemimpin logistik maritim terpercaya di Indonesia, menghubungkan bisnis Anda ke pasar global dengan keunggulan operasional.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-8 text-gold">Tautan Cepat</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#home" className="hover:text-gold transition-colors">Beranda</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">Tentang Kami</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Layanan</a></li>
              <li><a href="#fleet" className="hover:text-gold transition-colors">Armada</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-8 text-gold">Layanan</h4>
            <ul className="space-y-4 text-white/60">
              <li>Ocean Freight</li>
              <li>Logistik Terpadu</li>
              <li>Manajemen Armada</li>
              <li>Chartering Kapal</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-8 text-gold">Newsletter</h4>
            <p className="text-white/60 mb-6">Dapatkan berita terbaru tentang industri maritim.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email Anda" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 outline-none focus:border-gold flex-1" />
              <button className="bg-gold text-navy p-2 rounded-lg hover:bg-gold-light transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm">
          <p>© 2026 PT Samudera Nusantara. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Presentation = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      title: "Visi Strategis",
      content: "Menjadi tulang punggung logistik maritim Indonesia dengan standar global.",
      bg: "bg-navy"
    },
    {
      title: "Keunggulan Operasional",
      content: "Efisiensi rute dan ketepatan waktu pengiriman hingga 99.8%.",
      bg: "bg-gold"
    },
    {
      title: "Keberlanjutan",
      content: "Berkomitmen pada operasional ramah lingkungan dan teknologi hijau.",
      bg: "bg-navy"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-widest uppercase text-sm">Company Pitch</span>
          <h2 className="text-4xl font-serif text-navy mt-4">Presentasi Perusahaan</h2>
        </div>

        <div className="relative aspect-video bg-navy rounded-[2rem] overflow-hidden shadow-2xl flex items-center justify-center p-12 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <h3 className={`text-5xl font-serif mb-8 ${slides[activeSlide].bg === 'bg-gold' ? 'text-navy' : 'text-gold'}`}>
                {slides[activeSlide].title}
              </h3>
              <p className={`text-2xl leading-relaxed ${slides[activeSlide].bg === 'bg-gold' ? 'text-navy/80' : 'text-white/80'}`}>
                "{slides[activeSlide].content}"
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Slide Controls */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${activeSlide === index ? 'bg-gold w-10' : 'bg-white/30'}`}
              />
            ))}
          </div>
          
          <button 
            onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
            className="absolute right-10 top-1/2 -translate-y-1/2 text-white/30 hover:text-gold transition-colors"
          >
            <ArrowRight className="w-10 h-10" />
          </button>
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="font-sans selection:bg-gold selection:text-navy">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Presentation />
      <Fleet />
      <Contact />
      <Footer />
      
      {/* Custom Animations Styles */}
      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate ease-in-out;
        }
      `}</style>
    </div>
  );
}
