import styled from 'styled-components';

export const SectionHeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media only screen and (min-width: 320px) and (max-width: 480px) {
		margin: 3em auto;
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
		justify-content: center;
		align-items: center;
		margin: 3em auto;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		justify-content: center;
		align-items: center;
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
		justify-content: center;
		align-items: center;
	}
	@media only screen and (min-width: 1281px) {
	}
`;

export const SectionHeader = styled.h2`
	text-transform: uppercase;
	@media only screen and (min-width: 320px) and (max-width: 480px) {
		margin-top: -10px;
		padding: 2px;
		letter-spacing: 0.1em;
		font-size: 1.3em;
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
		margin-top: -10px;
		letter-spacing: 0.1em;
		font-size: 1.9em;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		margin-left: 14px;
		letter-spacing: 0.1em;
		font-size: 2.3em;
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
		font-size: 2.3em;
		letter-spacing: 0.1em;
	}
	@media only screen and (min-width: 1281px) {
		letter-spacing: 0.1em;
		font-size: 2.3em;
	}
`;

export const Line = styled.div`
	@media only screen and (min-width: 320px) and (max-width: 480px) {
		height: 2px;
		width: 14em;
		background-color: #e85a4f;
		margin-top: -12px;
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
		height: 1px;
		width: 20em;
		background-color: #e85a4f;
		margin-top: -12px;
		padding: 1px;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		height: 2px;
		width: 23.2em;
		background-color: #e85a4f;
		margin-top: -12px;
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
		height: 2px;
		width: 25.4em;
		background-color: #e85a4f;
		margin-top: -12px;
	}
	@media only screen and (min-width: 1281px) {
		height: 2px;
		width: 25.4em;
		background-color: #e85a4f;
		margin-top: -7px;
	}
`;

export const Wrapper = styled.div`
	display: flex;

	@media only screen and (min-width: 320px) and (max-width: 480px) {
		flex-direction: column;
		flex-wrap: wrap;
		margin: 1em auto;
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
		align-items: flex-start;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		margin: 3em auto;
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
		margin: 3em auto;
	}
	@media only screen and (min-width: 1281px) {
		margin: 4em auto;
	}
`;

export const Container = styled.div`
	width: 50%;
	flex-direction: column;
	align-items: center;
	display: flex;
	@media only screen and (min-width: 320px) and (max-width: 480px) {
		justify-content: center;
		width: 100%;
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
		width: 50%;
		padding: 1.5em;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		padding: 50px;
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
		/* background-color: hotpink; */
	}
	@media only screen and (min-width: 1281px) {
		padding: 0 5em;
	}
`;

export const SiteHeaderContainer = styled.div`
	display: flex;
	@media only screen and (min-width: 320px) and (max-width: 480px) {
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
	}
	@media only screen and (min-width: 1281px) {
	}
`;

export const SiteHeader = styled.p`
	color: white;
	font-weight: 500;
	background-color: #e85a4f;
	border-radius: 0 2em 0 2em;
	padding: 0.5em 2em;
	@media only screen and (min-width: 320px) and (max-width: 480px) {
		font-size: 0.6em;
		padding: 0.5em 1em;
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
		font-size: 0.6em;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		font-size: 0.7em;
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
		font-size: 0.7em;
		margin-top: 1.5em;
	}
	@media only screen and (min-width: 1281px) {
	}
`;

export const ImageContainer = styled.div`
	display: flex;
	@media only screen and (min-width: 320px) and (max-width: 480px) {
		width: 100%;
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
	}
	@media only screen and (min-width: 1281px) {
	}
`;

export const TextContainer = styled.div`
	height: 2em;
	@media only screen and (min-width: 320px) and (max-width: 480px) {
		width: 90%;
		margin-top: 3em;
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
		width: 100%;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		height: 3em;
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
		width: 80%;
		margin: 10px auto;
	}
	@media only screen and (min-width: 1281px) {
	}
`;

export const Text = styled.p`
	font-size: 0.8em;
	@media only screen and (min-width: 320px) and (max-width: 480px) {
		font-size: 0.6em;
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
		font-size: 0.6em;
		margin: 10px 0;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		font-size: 0.6em;
		margin: 30px 0px;
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
		font-size: 0.8em;
	}
	@media only screen and (min-width: 1281px) {
	}
`;

export const SiteLinkContainer = styled.div`
	display: flex;
	align-items: center;
	margin: 2em 0;
	@media only screen and (min-width: 320px) and (max-width: 480px) {
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
	}
	@media only screen and (min-width: 1281px) {
	}
`;

export const LinkText = styled.a`
	display: flex;
	align-items: center;
	text-decoration: none;
	color: #e98074;
	font-size: 1rem;
	:hover {
		transition: all 0.5s ease-out;
		color: #727272;
		cursor: pointer;
	}
	@media only screen and (min-width: 320px) and (max-width: 480px) {
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
	}
	@media only screen and (min-width: 1281px) {
	}
`;

export const LinkToSitesContainer = styled.div`
	display: flex;
	height: 2rem;
	justify-content: center;
	align-items: center;
	@media only screen and (min-width: 320px) and (max-width: 480px) {
		margin: 1rem 0;
	}
`;

export const LinkToSites = styled.p`
	margin: 0;
	font-size: 1rem;
	padding: 0.75rem 1.5rem;
	background-color: #e98074;
	text-transform: uppercase;
	font-weight: 400;
	color: white;
	border-radius: 0.5rem;
	letter-spacing: 0.05rem;
	border: 0.1rem solid white;
	filter: drop-shadow(0 0 0.25rem rgba(0, 0, 0, 0.4));
	:hover {
		transition: all 1.5s ease-out;
		color: #e98074;
		background-color: white;
		border: 0.1rem solid #e98074;
		cursor: pointer;
	}
	@media only screen and (min-width: 320px) and (max-width: 480px) {
		font-size: 0.7rem;
	}
`;
