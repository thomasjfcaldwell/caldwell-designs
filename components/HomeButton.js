import React, { Component } from 'react';
import Link from 'next/link';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

import { HomeButtonContainer, HomeButtonText } from './Home/HomeStyle';

export default class HomeButton extends Component {
	render() {
		return (
			<div>
				<HomeButtonContainer>
					<Link href='/' passHref>
						<HomeButtonText>
							<a>
								Go To Home Page <BsFillArrowRightCircleFill size={10} />
							</a>
						</HomeButtonText>
					</Link>
				</HomeButtonContainer>
			</div>
		);
	}
}
