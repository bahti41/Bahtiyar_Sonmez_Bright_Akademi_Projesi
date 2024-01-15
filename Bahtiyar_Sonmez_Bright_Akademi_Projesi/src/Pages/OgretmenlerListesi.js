import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { OgretmenlerContext } from '../Context/OgretmenlerContext';
import './OgretmenlerListesi.css'

const OgretmenlerListesi = () => {
    const { ogretmenler } = useContext(OgretmenlerContext);

    return (
        <>
            <h1 className='d-flex justify-content-center py-5 mt-5'>Uzman Eğitmenlerimizle Tanışın<br /> Teknolojiyi Şekillendiren Zihinler</h1>
            <div className="container">
                {ogretmenler.map(ogretmen => (
                    <div key={ogretmen.id} className="card my-4 m-auto ">
                        <div className='row g-0'>
                            <div className='col ps-2'>
                                <img src={ogretmen.img} alt={ogretmen.name} />
                                <div className="card-header">{ogretmen.name}</div>
                                <div className="card-actions">
                                    <Link to={`/ogretmen/${ogretmen.id}`}>Detay</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default OgretmenlerListesi;