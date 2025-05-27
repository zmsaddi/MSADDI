import { useState } from 'react';
import '../App.css';

function HomePage({ language }) {
  const content = {
    ar: {
      title: "مؤسسة مسدي",
      subtitle: "لقطع الليزر",
      services: "خدماتنا",
      servicesDesc: "نساعد عملائنا في إنتاج قطع معدنية متميزة من خلال تقديم خبرة متخصصة في الصناعة، وحلول فعالة من حيث التكلفة، وتصنيع قوي، مع راحة البال في كل مشروع.",
      contact: "اتصل بنا",
      phone: "رقم الهاتف",
      email: "البريد الإلكتروني",
      address: "العنوان",
      contactInfo: "معلومات الاتصال",
      machineTitle: "آلة قطع الليزر CNC",
      workingSpace: "مساحة العمل: 600×250 سم",
      sheetMetalService: "خدمات تصنيع الصفائح المعدنية",
      location: "حلب - الشقيف الصناعية",
      locationCode: "7539+FHC، حلب، سوريا",
      whatsapp: "تواصل عبر واتساب",
      availableSizes: "القياسات المتوفرة",
      features: "مميزات خدماتنا",
      feature1: "قص جميع أنواع المعادن بتقنية الليزر عالية الدقة",
      feature2: "متوفر صفائح حديد وستانلس ستيل بجميع السماكات",
      feature3: "توافر ألواح ستانلس ستيل بأسعار منافسة بقياسات حسب الرغبة",
      feature4: "تنفيذ التصاميم المعقدة بدقة متناهية",
      feature5: "سرعة في التنفيذ وجودة عالية في الإنتاج",
      promo1: "30 دقيقة ليزر مجانية للزبائن الجدد",
      promo2: "خدمة توصيل مجانية ضمن مدينة حلب",
      contactUs: "تواصل معنا الآن"
    },
    en: {
      title: "MSADDI",
      subtitle: "LASER CUTTING",
      services: "Our Services",
      servicesDesc: "We help clients produce premium metal parts by providing industry-specific expertise, cost-effective solutions, a powerful manufacturing, and peace of mind with every project.",
      contact: "Contact Us",
      phone: "Phone Number",
      email: "Email",
      address: "Address",
      contactInfo: "Contact Information",
      machineTitle: "CNC Laser Cutting Machine",
      workingSpace: "Working Space: 600×250 cm",
      sheetMetalService: "Sheet Metal Fabrication Services",
      location: "Aleppo - Al-Shqaif Industrial Zone",
      locationCode: "7539+FHC, Aleppo, Syria",
      whatsapp: "Contact via WhatsApp",
      availableSizes: "Available Sizes",
      features: "Our Service Features",
      feature1: "Cutting all types of metals with high-precision laser technology",
      feature2: "Iron and stainless steel sheets available in all thicknesses",
      feature3: "Stainless steel panels available at competitive prices with custom dimensions",
      feature4: "Execution of complex designs with extreme precision",
      feature5: "Fast execution and high quality production",
      promo1: "30 minutes free laser cutting for new customers",
      promo2: "Free delivery service within Aleppo city",
      contactUs: "Contact Us Now"
    }
  };

  const t = content[language];
  
  // القياسات المتوفرة
  const availableSizes = [
    "150×75 سم", "125×250 سم", "125×125 سم", 
    "100×200 سم", "100×100 سم", "100×50 سم",
    "150×300 سم", "150×150 سم"
  ];
  
  const availableSizesEn = [
    "150×75 cm", "125×250 cm", "125×125 cm", 
    "100×200 cm", "100×100 cm", "100×50 cm",
    "150×300 cm", "150×150 cm"
  ];
  
  // رابط خرائط جوجل للعنوان
  const getGoogleMapsUrl = (locationCode) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationCode)}`;
  };
  
  // رابط واتساب
  const getWhatsAppUrl = (phoneNumber) => {
    // إزالة أي رموز غير رقمية من رقم الهاتف
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    return `https://wa.me/${cleanNumber}`;
  };

  return (
    <div className="page-container">
      {/* قسم العروض الترويجية */}
      <div className="promo-banner">
        <div className="promo-item">
          <div className="promo-icon">🎁</div>
          <div className="promo-text">{t.promo1}</div>
        </div>
        <div className="promo-item">
          <div className="promo-icon">🚚</div>
          <div className="promo-text">{t.promo2}</div>
        </div>
      </div>
      
      <div className="hero-section">
        <div className="logo-container">
          <img src="/images/logo.jpg" alt={t.title} className="logo-image" />
        </div>
        <div className="hero-content">
          <h1>{t.title}</h1>
          <h2>{t.subtitle}</h2>
          <a 
            href={getWhatsAppUrl("966944244604")} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-button"
          >
            {t.contactUs}
          </a>
        </div>
      </div>

      <div className="features-section">
        <h2>{t.features}</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">✓</div>
            <p>{t.feature1}</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">✓</div>
            <p>{t.feature2}</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">✓</div>
            <p>{t.feature3}</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">✓</div>
            <p>{t.feature4}</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">✓</div>
            <p>{t.feature5}</p>
          </div>
        </div>
      </div>

      <div className="machine-section">
        <h2>{t.services}</h2>
        <div className="services-description">
          <p>{t.servicesDesc}</p>
        </div>
        <div className="machine-container">
          <img src="/images/machine.png" alt="Industrial Machine" className="machine-image" />
          <div className="machine-info">
            <div className="info-box">
              <p>{t.machineTitle}</p>
              <p>{t.workingSpace}</p>
            </div>
            <div className="info-box">
              <p>{t.sheetMetalService}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="sizes-section">
        <h2>{t.availableSizes}</h2>
        <div className="sizes-grid">
          {language === 'ar' 
            ? availableSizes.map((size, index) => (
                <div key={index} className="size-item">{size}</div>
              ))
            : availableSizesEn.map((size, index) => (
                <div key={index} className="size-item">{size}</div>
              ))
          }
        </div>
      </div>

      <div className="contact-section">
        <h2>{t.contactInfo}</h2>
        <div className="contact-info">
          <div className="contact-item">
            <h3>{t.phone}</h3>
            <p dir="ltr">+966 944244604</p>
            <a 
              href={getWhatsAppUrl("966944244604")} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="whatsapp-button"
            >
              <span className="whatsapp-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20">
                  <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
              </span>
              {t.whatsapp}
            </a>
          </div>
          <div className="contact-item">
            <h3>{t.email}</h3>
            <p>info@msaddi.com</p>
          </div>
          <div className="contact-item">
            <h3>{t.address}</h3>
            <p>{t.location}</p>
            <a 
              href={getGoogleMapsUrl(t.locationCode)} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="map-link"
            >
              {t.locationCode}
            </a>
          </div>
        </div>
      </div>
      
      {/* زر واتساب ثابت */}
      <a 
        href={getWhatsAppUrl("966944244604")} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-whatsapp-button"
        aria-label={t.whatsapp}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24">
          <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      </a>
    </div>
  );
}

export default HomePage;
