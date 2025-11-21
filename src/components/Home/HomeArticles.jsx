import React from 'react';
import { useTranslation } from 'react-i18next';
import { getFeaturedPosts } from "../../posts/Posts";
import Article from '../Article/Article';
import { BodyContainer, Container } from "../StyledComponents/StyledComponents";
import { ArticlesGrid } from './Style';

const HomeProjects = () => {
    const { t, i18n } = useTranslation();
    const allFeaturedPosts = getFeaturedPosts(i18n.language);
    const posts = allFeaturedPosts.slice(0, 6); // Show only the first 6 featured posts

    return (
        <BodyContainer>
            <Container top={6}>
                <Container leftAlign bottom={4}>
                    <h2>{t('home.featuredArticles')}</h2>
                </Container>
                <ArticlesGrid>
                    {posts.map((post, index) => {
                        return (
                            <Article
                                key={index}
                                route={post.route}
                                thumbnail={post.image}
                                title={post.title}
                                date={post.date}
                                description={post.description}
                            />
                        )
                    })
                    }
                </ArticlesGrid>
            </Container>
        </BodyContainer>
    )
}

export default HomeProjects;
