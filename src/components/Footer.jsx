import React from 'react'
import styled from 'styled-components'
import {Button} from '../styles/Button'
import {NavLink} from 'react-router-dom'

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>

          <div>
            <NavLink to='/'>
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
`;

export default Footer