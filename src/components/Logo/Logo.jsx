import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import {
    DesktopLogo,
    MobileLogo,
    NavLogo
} from '../../components/Navigation/Style';
import whiteLogoImage from '../../assets/img/white_logo.png';
import blackLogoImage from '../../assets/img/black_logo.png';

const Logo = (props) => {
    const { themeMode } = useTheme();
    const logoImage = themeMode === 'light' ? blackLogoImage : whiteLogoImage;

    return (
        <NavLogo href="/home">
            <DesktopLogo>
                <img src={logoImage} alt="Logo" />
            </DesktopLogo>
            <MobileLogo>
                <img src={logoImage} alt="Logo" />
            </MobileLogo>
        </NavLogo>
    );
};

export default Logo;
