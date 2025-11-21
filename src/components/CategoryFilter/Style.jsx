import styled from 'styled-components';

export const CategoryFilterContainer = styled.div`
    margin-bottom: 3rem;
`;

export const CategoryList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1.5rem;
`;

export const CategoryItem = styled.div`
    display: inline-block;
`;

export const CategoryButton = styled.button`
    padding: ${props => props.level === 0 ? '0.75rem 1.5rem' : '0.5rem 1rem'};
    background-color: ${props => props.active
        ? props.theme.colors.primary
        : 'transparent'};
    color: ${props => props.active
        ? props.theme.colors.white
        : props.theme.body.text};
    border: ${props => props.level === 0 ? '2px' : '1px'} solid ${props => props.active
        ? props.theme.colors.primary
        : props.theme.body.text};
    border-radius: 4px;
    cursor: pointer;
    font-size: ${props => props.level === 0 ? '14px' : '13px'};
    font-weight: ${props => props.level === 0 ? '500' : '400'};
    text-transform: ${props => props.level === 0 ? 'uppercase' : 'capitalize'};
    letter-spacing: ${props => props.level === 0 ? '1px' : '0'};
    transition: ${props => props.theme.transition};

    &:hover {
        background-color: ${props => props.active
        ? props.theme.colors.primaryDark
        : props.theme.colors.primary};
        color: ${props => props.theme.colors.white};
        border-color: ${props => props.active
        ? props.theme.colors.primaryDark
        : props.theme.colors.primary};
    }

    &:active {
        transform: scale(0.98);
    }
`;

export const BreadcrumbRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
`;

export const SubcategoryList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
`;

export const SubcategoryItem = styled.div`
    display: inline-block;
`;

export const SubcategoryButton = styled.button`
    padding: 0.5rem 1rem;
    background-color: ${props => props.active
        ? props.theme.colors.primary
        : 'transparent'};
    color: ${props => props.active
        ? props.theme.colors.white
        : props.theme.body.text};
    border: 1px solid ${props => props.active
        ? props.theme.colors.primary
        : props.theme.body.text};
    border-radius: 4px;
    cursor: pointer;
    font-size: 13px;
    font-weight: 400;
    text-transform: capitalize;
    transition: ${props => props.theme.transition};

    &:hover {
        background-color: ${props => props.active
        ? props.theme.colors.primaryDark
        : props.theme.colors.primary};
        color: ${props => props.theme.colors.white};
        border-color: ${props => props.active
        ? props.theme.colors.primaryDark
        : props.theme.colors.primary};
    }

    &:active {
        transform: scale(0.98);
    }
`;

export const ClearButton = styled.button`
    padding: 0.5rem 1rem;
    background-color: transparent;
    color: ${props => props.theme.body.text};
    border: 1px solid ${props => props.theme.body.text};
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: ${props => props.theme.transition};
    margin-top: 0.5rem;

    &:hover {
        background-color: ${props => props.theme.body.text};
        color: ${props => props.theme.colors.black};
    }

    &:active {
        transform: scale(0.98);
    }
`;

