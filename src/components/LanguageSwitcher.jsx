import React from 'react';

function LanguageSwitcher({ language, setLanguage }) {
  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <button onClick={toggleLanguage} className="lang-button">
      {language === 'ar' ? 'English' : 'العربية'}
    </button>
  );
}

export default LanguageSwitcher;
