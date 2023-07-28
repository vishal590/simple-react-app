import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/red.png'
import Navbar from './Navbar'
import { styled } from 'styled-components';


const Header = () => {
  return (
    <MainHeader>
      <NavLink to='/' >
        <img src={Logo} alt="logo" style={{width:'100%;', height:'100%'}} className='logo' />
      </NavLink>
      <Navbar />
    </MainHeader>
  )
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: auto;
    max-width: 3rem;
  }
`

export default Header