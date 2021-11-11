import styled from 'styled-components';

import Wetland from '../../assets/images/wetland2.jpg';

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

function About() {
    return (
        <div>
            <div style={{height: '600px', overflow: 'hidden'}}>
                <WetlandImg src={Wetland} />
            </div>
            <ContentContainer>
                <Title>Who we are</Title>
                <Subtext>CryptoWetlands is an experimental Non-Profit DAO. We believe that web3 is better than traditional means for organizing and empowering individuals. For the promise of crypto to be realized, we believe that efforts need to be made in translating crypto networks to real world applications. Many people care deeply about the planet and the climate. Many people have a sense of urgancy and want to help, but feel as though there is very little that they can do. CryptoWetlands goal is to empower funders and practicioners to make things happen now, be responsible and take ownership over their work, and translate the power of crypto to the environment.</Subtext>
                <br />
                <Subtext>We are also a group of artists. These NFTs aren't meant to be solely as a means to fundraise. We were inspired to create this project because wetlands are amazing to look at. We hope our NFTs are judged as art on their own merit and are not simply seen as a reciept for donating. Our goal is that people will want to display these pieces as standalone works.</Subtext>
            </ContentContainer>
            <ContentContainer>
                <Title>Organization</Title>
                <Subtext>CryptoWetlands has a USA based non-profit entity for accountability but functions as a DAO. The founders of the DAO are US based, and therefore have more expertise in wetland restoration in North America. We encourage people from all over the world, and with different restoration practices to join the DAO to help us more effectively judge applications, and as a DAO we give out grants to practicioners all over the world.</Subtext>
            </ContentContainer>
        </div>
    );
}

export default About;