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


const Cookies = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Title>
                    INFORMATION ABOUT COOKIES.
                </Title>
            </Left>
                <InfoContainer>
                   <Name>
                   HOW NORF USES COOKIES.
                   </Name>
                   <Desc>
                   This page describes the types of cookies and other technologies used by Norf. It also explains how Norf and our partners use cookies in advertising. Cookies are small pieces of text sent to your browser by a website you visit. They help that website remember information about your visit, which can both make it easier to visit the site again and make the site more useful to you. Other technologies, including unique identifiers used to identify a browser, app or device, pixels, and local storage, can also be used for these purposes. Cookies and other technologies as described throughout this page can be used for the purposes described below.
                   </Desc>
                   <Name>
                   TYPES OF COOKIES AND OTHER TECHNOLOGIES USED BY NORF
                   </Name>
                   <Desc>
                   Some or all of the cookies or other technologies described below may be stored in your browser, app, or device. To manage how cookies are used, including rejecting the use of certain cookies, you can visit g.co/privacytools. You can also manage cookies in your browser (though browsers for mobile devices may not offer this visibility). Other technologies used to identify apps and devices may be managed in your device settings or in an app’s settings.
                   </Desc>
                   <Name>
                   Functionality
                   </Name>
                   <Desc>
                   Cookies and other technologies used for functionality allow you to access features that are fundamental to a service. Things considered fundamental to a service include preferences, like your choice of language, information relating to your session, such as the content of a shopping cart, and product optimizations that help maintain and improve that service. Some cookies and other technologies are used to maintain your preferences. For example, most people who use Norf services have a cookie called ‘NID’ or ‘ENID’ in their browsers, depending on their cookies choices. These cookies are used to remember your preferences and other information, such as your preferred language, how many results you prefer to have shown on a search results page (for example, 10 or 20), and whether you want to have Norf's SafeSearch filter turned on. Each ‘NID’ cookie expires 6 months from a user’s last use, while the ‘ENID’ cookie lasts for 13 months. Cookies called ‘VISITOR_INFO1_LIVE’ and ‘YEC’ serve a similar purpose for Norftube and are also used to detect and resolve problems with the service. These cookies last for 6 months and for 13 months, respectively.
                   </Desc>
                </InfoContainer>
        </Wrapper>
    </Container>
  )
}

export default Cookies