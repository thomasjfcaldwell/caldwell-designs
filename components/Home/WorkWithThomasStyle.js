import styled from 'styled-components';

export const Title = styled.h1`
	font-weight: 600;
	/* background-color: yellow; */
	@media only screen and (min-device-width: 320px) and (max-device-width: 424px) {
		font-size: 2.4em;
		padding-left: 10px;
		line-height: 0.9em;
	}
	@media only screen and (min-device-width: 425px) and (max-device-width: 480px) {
		font-size: 2.8em;
		line-height: 0.9em;
		padding-left: 17px;
	}

	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		padding-left: 10px;
		font-size: 2.3em;
		width: 40%;
		line-height: 0.9em;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		padding-left: 10px;
		font-size: 2.3em;
		width: 30%;
		line-height: 0.9em;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
	}
`;
export const Line = styled.div`
	background-color: #e98074;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		width: 200px;
		height: 2px;
		margin-top: -5px;
		margin-left: 15px;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		width: 210px;
		height: 2px;
		margin-top: -5px;
		margin-left: 12px;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		width: 200px;
		height: 2px;
		margin-top: -10px;
		margin-left: 10px;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
		width: 430px;
		height: 3px;
		background-color: #e98074;
		margin: 0px 0 0 90px;
	}
`;
export const WorkWithThomasWrapper = styled.div`
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
		display: flex;
		flex-direction: column;
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		flex-direction: row;
		width: 100%;
		flex-wrap: nowrap;
	}
	@media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
		display: flex;
		flex-direction: row;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
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
		margin: 4em auto;
		/* background-color: lightsteelblue; */
		
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
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
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
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
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
	}
`;

export const Red = styled.div`
	width: 30px;
	height: 2px;
	background-color: #e98074;
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

export const BlackContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
	}
	@media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
		display: flex;
		justify-content: center;
		align-items: center;
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
		width: 350px;
		height: 2px;
		background-color: #8e8d8a;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
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
		width: 50%;
		margin: 2em 0;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
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
		font-size: 0.8em;
		text-align: center;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
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
		font-size: 0.9em;
		border-radius: 30px 30px 0 0;
	}
	@media only screen and (min-device-width: 1025px) and (max-device-width: 1280px) {
	}
	@media only screen and (min-device-width: 1281px) and (max-device-width: 1980px) {
	}
`;
