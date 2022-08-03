import styled from 'styled-components';

export const AboutContainer = styled.div`
	display: grid;
	width: 100%;
	grid-area: 1/2/4/3;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 50px minmax(150px, 275px) 50px;
	margin: 1.5rem auto;
`;

{
	/*  About Title styles */
}

export const AboutTitleContainer = styled.div`
	grid-area: 1/1/2/3;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const AboutTitle = styled.h2`
	font-size: 2.2rem;
`;

{
	/* About Title styles End */
}

{
	/*  About Image styles */
}

export const AboutImageContainer = styled.div`
	grid-area: 2/1/3/2;
	position: relative;
	display: grid;
	align-items: center;
	justify-items: center;
`;

export const AboutImage = styled.img`
	width: 90%;
	@media ${(props) => props.theme.breakpoints.lg} {
		width: 80%;
	}
`;

{
	/*  About Image styles End */
}
{
	/*  About Text styles */
}
export const AboutTextContainer = styled.div`
	grid-area: 2/2/3/3;
	display: grid;
	align-items: center;
	justify-items: center;
`;

export const AboutText = styled.p`
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.6;
	margin: 0 0.5rem;
	@media ${(props) => props.theme.breakpoints.xxs} {
		font-size: 0.85rem;
		line-height: 1.5;
	}
	@media ${(props) => props.theme.breakpoints.xs} {
		font-size: 0.9rem;
		line-height: 1.7;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 0.9rem;
	}
	@media ${(props) => props.theme.breakpoints.lg} {
		font-size: 0.95rem;
	}
`;

{
	/*  About Text styles End */
}

{
	/*  About Link styles */
}

export const AboutLinkContainer = styled.div`
	grid-area: 3/1/4/3;
	display: grid;
	align-items: center;
	justify-items: center;
`;
export const AboutLink = styled.a`
	font-size: 0.5rem;
	border: 1px ${(props) => props.theme.colors.secondary} solid;
	border-radius: 0.3rem;
	padding: 0.4rem 1rem;
	text-transform: uppercase;
`;
