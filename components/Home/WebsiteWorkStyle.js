import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	margin: auto;
	align-items: flex-start;
	margin-top: 2em;
`;

export const CommerceContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	width: 50%;
`;

export const CommerceHeaderContainer = styled.div`
	display: flex;
	justify-content: center;
`;

export const CommerceHeaderTextContainer = styled.div`
	margin: 0 2em;
	display: flex;
`;

export const CommerceHeaderText = styled.h2`
	text-align: center;
	margin-top: -10px;
	background-color: #727272;
	padding: 0.25em 1em;
	border-radius: 25px;
	color: white;
	font-weight: 300;
	text-transform: uppercase;
	letter-spacing: 0.09em;
`;

export const CommerceImagesContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const PicnicContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	width: 50%;
`;

export const PicnicHeaderContainer = styled.div`
	display: flex;
	margin: 2em 0;
`;

export const PicnicHeader = styled.h1`
	text-align: center;
	background-color: #e85a4f;
	color: white;
	font-weight: 500;
	text-transform: uppercase;
	padding: 0.25em 1em;
	border-radius: 0 25px 0 25px;
`;

export const PicnicGalleryContainer = styled.div``;

export const PicnicImageContainer = styled.div`
	display: flex;
`;

export const SiteLinkContainer = styled.div`
	display: flex;
	align-items: center;
`;
