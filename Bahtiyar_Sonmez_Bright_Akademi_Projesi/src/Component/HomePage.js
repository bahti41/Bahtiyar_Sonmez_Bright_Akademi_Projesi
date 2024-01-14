import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <>
            <div className="bg-container">
                <img src="/Img/bright academy2.png" alt="Bright Academy" className="bg-image" />
                <div className="overlay">
                    <h1 className="title">Bright Academy</h1>
                    <p className="welcome">Hoşgeldiniz</p>
                    <div className="buttons">
                        <button type="button" className="btn-about">Hakkımızda</button>
                        <button type="button" className="btn-contact">İletişim</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;

{/* <div className='bg-primary'>
    <header>
        <Card.Img src='Img/bright academy2.png' />
        <div style={{ height: "95vh" }} className="bg-primary text-white d-flex justify-content-center align-items-center flex-column">
            <h1 className='display-4 text-center text-white'>Bright Akademy</h1>
            <p className='display-4 text-center text-white'>Hoşgeldiniz</p>
            <button type="button" className="mt-2 btn btn-white btn-lg">HAKKIMIZDA</button>
            <button type="button" className="mt-3 btn btn-white btn-lg">İLETİŞİM</button>
        </div>
    </header>
</div> */}