import styled from 'styled-components';

import Wetland from '../../assets/images/wetland1.jpg';

const WetlandImg = styled.img`
    width: 100%;
`

const ImgBanner = styled.div`
    position: absolute;
    z-index: 1;
    background: rgba(250, 250, 250, 0.5);
    padding: 70px;
    width: 100%;
    text-align: center;
    font-size: 70px;
    top: 200px;
    color: #000;
    font-weight: 300;
`
const ContentContainer = styled.div`
    position: relative;
    padding: 25px 5%;
`
const Title = styled.h1`
    font-size: 30px;
    font-weight: 300;
    color: #000;
    text-align: center;
`
const Subtext = styled.div`
    font-size: 20px;
    font-weight: 300;
    color: #000;
    text-align: center;

    ul {
        margin-top: 10px;
        list-style-position: inside;
    }
`

function Home() {
    return (
        <div>
            <div style={{height: '600px', overflow: 'hidden'}}>
                <WetlandImg src={Wetland} />
                <ImgBanner>p2p restoration. | envArt.</ImgBanner>
            </div>
            <ContentContainer>
                <Title>The Model</Title>
                <Subtext>NFTs that fund the work of individual wetland restoration practicioners. Wetlands are amazing both in terms of natural beauty and planet health. The CryptoWetlands DAO produces NFT art based on wetlands. 95-98% of the procedes goes to the DAO which then distributes the funds to wetland restoration practicioners to fund work for the coming year. 2-5% of the proceeds go to the NFT artists and up to 3% goes to the wetland practicioners who provided the raw footage used in the Artwork to incentivize good work and create a positive feedback loop. Practicioners are required to provide the DAO with "Proof-of-Wetland" footage upon completion of a project funded by CryptoWetlands, and the DAO creates new NFT art from these real life projects to keep the cycle going.</Subtext>
            </ContentContainer>
            <ContentContainer>
                <Title>Why Is This Better than Donating to a Traditional Non-Profit?</Title>
                <Subtext>Traditional Non-Profits are great! However traditional non-profits are inefficient and create unnessary overhead that consume resources. Often times individual practicioners are at the mercy of large organizations and have to fight through beuracracy to make change. We want to empower individual restoration workers, and hopefully create financial incentive to grow the number of practicioners making change right now. Web3 enables us to go peer-to-peer with grant funding to spur restoration specialists to take action, in a time when our planet needs it most. The NFTs will create a community feedback loop where practicioners produce art that can be used to fund future work. In addition, funders will recieve a work of art for your tax-deductable donation and NFT holders will be a part of the CryptoWetlands DAO. This model gives funders a direct way to fund impactful environmental work, where the funder has ownership of the project and the results via the DAO. It is time for Crypto to make real world impact.</Subtext>
            </ContentContainer>
            <ContentContainer>
                <Title>Why Wetlands</Title>
                <Subtext>
                    <div>
                        Wetlands provide many benefits and help fight and mitigate the effects of climate change. They are also a great place to start a restoration project. Wetland restoration projects can be low cost, and can produce relatively quick and impactful resutlts. Some of the benefits of Wetlands include:
                    </div>
                    <ul>
                        <li>Carbon Sinks</li>
                        <li>Localized Temperature Regulation</li>
                        <li>Drinking Water Security</li>
                        <li>Extreme Event Buffer such as Flooding or Drought</li>
                        <li>Oceanic Health</li>
                        <li>80+% of Animal Life depends on Wetlands</li>
                    </ul>
                </Subtext>
            </ContentContainer>
        </div>
    );
}

export default Home;