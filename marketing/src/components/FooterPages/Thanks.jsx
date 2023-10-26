import React from 'react'
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


const Thanks = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Title>
                    THANK YOU!.
                </Title>
            </Left>
                <InfoContainer>
                    <Name>
                        Thank you for subscribing to our site and supporting it!
                    </Name>
                    <Desc>
                        Except exceptional sales and offers in the near future! 
                    </Desc>
                </InfoContainer>
        </Wrapper>
    </Container>
  )
}

export default Thanks