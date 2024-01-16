import React, { useContext } from 'react';
import { OgretmenlerContext } from '../Context/OgretmenlerContext';
import './OgretmenlerListesi.css'
import Servicer from './Servicer.css';

const Servicers = () => {

    const { serviceData } = useContext(OgretmenlerContext);

    return (
        <>
            <section className='services'>
                <div className='container'>
                    <div className='title-holder'>
                        <h2>hizmetlerimiz</h2>
                        <div className='subtitle'>sağladığımız hizmetler</div>
                        <div className='main-blog'>
                            {
                                serviceData.map(services => {
                                    return (
                                        <div key={services.id} className="service-item ">
                                            <div className='header'>
                                                <div className='text'>
                                                    <div className='icon-action' >
                                                        <i className={services.icon}></i>
                                                    </div>
                                                    <h3>{services.title}</h3>
                                                    <p>{services.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Servicers