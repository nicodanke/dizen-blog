import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    ResumeTitle,
    ResumeItem,
} from '../../components/About/StyledComponents';
import { Container } from '../StyledComponents/StyledComponents';
import Link from '../Utility/Link';
import Data from '../../Data';

const Resume = () => {
    const { t } = useTranslation();

    return (
        <Container>
            <Container flex bottom={6}>
                <Container width={50} right={3} bottom={3}>
                    <h1>{t('about.experience.title')}</h1>
                </Container>

                <Container width={50}>
                    {Data.about.experience.map((role) => {
                        return (
                            <ResumeItem>
                                <ResumeTitle>
                                    <span>{role.title + ' '}</span>
                                    {
                                        role.company
                                            ?
                                            <span>{t('about.experience.at')} <Link route={`https://www.${role.site ? role.site : role.company.toLowerCase()}.com`} text={role.company} /></span>
                                            :
                                            null
                                    }
                                </ResumeTitle>
                                <p>{role.date}</p>
                            </ResumeItem>
                        )
                    })
                    }
                </Container>
            </Container>

            <Container flex bottom={6}>
                <Container width={50} right={3} bottom={3}>
                    <h1>{t('about.education.title')}</h1>
                </Container>
                <Container width={50}>
                    {Data.about.education.map((degree) => {
                        return (
                            <ResumeItem>
                                <ResumeTitle>
                                    <span>
                                        {degree.degree} {t('about.education.in')} {degree.program}
                                    </span>
                                    <p>{degree.school}, {degree.date}</p>
                                </ResumeTitle>
                                <p>{degree.about}</p>
                            </ResumeItem>
                        )
                    })
                    }
                </Container>
            </Container>
        </Container>
    );
}

export default Resume;