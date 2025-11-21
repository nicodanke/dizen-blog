import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Container,
    CaseLink,
    CaseStudyContainer,
    CaseStudyContent,
    CaseStudyImage
} from '../StyledComponents/StyledComponents';
import { ClientText } from "./Style";
import Button from '../Utility/Button';
import { Fade } from 'react-awesome-reveal';
import BasePostImage from '../../assets/img/base_post_image.png';

const Project = (props) => {
    const { t } = useTranslation();
    const thumbnail = props.thumbnail || BasePostImage;

    return (
        <Fade direction="top" duration={1000} triggerOnce cascade>
            <CaseLink href={props.route} target={props.newTab ? '_blank' : null}>
                <CaseStudyContainer>
                    <CaseStudyContent>
                        <Container flexRow leftAlign>
                            <ClientText>{props.date}</ClientText>
                        </Container>

                        <CaseStudyImage background={props.color}>
                            <img src={thumbnail} alt="" />
                        </CaseStudyImage>

                        <div>
                            <h2>{props.title}</h2>
                            <p>{props.description}</p>
                        </div>

                        <Button
                            right
                            text={t('posts.readMore')}
                            route={props.route}
                        />
                    </CaseStudyContent>
                </CaseStudyContainer>
            </CaseLink>
        </Fade>
    );
}

export default Project;