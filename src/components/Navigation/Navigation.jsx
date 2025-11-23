import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import {
	NavContainer,
	Nav,
	SubNavMenu,
	SubNavMenuList,
	SubNavMenuListItem
} from '../../components/Navigation/Style';
import { BodyContainer } from '../StyledComponents/StyledComponents';

const Navigation = (props) => {
	const { t } = useTranslation();
	const { page } = props;

	return (
		<nav>
			<NavContainer>
				<BodyContainer>
					<Nav>
						<Logo color={props.logoColor} size="36px" />
						<SubNavMenu>
							<SubNavMenuList>
								<SubNavMenuListItem active={page === 'posts' ? true : false}>
									<Link to="/posts">{t('nav.posts')}</Link>
								</SubNavMenuListItem>
								<SubNavMenuListItem active={page === 'featured-posts' ? true : false}>
									<Link to="/featured-posts">{t('nav.featured')}</Link>
								</SubNavMenuListItem>
								<SubNavMenuListItem active={page === 'about' ? true : false}>
									<a href="https://www.dizen.pro/" target="_blank" rel="noopener noreferrer">{t('nav.about')}</a>
								</SubNavMenuListItem>
							</SubNavMenuList>
							<ThemeToggle />
							<LanguageSelector />
						</SubNavMenu>
					</Nav>
				</BodyContainer>
			</NavContainer>
		</nav>
	)
}

export default Navigation;
