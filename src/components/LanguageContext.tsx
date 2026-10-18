import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ur';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    name: 'Muhammad Zahid',
    brand: 'Ilm o Roshni',
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    services: 'Services',
    contact: 'Contact',
    getInTouch: 'Get in Touch',
    heroHeadline: 'Muhammad Zahid',
    heroSubheadline: 'Cross-Platform Software Developer & Precision Editorial Designer',
    heroTagline: 'Crafting scalable cloud utilities, modern web applications, and international-standard Urdu/English editorial and book typography.',
    viewProjects: 'View Featured Projects',
    contactMe: 'Contact Me',
    highlightsBadge: 'Open for High-Impact Software & Editorial Projects',
    aboutNarrative: 'Professional narrative highlighting the intersection of technical automation and graphic arts: Development background in cross-platform tools, cloud APIs, and automation pipelines. Editorial design expertise in complex multi-volume book layouts, Nastaleeq typography, and print pre-press.',
    metricWebApps: 'Production Web Apps & Cloud Utilities',
    metricBooks: 'Books, Editorial Layouts & Covers Designed',
    metricOCR: 'Automated Document & OCR Pipelines',
    featuredProjects: 'Featured Projects',
    liveDemo: 'Live Demo',
    projectDetails: 'Project Details',
    skillsHeader: 'Skills & Technologies',
    skillsWeb: 'Web & Software',
    skillsCloud: 'Backend & Cloud Services',
    skillsDesign: 'Editorial & Visual Design',
    servicesHeader: 'Services Offered',
    serviceCloud: 'Custom Cloud Utilities & API Integrations',
    serviceEditorial: 'Editorial Layout, Book Typography & Cover Design',
    serviceWeb: 'Web Application & Frontend Development',
    serviceAutomation: 'Document Digitization & Process Automation',
    contactHeader: 'Contact & Compliance',
    formName: 'Name',
    formEmail: 'Email',
    formMessage: 'Message',
    formSubmit: 'Send Message',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    copyright: '© 2026 Muhammad Zahid / Ilm o Roshni. All rights reserved.',
  },
  ur: {
    name: 'محمد زاہد',
    brand: 'علم و روشنی',
    about: 'تعارف',
    projects: 'پروجیکٹس',
    skills: 'مہارتیں',
    services: 'خدمات',
    contact: 'رابطہ',
    getInTouch: 'رابطہ کریں',
    heroHeadline: 'محمد زاہد',
    heroSubheadline: 'کراس پلیٹ فارم سافٹ ویئر ڈویلپر اور ایڈیٹوریل ڈیزائنر',
    heroTagline: 'اسکیل ایبل کلاؤڈ یوٹیلیٹیز، جدید ویب ایپلی کیشنز، اور بین الاقوامی معیار کی اردو/انگریزی ایڈیٹوریل اور کتابی خطاطی کی تخلیق۔',
    viewProjects: 'نمایاں پروجیکٹس دیکھیں',
    contactMe: 'رابطہ کریں',
    highlightsBadge: 'اعلیٰ معیار کے سافٹ ویئر اور ایڈیٹوریل پروجیکٹس کے لیے دستیاب',
    aboutNarrative: 'تکنیکی آٹومیشن اور گرافک آرٹس کے ملاپ پر مبنی پیشہ ورانہ سفر: کراس پلیٹ فارم ٹولز، کلاؤڈ APIs، اور آٹومیشن پائپ لائنز میں ڈویلپمنٹ کا تجربہ۔ پیچیدہ کثیر جلد کتابی لے آؤٹ، نستعلیق ٹائپوگرافی، اور پرنٹ پری پریس میں ایڈیٹوریل ڈیزائن کی مہارت۔',
    metricWebApps: 'پروڈکشن ویب ایپس اور کلاؤڈ یوٹیلیٹیز',
    metricBooks: 'ڈیزائن کردہ کتابیں اور ایڈیٹوریل لے آؤٹ',
    metricOCR: 'آٹومیٹڈ دستاویز اور OCR پائپ لائنز',
    featuredProjects: 'نمایاں پروجیکٹس',
    liveDemo: 'لائیو ڈیمو',
    projectDetails: 'پروجیکٹ کی تفصیلات',
    skillsHeader: 'مہارتیں اور ٹیکنالوجیز',
    skillsWeb: 'ویب اور سافٹ ویئر',
    skillsCloud: 'بیک اینڈ اور کلاؤڈ سروسز',
    skillsDesign: 'ایڈیٹوریل اور بصری ڈیزائن',
    servicesHeader: 'فراہم کردہ خدمات',
    serviceCloud: 'کسٹم کلاؤڈ یوٹیلیٹیز اور API انٹیگریشن',
    serviceEditorial: 'ایڈیٹوریل لے آؤٹ، بک ٹائپوگرافی اور کور ڈیزائن',
    serviceWeb: 'ویب ایپلی کیشن اور فرنٹ اینڈ ڈویلپمنٹ',
    serviceAutomation: 'دستاویز کی ڈیجیٹلائزیشن اور آٹومیشن',
    contactHeader: 'رابطہ اور تعمیل',
    formName: 'نام',
    formEmail: 'ای میل',
    formMessage: 'پیغام',
    formSubmit: 'پیغام بھیجیں',
    privacy: 'پرائیسی پالیسی',
    terms: 'شرائط و ضوابط',
    copyright: '© 2026 محمد زاہد / علم و روشنی۔ جملہ حقوق محفوظ ہیں۔',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => translations[language][key] || key;
  const dir = language === 'ur' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [dir, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
