import React from 'react';
import {
	BodyContainer,
} from '../components/StyledComponents/StyledComponents';
import Navigation from '../components/Navigation/Navigation.jsx';
import AboutHero from '../components/About/AboutHero';
import AboutDescription from '../components/About/AboutDescription';
import AboutResume from '../components/About/AboutResume.jsx';
import Footer from '../components/Footer/Footer.jsx';

const About = () => {
	return (
		<>
			<Navigation page="about" />
			<BodyContainer>
				<AboutHero />
				<AboutDescription />
				<AboutResume />
			</BodyContainer>
			<Footer />
		</>
	);
}

export default About;