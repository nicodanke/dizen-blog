import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../StyledComponents/StyledComponents';

const AboutHero = () => {
    const { t } = useTranslation();

    return (
        <Container >
            <Container flex bottom={6}>
                <Container width={50} right={3} bottom={3}>
                    <h1>{t('about.title')}</h1>
                </Container>
                <Container width={50}>
                    <p>{t('about.description')}</p>
                </Container>
            </Container>
        </Container>

    )
}

export default AboutHero;
