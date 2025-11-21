import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HomeHeroContainer = styled(motion.div)`
    height: 100vh;
    align-items: center;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
    /* Darker opaque overlay for better text readability */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        z-index: 1;
    }
    
    /* Ensure content is above overlay */
    > * {
        position: relative;
        z-index: 2;
    }
    
    /* Make all text white/light for better readability */
    h1 {
        color: ${props => props.theme.colors.white} !important;
    }
    
    p {
        color: rgba(255, 255, 255, 0.9) !important;
    }

    @media (max-width: ${props => props.theme.queries.mobile}) {
        height: auto;
        padding: 100px 0 200px 0;
    }
`;

export const ArticlesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    
    @media (max-width: ${props => props.theme.queries.tablet}) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }
    
    @media (max-width: ${props => props.theme.queries.mobile}) {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
`;

