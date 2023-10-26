import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    background-color: white;
    overflow: hidden;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Wrapper = styled.div`
    padding: 50px 450px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Title = styled.h1`
    color: black;
    font-size: 70px;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 10px;
`

const Location = () => {
  return (
    <Container>
      <Wrapper>
        <Center>  
          <iframe width="589" height="331" id="gmap_canvas" src="https://maps.google.com/maps?q=Kutaisi%20International%20University&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          <Title>
            DIRECTIONS.
          </Title>
          <InfoContainer>
            Visit our store on weekdays from 10A.M. to 8P.M. and on weekends from 10A.M. to 6P.M.
          </InfoContainer>
        </Center>
      </Wrapper>
    </Container>
  )
}

export default Location