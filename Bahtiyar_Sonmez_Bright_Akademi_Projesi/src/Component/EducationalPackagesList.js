import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { OgretmenlerContext } from '../Context/OgretmenlerContext';


const EducationalPackagesList = () => {
    const { packages } = useContext(OgretmenlerContext);

    return (
        <>
            <div className="container">
                {packages.map(packag => (
                    <div key={packag.id} className="card">
                        <img src={packag.ımge} alt={packag.egtm} />
                        <div className="card-header">{packag.egtm}</div>
                        <div className="card-actions">
                            <Link to={`/packages/${packag.id}`}>Detay</Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default EducationalPackagesList;