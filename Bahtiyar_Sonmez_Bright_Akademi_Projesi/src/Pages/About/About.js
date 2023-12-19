import React from 'react'
import { Container } from 'react-bootstrap'
import { MDBCard, MDBCardImage } from 'mdb-react-ui-kit';

const About = () => {

    return (
        <>
            <Container>
                <div className='bg-primary'>
                    <MDBCard className='mb-3'>
                        <MDBCardImage position='top' src='Img/wissen.jpg' alt='' />
                        <div className='bg-primary p-4'>
                        </div>
                    </MDBCard>


                    <div style={{ height: "95vh" }} className="container text-center text-white ">
                        <div className="row text-center">
                            <div className="col-md12 mb-4">
                                <h2 className='display-2'>BAU Bright Nedir?</h2>
                                <p>
                                    Bahçeşehir Üniversitesi tarafından yürütülen ve proje deneyimi yüksek eğitici kadrosu ile fark yaratacak yazılım - sistem uzmanları yetiştiren bir kariyer programıdır. Sektör ihtiyaçları göz önünde bulundurularak hazırlanmış güncel ve son teknoloji eğitim içerikleriyle BAU Bright eğitimleri devam ediyor! Eğitimini tamamlayan adaylar bilişim sektöründe işe yerleştirilmektedir.
                                </p>
                            </div>
                            <div className="col-md-6 ">
                                <h2>Neden Katılmalıyım?</h2>
                                <p>
                                    BAU Bright Eğitim ve İstihdam Projesi, Bahçeşehir Üniversitesi ve Wissen Teknoloji’nin bilişim, danışmanlık, telekomünikasyon ve yazılım sektörleri başta olmak üzere 5000+ iş ortağı ile desteklenmektedir.
                                </p>
                            </div>
                            <div className="col-md-6 mb-4">
                                <h2>İstihdam</h2>
                                <p>
                                    Eğitim programımızı başarıyla tamamlayan öğrencilerimiz, bilişim sektöründen profesyonel iş hayatlarına başlamak üzere çeşitli firmalarda uygun pozisyonlara yönlendirilerek istihdam süreçleri tamamlanır.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <h2>Ödeme Kolaylığı </h2>
                                <p>
                                    Eğitim bedelinizi nakit ya da kredi kartı yöntemleriyle kolayca ve avantajlı fırsatlarla ödeyebilirsiniz.
                                </p>
                            </div>
                            <div className="col-md-6 mb-4">
                                <h2>Türkiye'nin eğitimdeki dünya markası BAU Global</h2>
                                <p>
                                    BAU Washington, BAU Toronto, BAU Silikon Vadisi, BAU Berlin, BAU Roma, BAU Köln, BAU İstanbul,
                                    BAU Kıbrıs, BAU Batum, Hong Kong...
                                </p>
                            </div>
                        </div>
                    </div >
                </div>
            </Container >
        </>
    )
}

export default About
