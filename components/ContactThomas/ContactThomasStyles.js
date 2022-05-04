import styled from 'styled-components';

export const ContactThomasContainer = styled.section`
	display: flex;
	width: 100%;
	/* background-color: pink; */
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const ContactThomasTitleContainer = styled.div`
	padding-block: 0.5rem;
`;
export const ContactThomasTitle = styled.h2`
	font-size: 2rem;
`;
export const ContactThomasSocialMediaContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
`;
export const ContactThomasSocialMediaLink = styled.a`
	padding-block: 1rem;
	color: white;
	text-decoration: none;
	:hover {
		text-decoration: underline;
	}
`;

export const SocialMediaIcon = styled.div`
	display: flex;
	justify-content: center;
`;

export const SocialTextContainer = styled.div`
	padding-block: 0.4rem;
`;

export const SocialMediaTitle = styled.h5`
	text-transform: uppercase;
	font-weight: 100;
	letter-spacing: 0.5px;
`;
