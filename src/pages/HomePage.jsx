import { useState } from 'react';
import '../App.css';

function HomePage({ language }) {
  const content = {
    ar: {
      title: "مؤسسة مسدي",
      subtitle: "للمقاولات والصيانة",
      welcome: "مرحباً بكم في موقعنا",
      services: "خدماتنا",
      contact: "اتصل بنا",
      phone: "رقم الهاتف",
      email: "البريد الإلكتروني",
      address: "العنوان",
      contactInfo: "معلومات الاتصال",
      machineTitle: "آلة قطع الليزر CNC",
      machineDesc: "تصنيع المعادن بدقة عالية",
      workingSpace: "مساحة العمل: 600×250 سم"
    },
    en: {
      title: "MSADDI Foundation",
      subtitle: "For Contracting and Maintenance",
      welcome: "Welcome to our website",
      services: "Our Services",
      contact: "Contact Us",
      phone: "Phone Number",
      email: "Email",
      address: "Address",
      contactInfo: "Contact Information",
      machineTitle: "CNC Laser Cutting Machine",
      machineDesc: "High Precision Metal Fabrication",
      workingSpace: "Working Space: 600×250 cm"
    }
  };

  const t = content[language];

  return (
    <div className="page-container">
      <div className="hero-section">
        <div className="logo-container">
          <img src="/images/logo.png" alt={t.title} className="logo-image" />
        </div>
        <div className="hero-content">
          <h1>{t.title}</h1>
          <h2>{t.subtitle}</h2>
          <p className="welcome-text">{t.welcome}</p>
        </div>
      </div>

      <div className="machine-section">
        <h2>{t.services}</h2>
        <div className="machine-container">
          <img src="/images/machine.png" alt="Industrial Machine" className="machine-image" />
          <div className="machine-info">
            <div className="info-box">
              <p>{t.machineTitle}</p>
              <p>{t.machineDesc}</p>
              <p>{t.workingSpace}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <h2>{t.contactInfo}</h2>
        <div className="contact-info">
          <div className="contact-item">
            <h3>{t.phone}</h3>
            <p dir="ltr">+966 944244604</p>
          </div>
          <div className="contact-item">
            <h3>{t.email}</h3>
            <p>info@msaddi.com</p>
          </div>
          <div className="contact-item">
            <h3>{t.address}</h3>
            <p>{language === 'ar' ? 'المملكة العربية السعودية، الرياض' : 'Riyadh, Saudi Arabia'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
