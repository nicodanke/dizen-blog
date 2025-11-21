import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.json';
import esTranslations from './locales/es.json';
import deTranslations from './locales/de.json';
import itTranslations from './locales/it.json';
import frTranslations from './locales/fr.json';

// Supported languages
const supportedLanguages = ['en', 'es', 'de', 'it', 'fr'];

// Function to detect browser language
const detectBrowserLanguage = () => {
    // Get browser language(s)
    const browserLang = navigator.language || navigator.userLanguage;
    const browserLangs = navigator.languages || [browserLang];

    // Extract language code (first 2 characters, e.g., 'en' from 'en-US')
    const getLanguageCode = (lang) => {
        if (!lang) return null;
        return lang.split('-')[0].toLowerCase();
    };

    // Check if browser language is supported
    for (let lang of browserLangs) {
        const langCode = getLanguageCode(lang);
        if (langCode && supportedLanguages.includes(langCode)) {
            return langCode;
        }
    }

    // Fallback to English if browser language not supported
    return 'en';
};

// Get saved language from localStorage, or detect from browser (first time visit)
const savedLanguage = localStorage.getItem('i18nextLng');
const detectedLanguage = detectBrowserLanguage();
const initialLanguage = savedLanguage || detectedLanguage;

// Save detected browser language to localStorage if it's the first visit
if (!savedLanguage && initialLanguage) {
    localStorage.setItem('i18nextLng', initialLanguage);
}

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTranslations
            },
            es: {
                translation: esTranslations
            },
            de: {
                translation: deTranslations
            },
            it: {
                translation: itTranslations
            },
            fr: {
                translation: frTranslations
            }
        },
        lng: initialLanguage,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false // React already escapes values
        }
    });

// Ensure language changes are saved to localStorage
i18n.on('languageChanged', (lng) => {
    localStorage.setItem('i18nextLng', lng);
});

export default i18n;

