import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { OgretmenlerContext } from '../Context/OgretmenlerContext';
import './Styles.css'

const OgretmenDetay = () => {
    const { id } = useParams();
    const { ogretmenler } = useContext(OgretmenlerContext);
    const ogretmen = ogretmenler.find(o => o.id.toString() === id);

    if (!ogretmen) {
        return <div>Öğretmen bulunamadı.</div>;
    }

    return (
        <div className="card">
            <img src={ogretmen.img} alt={ogretmen.name} style={{ maxWidth: '100%', height: 'auto' }} />
            <div className="card-header">{ogretmen.name}</div>
            <div className="card-occupation">{ogretmen.occupation}</div>
            <div className="card-content">{ogretmen.blog}</div>

        </div>
    );
};

export default OgretmenDetay;