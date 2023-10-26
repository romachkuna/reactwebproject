import { FavoriteBorderOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from "styled-components";

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items:center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`

const Price = styled.div`
    top: 0;
    left: 0;
    color: white;
    background-color: black;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`

const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width: 280px;
    height: 350px; 
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`
const Image = styled.img`
    height: 75%;
    z-index: 2;

`

const Icon = styled.div`
    width: 40px;
    heighT: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition:all 0.5s ease;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`

const Product = ({item}) => {
  return (
    <Container>
        <Circle />
        <Image src={item.img} />
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>

            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
        <Price>
            <strong>
            <p>
                {item.price}
            </p>
            </strong>
        </Price>
        </Info>
    </Container>
    
  )
}

export default Product