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
    pageTitle: 'Muhammad Zahid | Software Developer & Editorial Designer',
    pageDescription: 'Portfolio of Muhammad Zahid: cloud software, automation tools, and Urdu and English editorial design.',
    brand: 'Ilm o Roshni',
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    services: 'Services',
    contact: 'Contact',
    getInTouch: 'Get in Touch',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
    navigation: 'Mobile navigation',
    contactForm: 'Contact form',
    heroHeadline: 'Muhammad Zahid',
    heroSubheadline: 'Cross-Platform Software Developer & Precision Editorial Designer',
    heroTagline: 'I build cloud utilities and modern apps, and design Urdu and English books from page layout through print-ready files.',
    viewProjects: 'View Featured Projects',
    contactMe: 'Contact Me',
    highlightsBadge: 'Open for High-Impact Software & Editorial Projects',
    aboutNarrative: 'I build cross-platform tools, cloud integrations, and automation workflows. I also design multilingual books, with a focus on Urdu Nastaleeq typesetting, complex page layouts, and print-ready production.',
    aboutHeadline: 'The intersection of technical precision and artistic heritage.',
    metricWebApps: 'Production Web Apps & Cloud Utilities',
    metricBooks: 'Books, Editorial Layouts & Covers Designed',
    metricOCR: 'Automated Document & OCR Pipelines',
    featuredProjects: 'Featured Projects',
    liveDemo: 'Live Demo',
    projectDetails: 'Project Details',
    projectOverview: 'Overview',
    projectRole: 'Selected capabilities',
    project1Tagline: 'A unified portal for practical Google Drive utilities, with OAuth 2.0 sign-in.',
    project1Feature1: 'Multipart uploads for files up to 100 MB',
    project1Feature2: 'Cloud video-to-audio conversion with FFmpeg',
    project2Tagline: 'A cross-platform clipboard manager that keeps content synchronized in real time.',
    project2Feature1: 'Clipboard synchronization with Firestore',
    project2Feature2: 'Organize saved content into folders',
    project2Feature3: 'Consistent state across devices',
    project3Tagline: 'A document workflow for converting scanned Urdu books into ordered, searchable text.',
    project3Feature1: 'High-resolution page splitting',
    project3Feature2: 'OCR through Google Drive APIs',
    project3Feature3: 'Merge processed pages in reading order',
    project4Tagline: 'Tazkia Book 4: Urdu Nastaleeq typesetting, full-color charts, and print-ready book pages.',
    project4Feature1: 'Urdu Nastaleeq typesetting and book layout',
    project4Feature2: 'Full-color charts and ornamental pages',
    project4Feature3: 'Cover design and print-ready production',
    bookSamplesIntro: 'Selected pages from Tazkia Book 4',
    sampleCover: 'Book cover',
    sampleOrnamentalChart: 'Ornamental family-tree chart',
    sampleColorChart: 'Full-color illustrated chart',
    sampleCertificate: 'Certificate page design',
    sampleNastaleeq: 'Nastaleeq interior typography',
    openFullSize: 'Open full-size image',
    contactPitch: 'Available for software development, cloud automation, and editorial design projects worldwide.',
    mailtoNotice: 'Selecting “Send Message” opens your email app with the message prepared. You can review it before sending.',
    mailtoSubject: 'Portfolio inquiry',
    closeDialog: 'Close dialog',
    privacyContent: 'Privacy information — Muhammad Zahid / Ilm o Roshni\n\nThis portfolio does not submit contact form data to a website server. Selecting “Send Message” prepares an email in your own email application. Your name, email address, and message are handled by that application and its provider when you choose to send.\n\nThe site loads its typefaces from Google Fonts, so your browser connects to Google to retrieve them. This implementation does not include an analytics or advertising tracker. If hosting or embedded services change, this notice should be updated to describe them.',
    termsContent: 'Website information\n\nThis portfolio presents selected software and editorial work for informational purposes. Project descriptions are summaries and may not represent every feature or current service status.\n\nProject names and third-party marks belong to their respective owners. Contact the owner before reusing portfolio content or artwork.',
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
    pageTitle: 'محمد زاہد | سافٹ ویئر ڈویلپر اور ایڈیٹوریل ڈیزائنر',
    pageDescription: 'محمد زاہد کا پورٹ فولیو: کلاؤڈ سافٹ ویئر، آٹومیشن ٹولز، اور اردو و انگریزی ایڈیٹوریل ڈیزائن۔',
    brand: 'علم و روشنی',
    about: 'تعارف',
    projects: 'پروجیکٹس',
    skills: 'مہارتیں',
    services: 'خدمات',
    contact: 'رابطہ',
    getInTouch: 'رابطہ کریں',
    openMenu: 'نیویگیشن مینو کھولیں',
    closeMenu: 'نیویگیشن مینو بند کریں',
    navigation: 'موبائل نیویگیشن',
    contactForm: 'رابطے کا فارم',
    heroHeadline: 'محمد زاہد',
    heroSubheadline: 'کراس پلیٹ فارم سافٹ ویئر ڈویلپر اور ایڈیٹوریل ڈیزائنر',
    heroTagline: 'میں کلاؤڈ ٹولز اور جدید ایپس بناتا ہوں، اور اردو و انگریزی کتابوں کی صفحہ بندی سے لے کر پرنٹ کے لیے تیار فائلیں تیار کرتا ہوں۔',
    viewProjects: 'نمایاں پروجیکٹس دیکھیں',
    contactMe: 'رابطہ کریں',
    highlightsBadge: 'اعلیٰ معیار کے سافٹ ویئر اور ایڈیٹوریل پروجیکٹس کے لیے دستیاب',
    aboutNarrative: 'میں کراس پلیٹ فارم ٹولز، کلاؤڈ انٹیگریشنز اور آٹومیشن ورک فلو بناتا ہوں۔ اس کے ساتھ کثیر لسانی کتابوں کا ڈیزائن بھی کرتا ہوں، خصوصاً اردو نستعلیق ٹائپ سیٹنگ، پیچیدہ صفحہ بندی اور پرنٹ کے لیے تیار فائلوں پر کام کرتا ہوں۔',
    aboutHeadline: 'تکنیکی مہارت اور فنّی روایت کا امتزاج۔',
    metricWebApps: 'پروڈکشن ویب ایپس اور کلاؤڈ یوٹیلیٹیز',
    metricBooks: 'ڈیزائن کردہ کتابیں اور ایڈیٹوریل لے آؤٹ',
    metricOCR: 'آٹومیٹڈ دستاویز اور OCR پائپ لائنز',
    featuredProjects: 'نمایاں پروجیکٹس',
    liveDemo: 'لائیو ڈیمو',
    projectDetails: 'پروجیکٹ کی تفصیلات',
    projectOverview: 'تعارف',
    projectRole: 'نمایاں خصوصیات',
    project1Tagline: 'گوگل ڈرائیو کی سہولیات کے لیے ایک متحد پورٹل، جس میں OAuth 2.0 سائن اِن شامل ہے۔',
    project1Feature1: '100 ایم بی تک فائلوں کی ملٹی پارٹ اپ لوڈنگ',
    project1Feature2: 'FFmpeg کے ذریعے کلاؤڈ ویڈیو سے آڈیو میں تبدیلی',
    project2Tagline: 'کراس پلیٹ فارم کلپ بورڈ مینیجر جو مواد کو حقیقی وقت میں ہم آہنگ رکھتا ہے۔',
    project2Feature1: 'Firestore کے ذریعے کلپ بورڈ ہم آہنگی',
    project2Feature2: 'محفوظ مواد کو فولڈرز میں ترتیب دیں',
    project2Feature3: 'مختلف ڈیوائسز پر یکساں حالت',
    project3Tagline: 'اسکین شدہ اردو کتابوں کو قابلِ تلاش متن میں بدلنے کا دستاویزی عمل۔',
    project3Feature1: 'اعلیٰ ریزولوشن صفحات کی تقسیم',
    project3Feature2: 'Google Drive APIs کے ذریعے OCR',
    project3Feature3: 'پروسس شدہ صفحات کو درست ترتیب میں جوڑنا',
    project4Tagline: 'تزکیہ کتاب 4: اردو نستعلیق ٹائپ سیٹنگ، رنگین چارٹس، اور پرنٹ کے لیے تیار صفحات۔',
    project4Feature1: 'اردو نستعلیق ٹائپ سیٹنگ اور کتابی لے آؤٹ',
    project4Feature2: 'رنگین چارٹس اور تزئینی صفحات',
    project4Feature3: 'سرورق ڈیزائن اور پرنٹ کے لیے تیار فائلیں',
    bookSamplesIntro: 'تزکیہ کتاب 4 کے منتخب صفحات',
    sampleCover: 'کتاب کا سرورق',
    sampleOrnamentalChart: 'تزئینی شجرہ چارٹ',
    sampleColorChart: 'رنگین تصویری چارٹ',
    sampleCertificate: 'سند کے صفحے کا ڈیزائن',
    sampleNastaleeq: 'نستعلیق اندرونی صفحہ بندی',
    openFullSize: 'مکمل سائز کی تصویر کھولیں',
    contactPitch: 'سافٹ ویئر، کلاؤڈ آٹومیشن، اور ایڈیٹوریل ڈیزائن کے منصوبوں کے لیے دنیا بھر میں دستیاب۔',
    mailtoNotice: '“پیغام بھیجیں” منتخب کرنے سے آپ کی ای میل ایپ میں پیغام تیار ہوگا۔ بھیجنے سے پہلے آپ اسے دیکھ سکتے ہیں۔',
    mailtoSubject: 'پورٹ فولیو کے بارے میں رابطہ',
    closeDialog: 'ڈائیلاگ بند کریں',
    privacyContent: 'رازداری کی معلومات — محمد زاہد / علم و روشنی\n\nیہ پورٹ فولیو رابطہ فارم کا ڈیٹا کسی ویب سرور کو نہیں بھیجتا۔ “پیغام بھیجیں” منتخب کرنے سے آپ کی ای میل ایپ میں پیغام تیار ہوتا ہے۔ جب آپ خود بھیجنے کا انتخاب کرتے ہیں تو نام، ای میل اور پیغام آپ کی ای میل ایپ اور اس کے فراہم کنندہ کے زیرِ عمل آتے ہیں۔\n\nویب سائٹ کے فونٹس Google Fonts سے لوڈ ہوتے ہیں، اس لیے انہیں حاصل کرنے کے لیے آپ کا براؤزر گوگل سے رابطہ کرتا ہے۔ موجودہ ورژن میں تجزیاتی یا اشتہاری ٹریکر شامل نہیں۔ ہوسٹنگ یا شامل کردہ خدمات بدلیں تو اس نوٹس کو اپ ڈیٹ کرنا چاہیے۔',
    termsContent: 'ویب سائٹ کی معلومات\n\nیہ پورٹ فولیو منتخب سافٹ ویئر اور ایڈیٹوریل کام معلوماتی مقصد کے لیے دکھاتا ہے۔ پروجیکٹ کی تفصیل خلاصہ ہے اور ضروری نہیں کہ ہر خصوصیت یا موجودہ سروس کی حالت ظاہر کرے۔\n\nپروجیکٹ کے نام اور تیسرے فریق کے نشانات ان کے مالکان کی ملکیت ہیں۔ پورٹ فولیو کے متن یا آرٹ ورک کو دوبارہ استعمال کرنے سے پہلے مالک سے رابطہ کریں۔',
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
  const [language, setLanguage] = useState<Language>(() => {
    try {
      return window.localStorage.getItem('portfolio-language') === 'ur' ? 'ur' : 'en';
    } catch {
      return 'en';
    }
  });

  const t = (key: string) => translations[language][key] || key;
  const dir = language === 'ur' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
    document.title = translations[language].pageTitle;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) description.content = translations[language].pageDescription;
    const socialDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (socialDescription) socialDescription.content = translations[language].pageDescription;
    try {
      window.localStorage.setItem('portfolio-language', language);
    } catch {
      // Language switching still works when storage is unavailable.
    }
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
