import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { OgretmenlerContext } from '../Context/OgretmenlerContext';
import './OgretmenDetay.css'

const OgretmenDetay = () => {
    const { id } = useParams();
    const { ogretmenler } = useContext(OgretmenlerContext);
    const ogretmen = ogretmenler.find(o => o.id.toString() === id);

    if (!ogretmen) {
        return <div>Öğretmen bulunamadı.</div>;
    }

    return (
        <>
            <div className="card">
                <div className="card-image">
                    <img src={ogretmen.img} alt={ogretmen.name} />
                </div>
                <div className="card-info">
                    <h2>{ogretmen.name}</h2>
                    <p>{ogretmen.occupation}</p>
                    <p>{ogretmen.blog}</p>
                </div>
            </div>
        </>
    );
};

export default OgretmenDetay;