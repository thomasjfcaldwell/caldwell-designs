import styled from 'styled-components';

export const SectionHeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		justify-content: center;
		margin: 3em auto;
		align-items: center;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		margin: 2em;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
	}
`;

export const SectionHeader = styled.h2`
	text-transform: uppercase;
	font-size: 1.3em;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		margin-top: -10px;
		padding: 5px;
		letter-spacing: 0.1em;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		margin-top: -10px;
		padding: 5px;
		letter-spacing: 0.1em;
		line-height: 10px;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		margin-left: 14px;
		letter-spacing: 0.1em;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		margin-left: 14px;
		letter-spacing: 0.1em;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		margin-left: 20px;
		letter-spacing: 0.1em;
	}
`;

export const Line = styled.div`
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		height: 1px;
		width: 10em;
		background-color: #e85a4f;
		margin-top: -5px;
		padding: 1px;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		height: 1px;
		width: 17em;
		background-color: #e85a4f;
		margin-top: -5px;
		margin-left: 5px;
		padding: 1px;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		height: 1px;
		width: 16em;
		background-color: #e85a4f;
		margin-top: -5px;
		margin-left: 15px;
		padding: 1px;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		height: 1px;
		width: 15.5em;
		background-color: #e85a4f;
		margin-top: -5px;
		margin-left: 15px;
		padding: 1px;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		height: 1px;
		width: 15.5em;
		background-color: #e85a4f;
		margin-top: -5px;
		margin-left: 20px;
		padding: 1px;
	}
`;

export const Wrapper = styled.div`
	display: flex;

	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		flex-direction: column;
		flex-wrap: wrap;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		align-items: flex-start;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		margin: 3em auto;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		margin: 3em auto;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		margin: 4em auto;
	}
`;

export const Container = styled.div`
	width: 50%;
	flex-direction: column;
	align-items: center;
	display: flex;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		justify-content: center;
		width: 100%;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		width: 50%;
		background-color: honeydew;
		padding: 4em;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		padding: 50px;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		/* background-color: hotpink; */
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		padding: 0 5em;
	}
`;

export const SiteHeaderContainer = styled.div`
	display: flex;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
	}
`;

export const SiteHeader = styled.p`
	color: white;
	font-weight: 500;
	background-color: #e85a4f;
	border-radius: 0 2em 0 2em;
	padding: 0.5em 2em;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		font-size: 0.6em;
		padding: 0.5em 1em;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		font-size: 0.6em;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		font-size: 0.7em;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		font-size: 0.7em;
		margin-top: 1.5em;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
	}
`;

export const ImageContainer = styled.div`
	display: flex;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		width: 100%;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
	}
`;

export const TextContainer = styled.div`
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		width: 90%;
		margin-top: 3em;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		width: 100%;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		width: 80%;
		margin: 10px auto;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
	}
`;

export const Text = styled.p`
	font-size: 0.8em;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		font-size: 0.6em;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		font-size: 0.6em;
		text-align: center;
		margin: 10px 0;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		font-size: 0.6em;
		margin: 30px 0px;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		font-size: 0.8em;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
	}
`;

export const SiteLinkContainer = styled.div`
	display: flex;
	align-items: center;
	margin: 2em 0;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		margin: 1em 0;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
	}
`;

export const LinkText = styled.a`
	display: flex;
	align-items: center;
	text-decoration: none;
	color: #e98074;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		font-size: 0.5em;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		font-size: 0.6em;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
	}
`;
