import React from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from '../components/Navigation/Navigation.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Article from '../components/Article/Article';
import { BodyContainer, Container } from '../components/StyledComponents/StyledComponents';
import { ArticlesGrid } from '../components/Home/Style';
import { getFeaturedPosts } from '../posts/Posts';

const FeaturedPosts = () => {
    const { t, i18n } = useTranslation();
    const featuredPosts = getFeaturedPosts(i18n.language);

    return (
        <>
            <Navigation page="featured-posts" />
            <BodyContainer>
                <Container top={8}>
                    <Container leftAlign bottom={2}>
                        <h1>{t('posts.featured')}</h1>
                    </Container>

                    <ArticlesGrid>
                        {featuredPosts.map((post, index) => {
                            return (
                                <Article
                                    key={index}
                                    route={post.route}
                                    thumbnail={post.image}
                                    title={post.title}
                                    date={post.date}
                                    description={post.description}
                                />
                            );
                        })}
                    </ArticlesGrid>

                    {featuredPosts.length === 0 && (
                        <Container top={4}>
                            <p>{t('posts.noFeaturedPosts')}</p>
                        </Container>
                    )}
                </Container>
            </BodyContainer>
            <Footer />
        </>
    );
}

export default FeaturedPosts;