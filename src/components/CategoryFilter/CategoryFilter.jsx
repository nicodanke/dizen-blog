import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { categories, getCategoryByPath } from '../../posts/Posts';
import {
    CategoryFilterContainer,
    CategoryList,
    CategoryItem,
    CategoryButton,
    SubcategoryList,
    SubcategoryItem,
    ClearButton,
    BreadcrumbRow
} from './Style';

const CategoryFilter = ({ onFilterChange, initialSelectedPath = null }) => {
    const { t, i18n } = useTranslation();
    const language = i18n.language || 'en';
    const [selectedPath, setSelectedPath] = useState(initialSelectedPath);

    // Update selectedPath when initialSelectedPath changes (e.g., from URL)
    React.useEffect(() => {
        setSelectedPath(initialSelectedPath);
    }, [initialSelectedPath]);

    const handleCategorySelect = (path) => {
        setSelectedPath(path);
        onFilterChange(path);
    };

    const handleBreadcrumbClick = (index) => {
        const isLast = index === selectedPath.length - 1;

        if (isLast) {
            // Clicking the last breadcrumb removes only that last element
            if (selectedPath.length === 1) {
                // If it's the only element, clear the filter completely
                setSelectedPath(null);
                onFilterChange(null);
            } else {
                // Remove the last element from the path
                const newPath = selectedPath.slice(0, -1);
                setSelectedPath(newPath);
                onFilterChange(newPath);
            }
        } else {
            // Clicking a breadcrumb selects that level
            const newPath = selectedPath.slice(0, index + 1);
            setSelectedPath(newPath);
            onFilterChange(newPath);
        }
    };

    const handleSubcategoryClick = (subcategoryId) => {
        // Add the subcategory to the path
        const newPath = [...selectedPath, subcategoryId];
        setSelectedPath(newPath);
        onFilterChange(newPath);
    };

    const handleClear = () => {
        setSelectedPath(null);
        onFilterChange(null);
    };

    // Get the current category based on selected path
    const getCurrentCategory = () => {
        if (!selectedPath || selectedPath.length === 0) {
            return null;
        }
        return getCategoryByPath(selectedPath);
    };

    // Get subcategories of the current selected category
    const getCurrentSubcategories = () => {
        const currentCategory = getCurrentCategory();
        if (!currentCategory || !currentCategory.subcategories) {
            return {};
        }
        return currentCategory.subcategories;
    };

    const currentCategory = getCurrentCategory();
    const currentSubcategories = getCurrentSubcategories();
    const hasSubcategories = currentCategory && Object.keys(currentSubcategories).length > 0;
    const categoryKeys = Object.keys(categories);

    return (
        <CategoryFilterContainer>
            {selectedPath && selectedPath.length > 0 ? (
                // Show breadcrumb row with selected path
                <BreadcrumbRow>
                    {selectedPath.map((categoryId, index) => {
                        const pathToCategory = selectedPath.slice(0, index + 1);
                        const category = getCategoryByPath(pathToCategory);
                        const isLast = index === selectedPath.length - 1;

                        return (
                            <React.Fragment key={index}>
                                <CategoryButton
                                    onClick={() => handleBreadcrumbClick(index)}
                                    active={isLast}
                                    level={0}
                                >
                                    {category ? (category.name[language] || category.name['en']) : categoryId}
                                </CategoryButton>
                                {!isLast && <span style={{ margin: '0 0.5rem', color: '#888' }}>›</span>}
                            </React.Fragment>
                        );
                    })}
                </BreadcrumbRow>
            ) : (
                // Show all top-level categories
                <CategoryList>
                    {categoryKeys.map((categoryId) => {
                        const category = categories[categoryId];
                        return (
                            <CategoryItem key={categoryId}>
                                <CategoryButton
                                    onClick={() => handleCategorySelect([categoryId])}
                                    active={false}
                                    level={0}
                                >
                                    {category.name[language] || category.name['en']}
                                </CategoryButton>
                            </CategoryItem>
                        );
                    })}
                </CategoryList>
            )}

            {/* Show subcategories of the currently selected category */}
            {hasSubcategories && (
                <SubcategoryList>
                    {Object.keys(currentSubcategories).map((subcategoryId) => {
                        const subcategory = currentSubcategories[subcategoryId];
                        return (
                            <SubcategoryItem key={subcategoryId}>
                                <CategoryButton
                                    onClick={() => handleSubcategoryClick(subcategoryId)}
                                    active={false}
                                    level={1}
                                >
                                    {subcategory.name[language] || subcategory.name['en']}
                                </CategoryButton>
                            </SubcategoryItem>
                        );
                    })}
                </SubcategoryList>
            )}

            {selectedPath && selectedPath.length > 0 && (
                <ClearButton onClick={handleClear}>
                    {t('posts.clearFilter')}
                </ClearButton>
            )}
        </CategoryFilterContainer>
    );
};

export default CategoryFilter;
