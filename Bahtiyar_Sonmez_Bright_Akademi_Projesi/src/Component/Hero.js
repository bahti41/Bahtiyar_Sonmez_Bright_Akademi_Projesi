import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


const heroData = [
    {
        id: 1,
        img: "/Img/Hero/brightAcademy2.png",
        title: "Bilginin Gücünü Keşfedin",
        desc: "Eğitimde mükemmeliyeti hedefleyerek, her yaştan öğrencinin potansiyelini maksimuma çıkarıyoruz. Bilgiyle geleceğinizi şekillendirin.",
    },
    {
        id: 2,
        img: "/Img/Hero/childrenGril.webp",
        title: "Teknolojide Sınır Tanımayan Yenilikler",
        desc: "Yazılım dünyasında devrim yaratan çözümlerimizle iş süreçlerinizi dönüştürün. En yeni teknolojilerle donatılmış ürünlerimizle verimliliğinizi artırın.",
    },
    {
        id: 3,
        img: "/Img/Hero/tromp.jpg",
        title: "Güvenilir Yazılım, Güçlü İş Sonuçları",
        desc: "İş güvenliğinizi ve veri korumanızı en üst düzeye çıkarın. En son güvenlik protokolleriyle donatılmış yazılım çözümlerimizle her zaman güvendesiniz.",
    },
];


const Hero = () => {
    return (
        <>
            <section className='hero container-fluid'>
                <Carousel fluid >
                    {
                        heroData.map(hero => {
                            return (
                                <Carousel.Item key={hero.id}>
                                    <img
                                        className=" w-100"
                                        src={hero.img}
                                        alt={hero.title}
                                        height={700}
                                        width={700}
                                    />
                                    <Carousel.Caption>
                                        <h5 className='text-white'>{hero.title}</h5>
                                        <p className='text-white'>{hero.desc}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
            </section>
        </>
    )
}

export default Hero
