import styled from 'styled-components';

export const WorkWithThomasWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		flex-direction: column;
		background-color: pink;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		/* flex-direction: column; */
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		/* flex-direction: row;
		flex-wrap: nowrap;
		margin: 2em auto; */
		background-color: pink;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		/* flex-direction: row;
		flex-wrap: nowrap;
		margin: 2em auto; */
		background-color: green;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		/* background-color: pink; */
		background-color: blue;
	}
`;

export const ContentContainer = styled.div`
	display: flex;

	@media only screen and (min-device-width: 300px) and (max-device-width: 480px) {
		width: 100%;
		flex-direction: column;
		align-items: center;
		margin: 2em 0;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		flex-direction: column;
		align-items: center;
		margin: 2em auto;
		/* background-color: blue; */
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		flex-direction: column;
		align-items: center;
		width: 20%;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		flex-direction: column;
		align-items: center;
		margin: 2.5em auto;
		width: 20%;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 4080px) {
		flex-direction: column;
		align-items: center;
		margin: 5em auto;
		width: 20%;
	}
`;

export const StepContainer = styled.div`
	display: flex;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		margin-top: 1em;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		margin-top: 1em;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		margin: 1em auto;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 4080px) {
		margin: 0.5em auto;
	}
`;

export const Step = styled.h5`
	text-align: center;
	font-weight: 600;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
	}
`;

export const RedContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 4080px) {
		margin: 1em auto;
	}
`;

export const Red = styled.div`
	height: 2px;
	background-color: #e98074;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		width: 30px;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		width: 30px;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		width: 30px;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		width: 30px;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 4080px) {
		width: 50px;
	}
`;

export const BlackContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
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

export const Black = styled.div`
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		width: 150px;
		height: 2px;
		background-color: #8e8d8a;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		width: 350px;
		height: 2px;
		background-color: #8e8d8a;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		width: 35px;
		height: 2px;
		background-color: #8e8d8a;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		width: 35px;
		height: 2px;
		background-color: #8e8d8a;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		width: 50px;
		height: 2px;
		background-color: #8e8d8a;
	}
`;

export const DescriptionContainer = styled.div`
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		width: 90%;
		display: flex;
		justify-content: center;
		margin: 1em 0;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		width: 50%;
		margin: 2em 0;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		width: 85%;
		margin: 2em 0;
		height: 80px;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		width: 90%;
		margin: 1em 0;
		height: 100px;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 3080px) {
		width: 75%;
		margin: 1em 0;
		height: 180px;
	}
`;

export const Description = styled.p`
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		font-size: 0.6em;
		text-align: center;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		font-size: 0.6em;
		text-align: center;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		font-size: 0.5em;
		text-align: center;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		font-size: 0.6em;
		text-align: center;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 3080px) {
		font-size: 0.9em;
		text-align: center;
	}
`;

export const HeadlineContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
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

export const Headline = styled.p`
	background-color: #e85a4f;
	color: white;
	font-weight: 300;
	letter-spacing: 0.06em;
	text-align: center;
	padding: 0.5em 2em;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		font-size: 0.5em;
		border-radius: 25px 25px 0 0;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		font-size: 0.7em;
		border-radius: 30px 30px 0 0;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		font-size: 0.6em;
		border-radius: 30px 30px 0 0;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
		font-size: 0.5em;
		border-radius: 30px 30px 0 0;
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 3080px) {
		font-size: 0.9em;
		border-radius: 30px 30px 0 0;
	}
`;
