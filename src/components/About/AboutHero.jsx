import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Container,
    HeroContainer
} from '../StyledComponents/StyledComponents';
import SocialButtons from "../Social/SocialButtons";

const AboutHero = () => {
    const { t } = useTranslation();

    return (
        <HeroContainer
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 2, delay: 1 }}
            exit={{ opacity: 0 }}
        >
            <div>
                <Container bottom={3}>
                    <h1>{t('about.title')}</h1>
                </Container>
                <SocialButtons />
            </div>
        </HeroContainer>
    )
}

export default AboutHero;
