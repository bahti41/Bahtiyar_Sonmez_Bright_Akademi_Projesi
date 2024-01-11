import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { OgretmenlerContext } from '../Context/OgretmenlerContext';
import './Styles.css'

const OgretmenlerListesi = () => {
    const { ogretmenler } = useContext(OgretmenlerContext);

    return (
        <div>
            <h1>Öğretmenler Listesi</h1>
            {ogretmenler.map(ogretmen => (
                <div key={ogretmen.id} className="card">
                    <img src={ogretmen.img} alt={ogretmen.name} style={{ maxWidth: '100%', height: 'auto' }} />
                    <div className="card-header">{ogretmen.name}</div>
                    <div className="card-actions">
                        <Link to={`/ogretmen/${ogretmen.id}`}>Detay</Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OgretmenlerListesi;