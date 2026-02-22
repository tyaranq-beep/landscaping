/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  ArrowRight, 
  Instagram, 
  Menu, 
  X, 
  ChevronDown, 
  MapPin, 
  Phone, 
  Mail,
  Trees,
  Fence,
  Lamp,
  Compass
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "py-4 bg-black/80 backdrop-blur-md border-b border-white/5" : "py-8 bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <span className="font-serif text-2xl tracking-[0.2em] font-light">AETHER</span>
          <span className="text-[10px] tracking-[0.4em] opacity-50 mt-1 uppercase">Exterior</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-12">
          {["Philosophy", "Services", "Portfolio", "Process", "Contact"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-xs tracking-[0.2em] uppercase font-light hover:text-[#c5a358] transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-black border-b border-white/10 p-8 flex flex-col gap-6 md:hidden"
        >
          {["Philosophy", "Services", "Portfolio", "Process", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-lg font-light tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558905619-17153ad2739b?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Garden Design"
          className="w-full h-full object-cover brightness-[0.6]"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 z-10" />

      <motion.div 
        style={{ opacity }}
        className="relative z-20 text-center px-6 max-w-4xl"
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-serif italic text-xl md:text-2xl text-[#c5a358] mb-6 tracking-wide"
        >
          Crafting Timeless Landscapes
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="font-serif text-5xl md:text-8xl font-light leading-tight mb-8 tracking-tight"
        >
          空間に、品格を。<br />
          庭に、物語を。
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <button className="px-10 py-4 bg-white text-black rounded-full text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#c5a358] hover:text-white transition-all duration-500 group flex items-center gap-2">
            View Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-10 py-4 border border-white/30 rounded-full text-sm tracking-[0.2em] uppercase font-light hover:bg-white/10 transition-all duration-500">
            Our Story
          </button>
        </motion.div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 opacity-50"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

const SectionHeading = ({ title, subtitle, light = false }: { title: string, subtitle: string, light?: boolean }) => (
  <div className="mb-20">
    <motion.p 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-xs tracking-[0.4em] uppercase mb-4 ${light ? "text-white/50" : "text-[#c5a358]"}`}
    >
      {subtitle}
    </motion.p>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className={`font-serif text-4xl md:text-6xl font-light ${light ? "text-white" : "text-white"}`}
    >
      {title}
    </motion.h2>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: <Trees className="text-[#c5a358]" size={32} />,
      title: "Landscaping",
      desc: "四季の移ろいを感じる、洗練された植栽計画。",
      img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Fence className="text-[#c5a358]" size={32} />,
      title: "Exterior Design",
      desc: "建築と調和し、プライバシーを守る美しい外構。",
      img: "https://images.unsplash.com/photo-1590059393160-5f212879685b?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Lamp className="text-[#c5a358]" size={32} />,
      title: "Lighting",
      desc: "夜の静寂を彩る、ドラマチックな光の演出。",
      img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Compass className="text-[#c5a358]" size={32} />,
      title: "Consulting",
      desc: "ライフスタイルに寄り添う、トータルコーディネート。",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-32 px-6 max-w-7xl mx-auto">
      <SectionHeading title="美しさと機能の融合" subtitle="Our Services" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl aspect-[3/4] glass"
          >
            <div className="absolute inset-0 z-0 scale-110 group-hover:scale-100 transition-transform duration-1000">
              <img src={service.img} alt={service.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
            
            <div className="relative z-20 h-full p-8 flex flex-col justify-end">
              <div className="mb-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="font-serif text-2xl mb-3 tracking-wide">{service.title}</h3>
              <p className="text-sm text-white/60 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    { title: "Minimalist Zen Garden", category: "Residential", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop" },
    { title: "Urban Terrace Oasis", category: "Commercial", img: "https://images.unsplash.com/photo-1534430480872-3498386e7a56?q=80&w=1200&auto=format&fit=crop" },
    { title: "Modern Stone Pathway", category: "Exterior", img: "https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=1200&auto=format&fit=crop" },
  ];

  return (
    <section id="portfolio" className="py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="記憶に残る風景" subtitle="Portfolio" light />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-sm aspect-[4/5] mb-6">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#c5a358] mb-2">{project.category}</p>
              <h3 className="font-serif text-2xl font-light tracking-wide group-hover:text-[#c5a358] transition-colors">{project.title}</h3>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="inline-flex items-center gap-4 text-xs tracking-[0.4em] uppercase font-light border-b border-white/20 pb-2 hover:border-[#c5a358] hover:text-[#c5a358] transition-all">
            View All Projects <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <SectionHeading title="理想を形にする第一歩" subtitle="Contact Us" />
          <p className="text-white/60 font-light leading-relaxed mb-12 max-w-md">
            お客様の想いを伺い、最適なプランをご提案いたします。
            些細なことでもお気軽にご相談ください。
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-[#c5a358]" />
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase text-white/40 mb-1">Address</p>
                <p className="font-light">東京都港区南青山 5-10-1</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0">
                <Phone size={20} className="text-[#c5a358]" />
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase text-white/40 mb-1">Phone</p>
                <p className="font-light">03-1234-5678</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0">
                <Mail size={20} className="text-[#c5a358]" />
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase text-white/40 mb-1">Email</p>
                <p className="font-light">info@aether-exterior.jp</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-10 md:p-16 rounded-3xl"
        >
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] tracking-widest uppercase text-white/50">Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/10 py-2 focus:border-[#c5a358] outline-none transition-colors font-light" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] tracking-widest uppercase text-white/50">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-white/10 py-2 focus:border-[#c5a358] outline-none transition-colors font-light" placeholder="email@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] tracking-widest uppercase text-white/50">Subject</label>
              <select className="w-full bg-transparent border-b border-white/10 py-2 focus:border-[#c5a358] outline-none transition-colors font-light appearance-none">
                <option className="bg-black">施工のご相談</option>
                <option className="bg-black">資料請求</option>
                <option className="bg-black">その他</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] tracking-widest uppercase text-white/50">Message</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-white/10 py-2 focus:border-[#c5a358] outline-none transition-colors font-light resize-none" placeholder="How can we help you?"></textarea>
            </div>
            <button className="w-full py-5 bg-[#c5a358] text-white rounded-full text-xs tracking-[0.4em] uppercase font-medium hover:bg-[#b08e40] transition-all duration-500">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl tracking-[0.2em] font-light">AETHER</span>
            <span className="text-[8px] tracking-[0.4em] opacity-50 mt-1 uppercase">Exterior</span>
          </div>
          <p className="text-[10px] text-white/30 tracking-widest uppercase">© 2024 AETHER EXTERIOR DESIGN. ALL RIGHTS RESERVED.</p>
        </div>

        <div className="flex gap-8">
          <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#c5a358] hover:text-[#c5a358] transition-all">
            <Instagram size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#c5a358] hover:text-[#c5a358] transition-all">
            <Mail size={18} />
          </a>
        </div>

        <div className="flex gap-12">
          {["Privacy", "Terms", "Sitemap"].map(item => (
            <a key={item} href="#" className="text-[10px] tracking-widest uppercase text-white/40 hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-[#c5a358] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Philosophy Section */}
        <section id="philosophy" className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading title="自然と建築の対話" subtitle="Philosophy" />
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="font-serif text-2xl md:text-3xl leading-relaxed font-light italic text-white/80 mb-12"
            >
              "私たちは、単なる外構を作るのではありません。<br />
              そこに住まう人の人生を豊かに彩る、<br />
              唯一無二の風景を創造します。"
            </motion.p>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              className="h-px bg-[#c5a358] mx-auto"
            />
          </div>
        </section>

        <Services />
        <Portfolio />
        
        {/* Process Section */}
        <section id="process" className="py-32 px-6 bg-white text-black">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <p className="text-xs tracking-[0.4em] uppercase mb-4 text-[#c5a358]">The Journey</p>
              <h2 className="font-serif text-4xl md:text-6xl font-light">完成までの歩み</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {[
                { step: "01", title: "Consultation", desc: "お客様の理想やライフスタイルを深く伺います。" },
                { step: "02", title: "Design", desc: "3Dパースを用い、空間の広がりを具体化します。" },
                { step: "03", title: "Construction", desc: "熟練の職人が、細部まで妥協なく施工します。" },
                { step: "04", title: "After Care", desc: "完成後も、庭の成長と共に歩み続けます。" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-6"
                >
                  <span className="font-serif text-5xl font-light text-[#c5a358]/20 block">{item.step}</span>
                  <h3 className="font-serif text-2xl tracking-wide">{item.title}</h3>
                  <p className="text-sm text-black/60 font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
