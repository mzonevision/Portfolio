import React from 'react';
import { useLanguage } from './LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Mail, ExternalLink, Cpu, BookOpen, Layers, Monitor, ChevronRight, Linkedin } from 'lucide-react';
import { SiFacebook, SiInstagram, SiPinterest, SiBehance } from 'react-icons/si';

// --- Components ---

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);

  const links = [
    { name: t('about'), href: '#about' },
    { name: t('projects'), href: '#projects' },
    { name: t('skills'), href: '#skills' },
    { name: t('services'), href: '#services' },
    { name: t('contact'), href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand */}
        <a href="#" className="text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0">
          {language === 'en' ? 'Muhammad Zahid' : 'علم و روشنی'}
        </a>

        {/* Zone 2: Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#9ca3af] hover:text-white transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: Controls */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')}
            className="text-xs font-bold tracking-widest uppercase px-2 py-1 border border-[#262626] rounded hover:bg-[#161616] transition-colors"
          >
            {language === 'en' ? 'اردو' : 'EN'}
          </button>
          <a
            href="#contact"
            className="hidden sm:block px-4 py-2 text-xs font-semibold bg-white text-black rounded hover:bg-[#ededed] transition-colors whitespace-nowrap"
          >
            {t('getInTouch')}
          </a>
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#0a0a0a] border-b border-[#262626] px-6 py-8 flex flex-col gap-6"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-[#9ca3af] hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="px-6 py-3 text-center font-semibold bg-white text-black rounded hover:bg-[#ededed] transition-colors"
            >
              {t('getInTouch')}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  const { t, language } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: language === 'ur' ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#161616] border border-[#262626] mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 rtl:ml-2 rtl:mr-0" />
            <span className="text-[11px] font-medium text-[#9ca3af] uppercase tracking-wider">
              {t('highlightsBadge')}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 text-wrap-balance">
            {t('heroHeadline')}
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-blue-400 mb-6">
            {t('heroSubheadline')}
          </h2>
          <p className="text-lg text-[#9ca3af] mb-10 max-w-xl leading-relaxed">
            {t('heroTagline')}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-4 md:px-8 md:py-4 bg-white text-black font-semibold rounded hover:bg-[#ededed] transition-all flex items-center gap-2 group whitespace-nowrap text-sm md:text-base"
            >
              {t('viewProjects')}
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </a>
            <a
              href="#contact"
              className="px-6 py-4 md:px-8 md:py-4 bg-[#161616] text-white border border-[#262626] font-semibold rounded hover:bg-[#262626] transition-all text-sm md:text-base whitespace-nowrap"
            >
              {t('contactMe')}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-video lg:aspect-square bg-[#0a0a0a] rounded-2xl border border-[#262626] overflow-hidden group shadow-2xl"
        >
           {/* Fallback pattern for hero */}
           <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a] flex items-center justify-center">
              <div className="grid grid-cols-6 gap-4 opacity-10">
                 {Array.from({ length: 36 }).map((_, i) => (
                   <div key={i} className="w-8 h-8 border border-white/20 rounded-sm" />
                 ))}
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                 <div className="w-24 h-24 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                    <Monitor size={48} className="text-blue-500" />
                 </div>
                 <div className="text-white/20 font-bold text-4xl uppercase tracking-[0.2em]">IZ</div>
              </div>
           </div>
        </motion.div>
      </div>

      {/* Metrics Row */}
      <div className="max-w-7xl mx-auto w-full mt-20 border-t border-[#262626] pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { label: t('metricWebApps'), value: '25+', icon: Cpu },
             { label: t('metricBooks'), value: '150+', icon: BookOpen },
             { label: t('metricOCR'), value: '10K+', icon: Layers },
           ].map((metric, i) => (
             <div key={i} className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-blue-500 mb-1">
                   <metric.icon size={16} />
                   <span className="text-2xl font-bold text-white tabular-nums">{metric.value}</span>
                </div>
                <span className="text-xs text-[#9ca3af] font-medium uppercase tracking-wider">{metric.label}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">
            01. {t('about')}
          </h2>
          <p className="text-3xl md:text-4xl font-semibold text-white leading-tight mb-8">
            The intersection of technical precision and artistic heritage.
          </p>
          <div className="h-px w-20 bg-blue-500 mb-12" />
        </div>
        
        <div className="space-y-8 text-xl text-[#9ca3af] leading-relaxed">
          <p>{t('aboutNarrative')}</p>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const { t, language } = useLanguage();

  const projects = [
    {
      title: 'MZ Drive Utilities Hub',
      url: 'https://tools.ilmoroshni.com',
      tagline: 'Unified Google Drive cloud utility portal featuring GIS OAuth 2.0.',
      features: ['Multipart file uploader (100MB)', 'FFmpeg cloud video-to-MP3 (D-VAC)'],
      tech: ['Python', 'FastAPI', 'Docker', 'Google Drive API'],
      icon: Cpu,
    },
    {
      title: 'Nopist',
      tagline: 'Cross-platform real-time synchronized clipboard manager.',
      features: ['Firestore synchronization', 'Folder grouping', 'End-to-end state management'],
      tech: ['Flutter', 'Dart', 'Firebase'],
      icon: Monitor,
    },
    {
      title: 'Auto Urdu PDF OCR',
      tagline: 'High-volume scanned document automation pipeline.',
      features: ['High-DPI splitting', 'Google Drive REST OCR', 'Ordered book merging'],
      tech: ['Python', 'Poppler', 'Google Docs API'],
      icon: Layers,
    },
    {
      title: 'Ilm o Roshni Editorial',
      tagline: 'Fine-art typography and luxury book covers.',
      features: ['Urdu Nastaleeq grid layouts', 'Multi-lingual typography', 'Print-ready prepress'],
      tech: ['InDesign', 'Illustrator', 'Photoshop'],
      icon: BookOpen,
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">
            02. {t('projects')}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">{t('featuredProjects')}</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-[#0a0a0a] border border-[#262626] rounded-2xl overflow-hidden hover:border-[#333] transition-all flex flex-col h-full"
            >
              <div className="aspect-video relative overflow-hidden bg-[#161616]">
                 <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon size={48} className="text-[#333] group-hover:text-blue-500/50 transition-colors" />
                 </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-xs text-[#555] mb-4">
                  {project.tech.map((tag, j) => (
                    <React.Fragment key={j}>
                      <span>{tag}</span>
                      {j < project.tech.length - 1 && <span aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                <p className="text-[#9ca3af] mb-6 text-sm">{project.tagline}</p>
                
                <ul className="space-y-2 mb-8 flex-grow">
                  {project.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-[#ededed]">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mt-1.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-4 mt-auto">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest hover:text-blue-400 transition-colors"
                    >
                      {t('liveDemo')} <ExternalLink size={14} />
                    </a>
                  ) : (
                    <button className="text-xs font-bold text-[#555] uppercase tracking-widest cursor-default">
                       {t('projectDetails')}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const { t } = useLanguage();
  
  const categories = [
    {
      title: t('skillsWeb'),
      skills: ['Python (FastAPI)', 'Flutter & Dart', 'JavaScript (ES6+)', 'HTML5/CSS3', 'Tailwind CSS'],
    },
    {
      title: t('skillsCloud'),
      skills: ['Firebase (Auth, Firestore)', 'REST APIs', 'Google Cloud Console', 'Workspace APIs', 'Docker', 'Vercel'],
    },
    {
      title: t('skillsDesign'),
      skills: ['Adobe InDesign', 'Adobe Illustrator', 'Adobe Photoshop', 'Urdu/Arabic Calligraphy'],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">
            03. {t('skills')}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">{t('skillsHeader')}</h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {categories.map((cat, i) => (
            <div key={i} className="flex flex-col gap-6">
              <h4 className="text-lg font-bold text-[#ededed] border-b border-[#262626] pb-4">
                {cat.title}
              </h4>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {cat.skills.map((skill, j) => (
                  <span key={j} className="text-sm text-[#9ca3af] hover:text-white transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const { t } = useLanguage();
  const services = [
    { title: t('serviceCloud'), icon: Cpu },
    { title: t('serviceEditorial'), icon: BookOpen },
    { title: t('serviceWeb'), icon: Monitor },
    { title: t('serviceAutomation'), icon: Layers },
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">
            04. {t('services')}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">{t('servicesHeader')}</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="p-8 bg-[#0a0a0a] border border-[#262626] rounded-xl hover:bg-[#161616] transition-all flex flex-col gap-4 group"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-black transition-all">
                <service.icon size={24} />
              </div>
              <p className="text-lg font-bold text-white">{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">
            05. {t('contact')}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">{t('getInTouch')}</h3>
          <p className="text-lg text-[#9ca3af] mb-12">
            Available for high-impact software development and editorial design projects worldwide.
          </p>
          
          <div className="flex flex-col gap-4">
            <a href="mailto:mzonevision@gmail.com" className="flex items-center gap-4 text-[#ededed] hover:text-blue-400 transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#161616] flex items-center justify-center">
                <Mail size={18} />
              </div>
              <span className="text-sm">mzonevision@gmail.com</span>
            </a>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
              {[
                { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-zahid-ayyub/', label: 'LinkedIn' },
                { icon: Github, href: 'https://github.com/m92zahid', label: 'GitHub' },
                { icon: SiBehance, href: 'https://www.behance.net/mzonevision', label: 'Behance' },
                { icon: SiFacebook, href: 'https://www.facebook.com/m92zahid', label: 'Facebook' },
                { icon: SiInstagram, href: 'https://www.instagram.com/m92zahid/', label: 'Instagram' },
                { icon: SiPinterest, href: 'https://www.pinterest.com/m92zahid/', label: 'Pinterest' },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-xs font-medium text-[#9ca3af] hover:text-white transition-colors"
                >
                  <social.icon size={16} />
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <form 
          action="mailto:mzonevision@gmail.com" 
          method="post" 
          encType="text/plain"
          className="bg-[#0a0a0a] border border-[#262626] p-8 rounded-2xl flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-widest text-[#555]">{t('formName')}</label>
            <input type="text" name="name" required className="bg-[#161616] border border-[#262626] rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-widest text-[#555]">{t('formEmail')}</label>
            <input type="email" name="email" required className="bg-[#161616] border border-[#262626] rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-widest text-[#555]">{t('formMessage')}</label>
            <textarea name="message" rows={4} required className="bg-[#161616] border border-[#262626] rounded-lg px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors resize-none" />
          </div>
          <button type="submit" className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-[#ededed] transition-colors">
            {t('formSubmit')}
          </button>
        </form>
      </div>
    </section>
  );
};

const Modal = ({ isOpen, onClose, title, content }: { isOpen: boolean, onClose: () => void, title: string, content: string }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-[#0a0a0a] border border-[#262626] rounded-2xl p-8 max-h-[80vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <button onClick={onClose} className="text-[#555] hover:text-white">
                <X size={24} />
              </button>
            </div>
            <div className="text-[#9ca3af] text-sm leading-relaxed whitespace-pre-wrap">
              {content}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Footer = () => {
  const { t } = useLanguage();
  const [modalType, setModalType] = React.useState<'privacy' | 'terms' | null>(null);

  const privacyContent = `Privacy Policy for Muhammad Zahid / Ilm o Roshni\n\nThis Privacy Policy describes how your personal information is collected, used, and shared when you visit ilmoroshni.com.\n\nPERSONAL INFORMATION WE COLLECT\nWe only collect the information you provide via the contact form (Name, Email, Message) to respond to your inquiries. We do not use cookies for tracking.\n\nHOW DO WE USE YOUR PERSONAL INFORMATION?\nWe use the information to communicate with you and provide services you request.\n\nSHARING YOUR PERSONAL INFORMATION\nWe do not share your personal information with third parties.`;

  const termsContent = `Terms of Service for Muhammad Zahid / Ilm o Roshni\n\nBy accessing ilmoroshni.com, you agree to these terms.\n\nINTELLECTUAL PROPERTY\nThe content on this website, including projects, designs, and code, is the property of Muhammad Zahid unless otherwise stated.\n\nLIMITATION OF LIABILITY\nMuhammad Zahid is not liable for any damages arising from the use of this website.`;

  return (
    <footer className="py-12 px-6 border-t border-[#262626]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <p className="text-sm text-[#555]">{t('copyright')}</p>
          <div className="flex items-center gap-4">
             {[Linkedin, Github, SiBehance, SiFacebook, SiInstagram].map((Icon, i) => (
               <Icon key={i} size={14} className="text-[#333] hover:text-[#555] transition-colors" />
             ))}
          </div>
        </div>
        <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-[#555]">
          <button onClick={() => setModalType('privacy')} className="hover:text-white transition-colors cursor-pointer">{t('privacy')}</button>
          <button onClick={() => setModalType('terms')} className="hover:text-white transition-colors cursor-pointer">{t('terms')}</button>
        </div>
      </div>

      <Modal 
        isOpen={modalType !== null} 
        onClose={() => setModalType(null)} 
        title={modalType === 'privacy' ? t('privacy') : t('terms')}
        content={modalType === 'privacy' ? privacyContent : termsContent}
      />
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-[#ededed] selection:bg-blue-500/30">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export { Hero, About, Projects, Skills, Services, Contact };
