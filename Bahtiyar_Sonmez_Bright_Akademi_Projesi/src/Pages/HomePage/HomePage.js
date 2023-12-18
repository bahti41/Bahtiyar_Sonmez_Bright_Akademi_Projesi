import React from 'react';



const HomePage = () => {
    return (
        <>
            <div>
                <header className="bg-primary text-white text-center py-5">
                    <h1>Bright Akademi Web Sitesi</h1>
                </header>
                <div className="container mt-5 text-center mb-3 ">
                    <div className="row text-center">
                        <img src="" alt="" />
                        <div className="col-md-8">
                            <h2>Get your university-approved certificate and become a leading IT scientist.</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac arcu eu libero
                                varius suscipit. Ut sed enim sed lacus convallis cursus vel eu justo.
                            </p>
                        </div>

                        <div className="col-md-4">
                            <h2>Code Future Technologies with BAU </h2>
                            <p>
                                Integer cursus ligula ut neque maximus, sit amet dictum augue fermentum.
                            </p>

                        </div>
                    </div>
                    <button type="button" class="btn btn-primary btn-lg" data-mdb-ripple-init>APPLY</button>
                    <button type="button" class="btn btn-secondary btn-lg" data-mdb-ripple-init>CONTACY ME</button>
                </div>
            </div>
        </>
    )
}

export default HomePage;