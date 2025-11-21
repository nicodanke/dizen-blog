import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
    LanguageSelectorContainer,
    LanguageButton,
    LanguageDropdownList,
    LanguageOption
} from './Style';

const languages = [
    { code: 'en', flag: '🇺🇸', name: 'English' },
    { code: 'es', flag: '🇪🇸', name: 'Español' },
    { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
    { code: 'it', flag: '🇮🇹', name: 'Italiano' },
    { code: 'fr', flag: '🇫🇷', name: 'Français' }
];

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        // Explicitly save to localStorage to ensure persistence
        localStorage.setItem('i18nextLng', lng);
        setIsOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <LanguageSelectorContainer ref={dropdownRef}>
            <LanguageButton onClick={() => setIsOpen(!isOpen)}>
                <span>{currentLanguage.flag}</span>
                <span>{currentLanguage.code.toUpperCase()}</span>
            </LanguageButton>
            {isOpen && (
                <LanguageDropdownList>
                    {languages.map((lang) => (
                        <LanguageOption
                            key={lang.code}
                            active={i18n.language === lang.code}
                            onClick={() => changeLanguage(lang.code)}
                        >
                            <span>{lang.flag}</span>
                            <span>{lang.name}</span>
                        </LanguageOption>
                    ))}
                </LanguageDropdownList>
            )}
        </LanguageSelectorContainer>
    );
};

export default LanguageSelector;

