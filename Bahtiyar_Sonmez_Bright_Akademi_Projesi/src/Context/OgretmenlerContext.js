import React, { createContext, useState } from 'react';

export const OgretmenlerContext = createContext();


export const OgretmenlerProvider = ({ children }) => {

    const [ogretmenler, setOgretmenler] = useState([

        { id: 1, name: 'Engin Niyazi', occupation: 'Bilgisayar Mühendisi', blog: 'Merhaba! Ben Engin Niyazi, bir yazılımcıyım ve teknolojiye olan tutkum beni her zaman yeni şeyler öğrenmeye yönlendiriyor. Yazılım dünyasındaki yenilikleri takip etmek ve projeler geliştirmek beni heyecanlandırıyor.', img: '/Img/Egıtmenler/EngınNıyazı.png' },
        { id: 2, name: 'Talut Sönmez', occupation: 'Back-End Developer', blog: 'Selam! Ben Talut Sönmez, bir yazılımcıyım ve kod yazmayı seviyorum. En sevdiğim teknolojiler arasında JavaScript, React ve Node.js bulunuyor. Sizlere daha fazla yazılım dünyasından paylaşımlar yapmak için buradayım!', img: '/Img/Egıtmenler/Talutsonmez.png' },
        { id: 3, name: 'Bilal Tunca', occupation: 'Siber Güvenlik', blog: 'Merhabalar! Ben Bilal Tunca, yazılım dünyasına yeni adım atan bir yazılımcıyım. Özellikle frontend teknolojilere ilgi duyuyorum ve sürekli öğrenmeye açığım.', img: '/Img/Egıtmenler/BılalTunca.png' },
        { id: 4, name: 'Numan Demirhan', occupation: 'Front end Developer', blog: 'Selam! Numan Demirhan burada. Yazılım dünyası benim için sadece bir iş değil, aynı zamanda bir tutku. Her gün yeni bir şey öğrenmek ve bu öğrendiklerimi uygulamak benim için heyecan verici.', img: '/Img/Egıtmenler/NumanDemirhan.png' },
    ]);

    const [packages, setPackages] = useState([
        {
            id: 1, ımge: './Img/EgitimPaket/full stack program.png', egtm: "Full Stack Programlama", blog: "Yazılım dünyasında 'Full Stack Developer' terimi, hem ön yüz hem de arka yüz geliştirme konusunda yetkin olan profesyoneller için kullanılır.Günümüzde teknolojinin hızla gelişmesiyle birlikte bu rol, daha da önem kazanmıştır.İşte tam da bu noktada, Full Stack programlama eğitimi devreye giriyor.", why: "Full Stack programlama eğitimi, yazılım geliştirme dünyasında sağlam bir temel oluşturur ve bu alanda kariyer yapmak isteyenler için mükemmel bir başlangıçtır.Teknoloji sektöründe her zaman talep gören bu beceriler, sizi piyasada rekabetçi bir profesyonel yapar.Bir Full Stack eğitimi alarak teknolojinin her katmanında ustalaşabilir, projelerinizi bağımsız olarak yönetebilir ve kariyerinizde yeni ufuklara yelken açabilirsiniz."
        },
        {
            id: 2, ımge: './Img/EgitimPaket/siber güvenlik.jpg', egtm: "Siber Güvelik", blog: "Siber güvenlik programlama eğitimi, siber tehditlere karşı savunma mekanizmaları geliştirmek ve dijital sistemleri korumak için gereken teknik bilgi ve pratik becerileri katılımcılara sunar. Bu eğitim, özellikle siber güvenlik uzmanı olmak isteyenler için tasarlanmıştır.", why: "Siber güvenlik, bilgisayar sistemlerini, ağları ve verileri kötü amaçlı saldırılara karşı koruma pratiğidir. Bu alanda uzmanlar, güvenlik açıklarını tespit etmek, riskleri değerlendirmek ve saldırıları önlemek için çalışır."
        },
        {
            id: 3, ımge: './Img/EgitimPaket/sistem ve ag yönetim egitimi.jpg', egtm: "Full Stack Programlama", blog: "Bu program, IT altyapısının planlanmasından, kurulumundan ve sürekli bakımından sorumlu profesyoneller yetiştirmeyi hedefler. Eğitim, temel bilgisayar bilimleri konseptlerinin ötesine geçerek, katılımcıların gerçek dünya problemlerini çözme becerilerini geliştirir.", why: "Sistem yönetimi, bir organizasyonun bilgisayar sistemlerinin etkin bir şekilde çalışmasını sağlamakla ilgilidir. Sistem yöneticileri, sunucuların, masaüstü ve mobil cihazların, ve bu cihazlara yüklenmiş yazılımların günlük işletiminden sorumludur."
        },
    ]);
    return (
        <OgretmenlerContext.Provider value={{ ogretmenler, setOgretmenler, packages, setPackages }}>
            {children}
        </OgretmenlerContext.Provider>
    );
};

