// "use client";

// import React, { createContext, useContext, useState, useEffect } from "react";

// const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//   const [language, setLanguage] = useState("en");

//   // Load saved language preference on mount
//   useEffect(() => {
//     const storedLang = localStorage.getItem("dwai-lang");
//     if (storedLang) {
//       setLanguage(storedLang);
//     }
//   }, []);

//   const switchLanguage = (lang) => {
//     setLanguage(lang);
//     localStorage.setItem("dwai-lang", lang);
//     // Update HTML lang attribute for accessibility
//     document.documentElement.lang = lang;
//   };

//   return (
//     <LanguageContext.Provider value={{ language, switchLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export const useLanguage = () => {
//   const context = useContext(LanguageContext);
//   if (!context) {
//     throw new Error("useLanguage must be used within a LanguageProvider");
//   }
//   return context;
// };