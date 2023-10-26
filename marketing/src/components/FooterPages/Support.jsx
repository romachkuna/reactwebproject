import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    top: 200px;
    position: relative;
    background-color: white;
    overflow: hidden;
`
const Left = styled.div`
    align-items: center;
    text-decoration: none;
`
const Wrapper = styled.div`
    padding: 10px 200px;
    justify-content: space-between;
    align-items: center;
`
const Title = styled.h1`
    color:                      ;
    font-size: 50px;
`
const InfoContainer = styled.div`
    padding: 10px;
`
const Desc = styled.p`
    margin: 10px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Name = styled.h1`
    font-weight:bold;
    font-size: 20px;
`


const Support = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Title>
                    INFORMATION ABOUT OUR CUSTOMER SUPPORT.
                </Title>
            </Left>
                <InfoContainer>
                    <Name>
                        There are several ways you can contact us!
                    </Name>
                    <Desc>
                        To contact us using chatbot you have to click the chatbot, Log-in with your account and send a message
                    </Desc>
                    <Name>
                        If you want us to send an email then visit this page
                    </Name>
                    <Link to='/Contact' style={{textDecoration: 'none', color: "black"}}>
                    <Desc>
                        Contact Info
                    </Desc>
                    </Link>
                </InfoContainer>
        </Wrapper>
    </Container>
  )
}

export default Support