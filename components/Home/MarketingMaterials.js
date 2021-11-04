import {
	MarketingMaterialsContainer,
	FlyerContainer,
	EmailContainer,
	BannerContainer,
	HeaderContainer,
	Header,
} from '../Home/MarketingMaterialsStyle';

function MarketingMaterials() {
	return (
		<div>
			<MarketingMaterialsContainer>
				<FlyerContainer>
					<HeaderContainer>
						<Header>Flyers & Brochures</Header>
					</HeaderContainer>
				</FlyerContainer>
				<EmailContainer>
					<HeaderContainer>
						<Header>Email Blasts</Header>
					</HeaderContainer>
				</EmailContainer>
				<BannerContainer>
					<HeaderContainer>
						<Header>Web Banner</Header>
					</HeaderContainer>
				</BannerContainer>
			</MarketingMaterialsContainer>
		</div>
	);
}

export default MarketingMaterials;
