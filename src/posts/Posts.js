// Import all language versions from language folders
import SampleEn from './en/sample.md';
import SampleEs from './es/sample.md';
import SampleDe from './de/sample.md';
import SampleIt from './it/sample.md';
import SampleFr from './fr/sample.md';

import Top5BuenosAiresEn from './en/top5-buenos-aires.md';
import Top5BuenosAiresEs from './es/top5-buenos-aires.md';
import Top5BuenosAiresDe from './de/top5-buenos-aires.md';
import Top5BuenosAiresIt from './it/top5-buenos-aires.md';
import Top5BuenosAiresFr from './fr/top5-buenos-aires.md';

import BasePostImage from '../assets/img/base_post_image.png';

// Recursive category structure - subcategories can have their own subcategories
const categories = {
    'technology': {
        id: 'technology',
        name: {
            'en': 'Technology',
            'es': 'Tecnología',
            'de': 'Technologie',
            'it': 'Tecnologia',
            'fr': 'Technologie'
        },
        subcategories: {
            'web-development': {
                id: 'web-development',
                name: {
                    'en': 'Web Development',
                    'es': 'Desarrollo Web',
                    'de': 'Webentwicklung',
                    'it': 'Sviluppo Web',
                    'fr': 'Développement Web'
                },
                subcategories: {
                    'frontend': {
                        id: 'frontend',
                        name: {
                            'en': 'Frontend',
                            'es': 'Frontend',
                            'de': 'Frontend',
                            'it': 'Frontend',
                            'fr': 'Frontend'
                        },
                        subcategories: {
                            'react': {
                                id: 'react',
                                name: {
                                    'en': 'React',
                                    'es': 'React',
                                    'de': 'React',
                                    'it': 'React',
                                    'fr': 'React'
                                },
                                subcategories: {}
                            },
                            'vue': {
                                id: 'vue',
                                name: {
                                    'en': 'Vue',
                                    'es': 'Vue',
                                    'de': 'Vue',
                                    'it': 'Vue',
                                    'fr': 'Vue'
                                },
                                subcategories: {}
                            }
                        }
                    },
                    'backend': {
                        id: 'backend',
                        name: {
                            'en': 'Backend',
                            'es': 'Backend',
                            'de': 'Backend',
                            'it': 'Backend',
                            'fr': 'Backend'
                        },
                        subcategories: {}
                    }
                }
            },
            'mobile-development': {
                id: 'mobile-development',
                name: {
                    'en': 'Mobile Development',
                    'es': 'Desarrollo Móvil',
                    'de': 'Mobile Entwicklung',
                    'it': 'Sviluppo Mobile',
                    'fr': 'Développement Mobile'
                },
                subcategories: {}
            }
        }
    },
    'travel': {
        id: 'travel',
        name: {
            'en': 'Travel',
            'es': 'Viajes',
            'de': 'Reisen',
            'it': 'Viaggi',
            'fr': 'Voyage'
        },
        subcategories: {
            'destinations': {
                id: 'destinations',
                name: {
                    'en': 'Destinations',
                    'es': 'Destinos',
                    'de': 'Reiseziele',
                    'it': 'Destinazioni',
                    'fr': 'Destinations'
                },
                subcategories: {
                    'south-america': {
                        id: 'south-america',
                        name: {
                            'en': 'South America',
                            'es': 'Sudamérica',
                            'de': 'Südamerika',
                            'it': 'Sud America',
                            'fr': 'Amérique du Sud'
                        },
                        subcategories: {
                            'argentina': {
                                id: 'argentina',
                                name: {
                                    'en': 'Argentina',
                                    'es': 'Argentina',
                                    'de': 'Argentinien',
                                    'it': 'Argentina',
                                    'fr': 'Argentine'
                                },
                                subcategories: {}
                            }
                        }
                    }
                }
            },
            'tips': {
                id: 'tips',
                name: {
                    'en': 'Travel Tips',
                    'es': 'Consejos de Viaje',
                    'de': 'Reisetipps',
                    'it': 'Consigli di Viaggio',
                    'fr': 'Conseils de Voyage'
                },
                subcategories: {}
            }
        }
    },
    'lifestyle': {
        id: 'lifestyle',
        name: {
            'en': 'Lifestyle',
            'es': 'Estilo de Vida',
            'de': 'Lifestyle',
            'it': 'Stile di Vita',
            'fr': 'Mode de Vie'
        },
        subcategories: {}
    }
};

// Helper function to get category by path (array of IDs)
const getCategoryByPath = (path) => {
    if (!path || path.length === 0) return null;

    let current = categories[path[0]];
    if (!current) return null;

    for (let i = 1; i < path.length; i++) {
        if (!current.subcategories || !current.subcategories[path[i]]) {
            return null;
        }
        current = current.subcategories[path[i]];
    }

    return current;
};

// Helper function to get category name by path and language
const getCategoryNameByPath = (path, language) => {
    const category = getCategoryByPath(path);
    if (!category) return path.join(' > ');
    return category.name[language] || category.name['en'];
};

// Helper function to find the full path to a category by searching the tree
const findCategoryPath = (categoryId, currentPath = [], currentCategories = categories) => {
    // Check if current category matches
    if (currentCategories[categoryId]) {
        return [...currentPath, categoryId];
    }

    // Search in subcategories
    for (const [key, category] of Object.entries(currentCategories)) {
        if (category.subcategories && Object.keys(category.subcategories).length > 0) {
            const found = findCategoryPath(categoryId, [...currentPath, key], category.subcategories);
            if (found) {
                return found;
            }
        }
    }

    return null;
};

// Helper function to get full category path from a leaf category ID
const getCategoryPathFromLeaf = (leafCategoryId) => {
    return findCategoryPath(leafCategoryId) || [leafCategoryId];
};

// Helper function to get post image with default fallback
const getPostImage = (customImage) => {
    return customImage || BasePostImage;
};

// Helper function to get post content based on language
const getPostContent = (postKey, language) => {
    const postMap = {
        'sample': {
            'en': SampleEn,
            'es': SampleEs,
            'de': SampleDe,
            'it': SampleIt,
            'fr': SampleFr
        },
        'top5-buenos-aires': {
            'en': Top5BuenosAiresEn,
            'es': Top5BuenosAiresEs,
            'de': Top5BuenosAiresDe,
            'it': Top5BuenosAiresIt,
            'fr': Top5BuenosAiresFr
        }
    };

    const lang = language || 'en';
    return postMap[postKey]?.[lang] || postMap[postKey]?.['en'];
};

// Function to get posts with current language
const getPosts = (language) => {
    const lang = language || 'en';

    return [
        {
            title: getPostTitle('sample', lang),
            date: getPostDate('sample', lang),
            description: getPostDescription('sample', lang),
            image: getPostImage(),
            content: getPostContent('sample', lang),
            route: "cool-blog-post",
            categories: [
                'react'  // Only the leaf category ID
            ],
            featured: true
        },
        {
            title: getPostTitle('top5-buenos-aires', lang),
            date: getPostDate('top5-buenos-aires', lang),
            description: getPostDescription('top5-buenos-aires', lang),
            image: getPostImage(),
            content: getPostContent('top5-buenos-aires', lang),
            route: "top5-buenos-aires",
            categories: [
                'argentina'  // Only the leaf category ID
            ],
            featured: true
        },
    ];
};

// Helper functions for titles, dates, and descriptions
const getPostTitle = (postKey, language) => {
    const titles = {
        'sample': {
            'en': "Learn How to Create a Blog With These Simple Steps",
            'es': "Aprende Cómo Crear un Blog Con Estos Pasos Simples",
            'de': "Lernen Sie, wie Sie einen Blog mit diesen einfachen Schritten erstellen",
            'it': "Impara Come Creare un Blog Con Questi Semplici Passaggi",
            'fr': "Apprenez Comment Créer un Blog Avec Ces Étapes Simples"
        },
        'top5-buenos-aires': {
            'en': "Top 5 Buenos Aires",
            'es': "Top 5 Buenos Aires",
            'de': "Top 5 Buenos Aires",
            'it': "Top 5 Buenos Aires",
            'fr': "Top 5 Buenos Aires"
        }
    };
    return titles[postKey]?.[language] || titles[postKey]?.['en'];
};

const getPostDate = (postKey, language) => {
    const dates = {
        'sample': {
            'en': "January 4, 2021",
            'es': "4 de enero de 2021",
            'de': "4. Januar 2021",
            'it': "4 gennaio 2021",
            'fr': "4 janvier 2021"
        },
        'top5-buenos-aires': {
            'en': "January 4, 2021",
            'es': "4 de enero de 2021",
            'de': "4. Januar 2021",
            'it': "4 gennaio 2021",
            'fr': "4 janvier 2021"
        }
    };
    return dates[postKey]?.[language] || dates[postKey]?.['en'];
};

const getPostDescription = (postKey, language) => {
    const descriptions = {
        'sample': {
            'en': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            'es': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            'de': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            'it': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            'fr': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        'top5-buenos-aires': {
            'en': "Discover the top 5 must-see destinations in Buenos Aires, from historic landmarks to vibrant neighborhoods.",
            'es': "Descubre los 5 destinos imperdibles de Buenos Aires, desde monumentos históricos hasta barrios vibrantes.",
            'de': "Entdecken Sie die Top 5 Sehenswürdigkeiten in Buenos Aires, von historischen Wahrzeichen bis hin zu pulsierenden Vierteln.",
            'it': "Scopri le 5 destinazioni imperdibili di Buenos Aires, dai monumenti storici ai quartieri vibranti.",
            'fr': "Découvrez les 5 destinations incontournables de Buenos Aires, des monuments historiques aux quartiers vibrants."
        }
    };
    return descriptions[postKey]?.[language] || descriptions[postKey]?.['en'];
};

// Helper function to get featured posts
const getFeaturedPosts = (language) => {
    const allPosts = getPosts(language);
    return allPosts.filter(post => post.featured === true);
};

// Export default posts (will be updated dynamically)
const Posts = getPosts('en');

export default Posts;
export { getPosts, getPostContent, getFeaturedPosts, categories, getCategoryByPath, getCategoryNameByPath, getCategoryPathFromLeaf };