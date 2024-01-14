import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { OgretmenlerContext } from '../Context/OgretmenlerContext';
import './OgretmenlerListesi.css'

const OgretmenlerListesi = () => {
    const { ogretmenler } = useContext(OgretmenlerContext);

    return (
        <>
            <div className="container">
                {ogretmenler.map(ogretmen => (
                    <div key={ogretmen.id} className="card">
                        <img src={ogretmen.img} alt={ogretmen.name} />
                        <div className="card-header">{ogretmen.name}</div>
                        <div className="card-actions">
                            <Link to={`/ogretmen/${ogretmen.id}`}>Detay</Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default OgretmenlerListesi;