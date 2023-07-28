import React from 'react'
import styled from 'styled-components'
import { Button } from './styles/Button';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <Wrapper>
        <div>
            <img src="../images/error.svg" alt="error"  />
            
        </div>
        <div>
            <NavLink to='/home'>
                <Button className='btn'>Go Back</Button>
            </NavLink>
        </div>
    </Wrapper>
    )
}

const Wrapper = styled.section`
    div{
       display: flex;
       justify-content: center;
       align-items: center;
    }
    
    .btn{
        margin: 3rem 0;
    }
`;

export default Error