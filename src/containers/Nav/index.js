import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = styled.div`
    background-color: #fafafa;
    padding: 10px 5%;
    position: fixed;
    width: 100%;
    height: 60px;
    z-index: 2;
`
const NavItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    display: inline-block;
    padding: 10px 10px 3px 10px;
    color: black;
    font-weight: 600;
    line-height: 1.5;

    &:hover {
        color: #001529;
        border-bottom: 2px solid #bcceda;
    }
`
const ConnetButton = styled.div`
    border-radius: 25px;
    padding: 5px;
    border: 1px solid #8ab7d6;
    cursor: pointer;
    text-align: center;
    margin-top: 3px;

    &:hover {
        color: #8ab7d6;
    }
`

// horizontal navbar react component
const Nav = () => {
    return (
        <NavContainer>
            <Row>
                <Col span={22}>
                    <Link to="/">
                        <NavItem>Home</NavItem>
                    </Link>
                    <Link to="/about">
                        <NavItem>About</NavItem>
                    </Link>
                    <Link to="/grants">
                        <NavItem>Grant Application</NavItem>
                    </Link>
                    <Link to="/dao">
                        <NavItem>DAO</NavItem>
                    </Link>
                    <Link to="/nft">
                        <NavItem>NFTs</NavItem>
                    </Link>
                    <Link to="/explorer">
                        <NavItem>Wetland Explorer</NavItem>
                    </Link>
                </Col>
                <Col span={2}>
                    <ConnetButton>Connect Wallet</ConnetButton> 
                </Col>
            </Row>
        </NavContainer>
    )
}

export default Nav