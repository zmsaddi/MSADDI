import { useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  const [language, setLanguage] = useState('ar');

  return (
    <div className={`container ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <header>
        <div className="logo-text">
          {language === 'ar' ? 'مؤسسة مسدي' : 'MSADDI Foundation'}
        </div>
        <LanguageSwitcher language={language} setLanguage={setLanguage} />
      </header>
      
      <HomePage language={language} />
      
      <footer>
        <p>© 2025 MSADDI - {language === 'ar' ? 'جميع الحقوق محفوظة' : 'All Rights Reserved'}</p>
      </footer>
    </div>
  );
}

export default App;
