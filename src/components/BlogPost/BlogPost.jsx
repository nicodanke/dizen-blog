import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter, Link } from 'react-router-dom';
import marked from 'marked';
import styled from 'styled-components';
import {
    BodyContainer,
    Container,
    Image
} from '../../components/StyledComponents/StyledComponents';
import Navigation from '../../components/Navigation/Navigation.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { getPosts, getCategoryNameByPath, getCategoryPathFromLeaf } from '../../posts/Posts';

const BreadcrumbContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    margin: 1.5rem 0;
    font-size: 14px;
    color: ${props => props.theme.body.text};
`;

const BreadcrumbItem = styled(Link)`
    color: ${props => props.theme.body.text};
    opacity: ${props => props.isLast ? 1 : 0.8};
    font-weight: ${props => props.isLast ? 500 : 400};
    text-decoration: none;
    transition: ${props => props.theme.transition};
    
    &:hover {
        opacity: 1;
        color: ${props => props.theme.colors.primary};
    }
`;

const BreadcrumbSeparator = styled.span`
    margin: 0 0.5rem;
    color: ${props => props.theme.body.text};
    opacity: 0.5;
`;

class BlogPost extends React.Component {

    state = {
        markdown: '',
        post: null,
        loading: true,
        error: null
    }

    componentDidMount() {
        this.loadPost();

        // Listen for language changes
        const { i18n } = this.props;
        if (i18n) {
            this.languageChangeHandler = (lng) => {
                this.loadPost();
            };
            i18n.on('languageChanged', this.languageChangeHandler);
        }
    }

    componentWillUnmount() {
        // Clean up language change listener
        const { i18n } = this.props;
        if (i18n && this.languageChangeHandler) {
            i18n.off('languageChanged', this.languageChangeHandler);
        }
    }

    componentDidUpdate(prevProps) {
        // Reload post if route changed
        const routeChanged = prevProps.match?.url !== this.props.match?.url;

        if (routeChanged) {
            this.loadPost();
        }
    }

    loadPost = () => {
        const { i18n, match, location } = this.props;

        // Get route from URL - remove leading slash
        let route = '';
        if (match?.url) {
            route = match.url.startsWith('/') ? match.url.substring(1) : match.url;
        } else if (location?.pathname) {
            route = location.pathname.startsWith('/') ? location.pathname.substring(1) : location.pathname;
        } else {
            route = window.location.pathname.startsWith('/') ? window.location.pathname.substring(1) : window.location.pathname;
        }

        // Get current language
        const language = i18n?.language || localStorage.getItem('i18nextLng') || 'en';

        // Reset state
        this.setState({ loading: true, error: null, post: null, markdown: '' });

        // Get posts for current language
        const posts = getPosts(language);
        const post = posts.find(p => p.route === route);

        if (!post) {
            console.error('Post not found for route:', route, 'language:', language);
            this.setState({
                loading: false,
                error: 'Post not found',
                post: null
            });
            return;
        }

        // Set post metadata immediately
        this.setState({ post });

        // Load markdown content
        fetch(post.content)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load post: ${response.statusText}`);
                }
                return response.text();
            })
            .then(text => {
                this.setState({
                    markdown: marked(text),
                    loading: false,
                    error: null
                });
            })
            .catch(error => {
                console.error('Error loading post content:', error);
                this.setState({
                    loading: false,
                    error: error.message,
                    markdown: ''
                });
            });
    }

    render() {
        const { markdown, post, loading, error } = this.state;
        const { i18n } = this.props;
        const language = i18n?.language || 'en';

        // Get the first category path for breadcrumbs (reconstruct from leaf)
        const categoryPath = post?.categories && post.categories.length > 0
            ? getCategoryPathFromLeaf(post.categories[0])
            : null;

        return (
            <Container>
                <ProgressBar />
                <Navigation />
                <BodyContainer>
                    <Container small top={12}>
                        {loading && <p>Loading...</p>}
                        {error && <p>Error: {error}</p>}
                        {!loading && !error && post && (
                            <>
                                <h1>{post.title}</h1>
                                <p>{post.date}</p>

                                {categoryPath && categoryPath.length > 0 && (
                                    <BreadcrumbContainer>
                                        {categoryPath.map((categoryId, index) => {
                                            const pathToCategory = categoryPath.slice(0, index + 1);
                                            const categoryName = getCategoryNameByPath(pathToCategory, language);
                                            const isLast = index === categoryPath.length - 1;
                                            // Create URL with category path as query parameter
                                            const categoryPathParam = pathToCategory.join(',');
                                            const postsUrl = `/posts?category=${encodeURIComponent(categoryPathParam)}`;

                                            return (
                                                <React.Fragment key={index}>
                                                    <BreadcrumbItem
                                                        to={postsUrl}
                                                        isLast={isLast}
                                                    >
                                                        {categoryName}
                                                    </BreadcrumbItem>
                                                    {!isLast && <BreadcrumbSeparator>›</BreadcrumbSeparator>}
                                                </React.Fragment>
                                            );
                                        })}
                                    </BreadcrumbContainer>
                                )}

                                <Image src={post.image} />
                                {markdown && (
                                    <div
                                        id={`post_${post.route}`}
                                        dangerouslySetInnerHTML={{ __html: markdown }}
                                    />
                                )}
                            </>
                        )}
                    </Container>
                </BodyContainer>
                <Footer />
            </Container>
        )
    }
}

// Use both HOCs to get i18n and router props
export default withRouter(withTranslation()(BlogPost));