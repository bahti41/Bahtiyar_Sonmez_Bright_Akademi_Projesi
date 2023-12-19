import React from 'react';
import { MDBCard, MDBCardImage } from 'mdb-react-ui-kit';
import About from '../About/About';
import { Container } from 'react-bootstrap';




const HomePage = () => {
    return (
        <>
            <Container >
                <div className='bg-primary'>

                    <MDBCard className='mb-3'>
                        <MDBCardImage position='top' src='Img/bright academy2.png' alt='...' />

                        <div style={{ height: "95vh" }} className="bg-primary text-white d-flex justify-content-center align-items-center flex-column">
                            <h1 className='display-4 text-center text-white'>Bright Akademi</h1>
                            <p className='display-4 text-center text-white'>Hoşgeldiniz</p>
                            <button type="button" class=" mt-2 btn btn-white btn-lg" data-mdb-ripple-init>APPLY</button>
                            <button type="button" class=" mt-3 btn btn-white btn-lg" data-mdb-ripple-init>CONTACY ME</button>
                        </div>
                    </MDBCard>
                </div >
            </Container>
        </>
    )
}

export default HomePage;