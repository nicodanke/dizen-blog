import styled from 'styled-components';

export const LanguageSelectorContainer = styled.div`
    position: relative;
    margin-left: 2rem;
    
    @media (max-width: ${props => props.theme.queries.mobile}) {
        margin-left: 1rem;
    }
`;

export const LanguageButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: transparent;
    color: ${props => props.theme.body.text};
    border: 1px solid ${props => props.theme.body.text};
    padding: 0.4rem 0.8rem;
    cursor: pointer;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    border-radius: 4px;
    transition: ${props => props.theme.transition};
    min-width: 80px;
    
    span:first-child {
        font-size: 16px;
    }
    
    &:hover {
        background: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.white};
        border-color: ${props => props.theme.colors.primary};
    }
    
    &:active {
        transform: scale(0.98);
    }
`;

export const LanguageDropdownList = styled.div`
    position: absolute;
    top: calc(100% + 0.5rem);
    right: 0;
    background: ${props => props.theme.body.background};
    border: 1px solid ${props => props.theme.body.text};
    border-radius: 4px;
    min-width: 150px;
    z-index: 1000;
    box-shadow: ${props => props.theme.mode === 'light'
        ? '0 4px 6px rgba(0, 0, 0, 0.1)'
        : '0 4px 6px rgba(0, 0, 0, 0.3)'};
    overflow: hidden;
`;

export const LanguageOption = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    cursor: pointer;
    font-size: 14px;
    color: ${props => props.active ? props.theme.colors.primary : props.theme.body.text};
    background: ${props => props.active
        ? (props.theme.mode === 'light' ? 'rgba(58, 189, 167, 0.1)' : 'rgba(255, 255, 255, 0.1)')
        : 'transparent'};
    transition: ${props => props.theme.transition};
    
    span:first-child {
        font-size: 18px;
    }
    
    &:hover {
        background: ${props => props.theme.mode === 'light'
        ? 'rgba(58, 189, 167, 0.15)'
        : 'rgba(255, 255, 255, 0.15)'};
        color: ${props => props.theme.colors.primary};
    }
    
    &:not(:last-child) {
        border-bottom: 1px solid ${props => props.theme.mode === 'light'
        ? 'rgba(0, 0, 0, 0.1)'
        : 'rgba(255, 255, 255, 0.1)'};
    }
`;

