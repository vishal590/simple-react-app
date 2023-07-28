import React from 'react'
import { styled } from 'styled-components'

const Contact = () => {
  return (
    <Wrapper className='common-heading'>
      <h2>Feel free to contact us.</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122283.68871154086!2d74.15629344793524!3d16.708616589313447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1000cdec07a29%3A0xece8ea642952e42f!2sKolhapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1690528977841!5m2!1sen!2sin" width="100%" height="450" style={{border:'0'}} allowFullScreen="" loading="lazy" refererpolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/mdoraonz" method='POST' className='contact-inputs'>
            <input
              type="text"
              name='username' 
              placeholder='username' 
              autoComplete='off'
              required 
            />

            <input 
              type="email"
              name="Email"
              placeholder='Email'
              autoComplete='off'
              required  
            />

            <textarea name='message' cols='30' rows='6' autoComplete='off'></textarea>

            <input type="submit" value='send' />
          
          </form>
        </div>
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;

  .container{
    margin-top: 6rem;
    text-align: center;

    .contact-form{
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

export default Contact