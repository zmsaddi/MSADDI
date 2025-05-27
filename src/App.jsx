import { useState } from 'react'
import './App.css'

function App() {
  const [language, setLanguage] = useState('ar')

  const content = {
    ar: {
      title: "مؤسسة مسدي",
      subtitle: "للمقاولات والصيانة",
      welcome: "مرحباً بكم في موقعنا"
    },
    en: {
      title: "MSADDI Foundation",
      subtitle: "For Contracting and Maintenance",
      welcome: "Welcome to our website"
    }
  }

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar')
  }

  const t = content[language]

  return (
    <div className={`container ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <header>
        <button onClick={toggleLanguage} className="lang-button">
          {language === 'ar' ? 'English' : 'العربية'}
        </button>
      </header>
      <main>
        <div className="logo-container">
          <div className="logo">MSADDI</div>
        </div>
        <h1>{t.title}</h1>
        <h2>{t.subtitle}</h2>
        <p>{t.welcome}</p>
      </main>
      <footer>
        <p>© 2025 MSADDI - جميع الحقوق محفوظة</p>
      </footer>
    </div>
  )
}

export default App
