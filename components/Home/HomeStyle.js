import styled from 'styled-components';

export const Title = styled.h1`
	font-weight: 600;
	line-height: 0.8em;
	font-size: 3.9em;
	@media only screen and (min-width: 80px) and (max-width: 424px) {
		padding-left: 40px;
	}
	@media only screen and (min-width: 425px) and (max-width: 480px) {
		padding-left: 50px;
	}

	@media only screen and (min-width: 481px) and (max-width: 768px) {
		padding-left: 70px;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		padding-left: 80px;
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
		padding-left: 120px;
	}
	@media only screen and (min-width: 1281px) and (max-width: 1980px) {
		padding-left: 120px;
	}
`;

export const Line = styled.div`
	background-color: #e98074;

	@media only screen and (min-width: 80px) and (max-width: 424px) {
		width: 250px;
		height: 2px;
		margin-left: 47px;
		margin-top: -10px;
	}
	@media only screen and (min-width: 425px) and (max-width: 480px) {
		width: 256px;
		height: 2px;
		margin-left: 52px;
		margin-top: -11px;
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
		width: 256px;
		height: 2px;
		margin-left: 73px;
		margin-top: -10px;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		width: 250px;
		height: 2px;
		margin-left: 85px;
		margin-top: -10px;
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
		width: 250px;
		height: 2px;
		margin-top: -10px;
		margin-left: 126px;
	}
	@media only screen and (min-width: 1281px) and (max-width: 1980px) {
		width: 256px;
		height: 3px;
		background-color: #e98074;
		margin-top: -10px;
		margin-left: 120px;
	}
`;
export const Line1 = styled.div`
	background-color: #e98074;

	@media only screen and (min-width: 80px) and (max-width: 424px) {
		width: 250px;
		height: 2px;
		margin-left: 47px;
		margin-top:1px;	
	}
	@media only screen and (min-width: 425px) and (max-width: 480px) {
		width: 256px;
		height: 2px;
		margin-left: 52px;
		margin-top: 1px;
	}
	@media only screen and (min-width: 481px) and (max-width: 768px) {
		width: 256px;
		height: 2px;
		margin-left: 73px;
		margin-top: 1px;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		width: 250px;
		height: 2px;
		margin-left: 85px;
		margin-top: 1px;
	}
	@media only screen and (min-width: 1025px) and (max-width: 1280px) {
		width: 250px;
		height: 2px;
		margin-top: 1px;
		margin-left: 126px;
	}
	@media only screen and (min-width: 1281px) and (max-width: 1980px) {
		width: 256px;
		height: 3px;
		background-color: #e98074;
		margin-top: 1px;
		margin-left: 120px; 
	}
`;

export const TitleContainer = styled.div`
	width: 35%;
`;

export const Container = styled.div`
	margin: 2em auto;
`;
