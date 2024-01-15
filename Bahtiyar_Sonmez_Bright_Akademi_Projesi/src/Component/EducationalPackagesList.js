import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { OgretmenlerContext } from '../Context/OgretmenlerContext';


const EducationalPackagesList = () => {
    const { packages } = useContext(OgretmenlerContext);

    return (
        <>
            <div className=''>
                <h1 className='d-flex justify-content-center py-5 mt-5 mt-2'>Yazılım Uzmanlığı Yolculuğunuz Burada Başlıyor</h1>
                <div className="container">
                    {packages.map(packag => (
                        <div key={packag.id} className="card my-4 m-auto">
                            <div className='row g-0'>
                                <div className='col ps-2'>
                                    <img src={packag.ımge} alt={packag.egtm} />
                                    <div className="card-header">{packag.egtm}</div>
                                    <div className="card-actions">
                                        <Link to={`/packages/${packag.id}`}>Detay</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
};

export default EducationalPackagesList;