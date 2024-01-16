import React from 'react';

function Maps() {
    return (
        <>
            <div className='card'>
                <div className='row'>
                    <div className='col'>
                        <iframe className='map'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12036.90507342669!2d28.998980830472973!3d41.04218072745107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7a2a2c3b963%3A0x7671d1b9817b8519!2zQmFow6dlxZ9laGlyIMOcbml2ZXJzaXRlc2k!5e0!3m2!1str!2str!4v1704021485406!5m2!1str!2str"
                            width="100%"
                            height="auto"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </ >
    );
}

export default Maps;