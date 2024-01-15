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