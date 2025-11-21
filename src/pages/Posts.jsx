import React, { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useHistory } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation.jsx';
import Footer from '../components/Footer/Footer.jsx';
import CategoryFilter from '../components/CategoryFilter/CategoryFilter';
import Article from '../components/Article/Article';
import { BodyContainer, Container } from '../components/StyledComponents/StyledComponents';
import { ArticlesGrid } from '../components/Home/Style';
import { getPosts, getCategoryPathFromLeaf } from '../posts/Posts';

const Posts = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const history = useHistory();
    const [selectedPath, setSelectedPath] = useState(null);

    // Read category path from URL query parameter on mount
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const categoryParam = searchParams.get('category');

        if (categoryParam) {
            try {
                const path = categoryParam.split(',').filter(Boolean);
                if (path.length > 0) {
                    setSelectedPath(path);
                }
            } catch (error) {
                console.error('Error parsing category path from URL:', error);
            }
        } else {
            // Clear filter if no category param in URL
            setSelectedPath(null);
        }
    }, [location.search]);

    const allPosts = useMemo(() => getPosts(i18n.language), [i18n.language]);

    const filteredPosts = useMemo(() => {
        if (!selectedPath || selectedPath.length === 0) {
            return allPosts;
        }

        return allPosts.filter(post => {
            if (!post.categories || post.categories.length === 0) {
                return false;
            }

            // Check if any of the post's category paths starts with the selected path
            return post.categories.some(leafCategoryId => {
                // Get full path from leaf category ID
                const postCategoryPath = getCategoryPathFromLeaf(leafCategoryId);

                // Check if selectedPath is a prefix of postCategoryPath
                if (postCategoryPath.length < selectedPath.length) {
                    return false;
                }

                // Check if all elements in selectedPath match the corresponding elements in postCategoryPath
                return selectedPath.every((id, index) => id === postCategoryPath[index]);
            });
        });
    }, [allPosts, selectedPath]);

    const handleFilterChange = (path) => {
        setSelectedPath(path);

        // Update URL with category path
        const searchParams = new URLSearchParams();
        if (path && path.length > 0) {
            searchParams.set('category', path.join(','));
        }

        const newSearch = searchParams.toString();
        const newUrl = newSearch ? `/posts?${newSearch}` : '/posts';
        history.replace(newUrl);
    };

    return (
        <>
            <Navigation page="posts" />
            <BodyContainer>
                <Container top={8}>
                    <Container leftAlign bottom={2}>
                        <h1>{t('posts.title')}</h1>
                    </Container>

                    <CategoryFilter
                        onFilterChange={handleFilterChange}
                        initialSelectedPath={selectedPath}
                    />

                    <ArticlesGrid>
                        {filteredPosts.map((post, index) => {
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

                    {filteredPosts.length === 0 && (
                        <Container top={4}>
                            <p>{t('posts.noPostsFound')}</p>
                        </Container>
                    )}
                </Container>
            </BodyContainer>
            <Footer />
        </>
    );
}

export default Posts;