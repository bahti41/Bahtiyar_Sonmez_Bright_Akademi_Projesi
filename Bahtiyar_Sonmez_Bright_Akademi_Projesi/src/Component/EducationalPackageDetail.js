import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { OgretmenlerContext } from '../Context/OgretmenlerContext';
import { Card, } from 'react-bootstrap';


const EducationalPackageDetail = () => {
    const { id } = useParams();
    const { packages } = useContext(OgretmenlerContext);
    const packag = packages.find(o => o.id.toString() === id);

    if (!packag) {
        return <div>Öğretmen bulunamadı.</div>;
    }

    return (
        <>
            <div className="card my-4 m-auto">
                <div className='row g-0'>
                    <div className='col ps-2'>
                        <div className="card-image">
                            <img src={packag.ımge} alt={packag.egtm} />
                        </div>
                        <div className="card-info">
                            <h2>{packag.egtm}</h2>
                            <p>{packag.blog}</p>
                            <p>{packag.why}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EducationalPackageDetail;