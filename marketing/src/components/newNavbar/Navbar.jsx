import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import styled from 'styled-components';
import { Badge } from '@material-ui/core';
import { mobile } from '../../responsive';
import { Link } from 'react-router-dom';
import Axios from "axios";
import { textFromStorage } from '../log-in/log-in';
 


const Container = styled.div`
    height: 60px;
    position: fixed;
    background-color: white;
    width: 100%;
    z-index: 1030;
    ${mobile({ height: "50px"})}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "10px 0px"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    text-decoration: none;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    display: grid;
    ${mobile({ display: "none"})}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
    ${mobile({ width: "50px"})}
`
const Result = styled.div`
`


const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "15px"})}
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center"})}
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft:"10px"})}
`


const Navbar = () => {
  
  return (
    <Container>
        <Wrapper>
            <Left>
                <SearchContainer>
                    <Input placeholed="Search"/>
                    <Search style={{color: "gray", fontSize: 16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>
                    Norf. <i class="fa-solid fa-arrows-to-eye"></i>
                </Logo>
            </Center>
            <Right>
                <MenuItem>
                <Link to='/' style={{textDecoration: 'none', color: "black"}}>
                HOME.
                </Link>
                </MenuItem>
                <MenuItem>
                <Link to='/Products' style={{textDecoration: 'none', color: "black"}}>
                PRODUCTS. 
                </Link>
                </MenuItem>
                <MenuItem>
                <Link to='/Aboutpage' style={{textDecoration: 'none', color: "black"}}>
                ABOUT US.
                </Link>
                </MenuItem>
                <MenuItem>
                <Link to='/Register' style={{textDecoration: 'none', color: "black"}}>
                SIGN UP.
                </Link>
                </MenuItem>
                <Link to='/SecretAdmin' style={{textDecoration: 'none', color: "black"}}>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar