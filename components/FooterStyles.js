import styled from 'styled-components';

export const HeadlineContainer = styled.div`
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	/* background-color: goldenrod; */
	margin: 20px 20px;
`;

export const Headline = styled.h1`
	font-weight: 600;
	font-size: 1.68em;
`;

export const ContactDetailsContainer = styled.div``;

export const FooterWrapper = styled.div`
	@media only screen and (min-device-width: 300px) and (max-device-width: 767px) {
		display: flex;
		flex-direction: column;
	}
`;

export const ContactContainer = styled.div`
	/* background: violet; */
`;

export const SocialMediaContainer = styled.div`

	@media only screen and (min-device-width: 300px) and (max-device-width: 767px) {
		display: flex;
		justify-content: space-between;
		padding: 2em;
	}
`;

export const LinkContainer = styled.div`
	@media only screen and (min-device-width: 300px) and (max-device-width: 767px) {
	}
`;

export const LinkText = styled.a`
	@media only screen and (min-device-width: 300px) and (max-device-width: 767px) {
	}
`;
