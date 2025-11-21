import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Container,
    BodyContainer
} from '../StyledComponents/StyledComponents';
import Button from '../Utility/Button';
import { HomeHeroContainer } from './Style';
import heroImage from '../../assets/img/hero_image.png';

const HomeHero = () => {
    const { t } = useTranslation();

    return (
        <HomeHeroContainer
            backgroundImage={heroImage}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 2, delay: 1 }}
            exit={{ opacity: 0 }}
        >
            <BodyContainer>
                <Container width={80} leftAlign bottom={2}>
                    <h1>{t('home.title')}</h1>
                </Container>

                <Container leftAlign bottom={6} width={65}>
                    <p>{t('home.description')}</p>
                </Container>

                <a href="/posts">
                    <Button
                        route="/posts"
                        text={t('home.viewPosts')}
                        right
                    />
                </a>
            </BodyContainer>
        </HomeHeroContainer>
    )
}

export default HomeHero;
