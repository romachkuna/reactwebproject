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


const Tos = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Title>
                    TERMS AND SERVICES.
                </Title>
            </Left>
                <InfoContainer>
                    <Desc>
                    Website Terms and Conditions of Use
                    </Desc>
                    <Name>
                    1. Terms
                    </Name>
                    <Desc>
                    By accessing this Website, accessible from NORF.GE, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.
                    </Desc>
                    <Name>
                    2. Use License
                    </Name>
                    <Desc>
                    Permission is granted to temporarily download one copy of the materials on COS's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                    </Desc>
                    <Desc>
                    modify or copy the materials;
                    </Desc>
                    <Desc>
                    use the materials for any commercial purpose or for any public display;
                    </Desc>
                    <Desc>
                    attempt to reverse engineer any software contained on COS's Website;
                    </Desc>
                    <Desc>
                    remove any copyright or other proprietary notations from the materials; or
                    </Desc>
                    <Desc>
                    transferring the materials to another person or "mirror" the materials on any other server.
                    </Desc>
                    <Desc>
                    This will let COS to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format. These Terms of Service has been created with the help of the Terms Of Service Generator.
                    </Desc>
                    <Name>
                    3. Disclaimer
                    </Name>
                    <Desc>
                    All the materials on COS’s Website are provided "as is". COS makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, COS does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.
                    </Desc>
                    <Name>
                    4. Limitations
                    </Name>
                    <Desc>
                    COS or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on COS’s Website, even if COS or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.
                    </Desc>
                    <Name>
                    5. Revisions and Errata
                    </Name>
                    <Desc>
                    The materials appearing on COS’s Website may include technical, typographical, or photographic errors. COS will not promise that any of the materials in this Website are accurate, complete, or current. COS may change the materials contained on its Website at any time without notice. COS does not make any commitment to update the materials.
                    </Desc>
                    <Name>
                    6. Links
                    </Name>
                    <Desc>
                    COS has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by COS of the site. The use of any linked website is at the user’s own risk.
                    </Desc>
                    <Name>
                    7. Site Terms of Use Modifications
                    </Name>
                    <Desc>
                    COS may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.
                    </Desc>
                    <Name>
                    8. Your Privacy
                    </Name>
                    <Desc>
                    Please read our Privacy Policy.
                    </Desc>
                    <Name>
                    9. Governing Law
                    </Name>
                    <Desc>
                    Any claim related to COS's Website shall be governed by the laws of ge without regards to its conflict of law provisions.
                    </Desc>
                </InfoContainer>
        </Wrapper>
    </Container>
  )
}

export default Tos