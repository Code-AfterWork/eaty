import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export const Footer = () => {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1',  position: 'fixed', bottom: 0, width: '100%' }}>
      <MDBContainer className='pt-2'>
        <section className='mb-2'>
          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='https://twitter.com/mosesmbadi'
            role='button'
          >
            <MDBIcon fab className='fa-twitter' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='https://www.linkedin.com/in/moses-mbadi-0b8500198/'
            role='button'
          >
            <MDBIcon fab className='fa-linkedin' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='https://github.com/Code-AfterWork'
            role='button'
          >
            <MDBIcon fab className='fa-github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center text-light p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)',}}>
        © 2023 Copyright: 
        <a className='text-light' href=''>
          CodeAfterWork
        </a>
      </div>
    </MDBFooter>
  );
}
