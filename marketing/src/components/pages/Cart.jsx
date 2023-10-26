import React from 'react'
import Navbar from '../newNavbar/Navbar'
import styled from 'styled-components'
import Footer from '../Footer'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from '../../responsive';

const Container = styled.div`

`
const Wrapper = styled.div`
    padding:20px;
    ${mobile({ padding: "10px" })}
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
    padding: 35px;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`

const TopTexts = styled.div`
    ${mobile({ display: "none" })}
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px; 
`

const Bottom = styled.div`
    display:flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`
const ProductDetail = styled.div`
    flex:2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 60vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=> props.type === "total" && "24px"};
`
const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.span`

`
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`

const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Wrapper>
            <Title>
                YOUR BAG.
            </Title>
            <Top>
                <TopButton>CONTINUE SHOPPING.</TopButton>
                <TopTexts>
                    <TopText>
                        SHOPPING BAG.(2)
                    </TopText>
                    <TopText>
                        WISHLIST.(0)
                    </TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW.</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://cdn11.bigcommerce.com/s-ss31ap/images/stencil/1280x1280/products/7416/32761/GA01188-US__78879.1571191474.1280.1280__18263__37873.1630472827.jpg?c=2" />
                            <Details>
                                <ProductName><b>PRODUCT:</b> GOOGLE PIXEL 6.</ProductName>
                                <ProductId><b>ID:</b> 305002376399</ProductId>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>1</ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>$1000</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetail>
                            <Image src="https://static.super-shop.com/1279977-vans-old-skool-shoes-primary-check.jpg?w=960" />
                            <Details>
                                <ProductName><b>PRODUCT:</b> VANS OLD SKOOL.</ProductName>
                                <ProductId><b>ID:</b> 24156023000</ProductId>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>1</ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>$100</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>
                        ORDER SUMMARY.
                    </SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>
                            SUBTOTAL.
                        </SummaryItemText>
                        <SummaryItemPrice>
                            $1100
                        </SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>
                            ESTIMATED SHIPPING.
                        </SummaryItemText>
                        <SummaryItemPrice>
                            50$
                        </SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>
                            SHIPPING DISCOUNT.
                        </SummaryItemText>
                        <SummaryItemPrice>
                            $ -25
                        </SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>
                            TOTAL.
                        </SummaryItemText>
                        <SummaryItemPrice>
                            $1100
                        </SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW.</Button>
                </Summary>
            </Bottom>
        </Wrapper>
    </Container>
  )
}

export default Cart