import React from 'react';
import { Card } from 'react-bootstrap';

const HomePage = () => {
    return (
        <>
            <div className='bg-primary'>
                <header>
                    <Card.Img src='Img/bright academy2.png' />
                    <div style={{ height: "95vh" }} className="bg-primary text-white d-flex justify-content-center align-items-center flex-column">
                        <h1 className='display-4 text-center text-white'>Bright Akademy</h1>
                        <p className='display-4 text-center text-white'>Hoşgeldiniz</p>
                        <button type="button" className="mt-2 btn btn-white btn-lg">HAKKIMIZDA</button>
                        <button type="button" className="mt-3 btn btn-white btn-lg">İLETİŞİM</button>
                    </div>
                </header>
            </div>
        </>
    );
}

export default HomePage;