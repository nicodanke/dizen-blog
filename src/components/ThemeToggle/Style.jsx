import styled from 'styled-components';

export const ThemeToggleButton = styled.button`
    background: transparent;
    border: 1px solid ${props => props.theme.body.text};
    color: ${props => props.theme.body.text};
    padding: 0.4rem 0.8rem;
    cursor: pointer;
    border-radius: 4px;
    transition: ${props => props.theme.transition};
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 44px;
    height: 36px;
    margin-left: 2rem;

    &:hover {
        background: ${props => props.theme.colors.primary};
        border-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.white};
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.98);
    }

    @media (max-width: ${props => props.theme.queries.mobile}) {
        margin-left: 1rem;
    }
`;

export const IconContainer = styled.svg`
    width: 18px;
    height: 18px;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
`;

