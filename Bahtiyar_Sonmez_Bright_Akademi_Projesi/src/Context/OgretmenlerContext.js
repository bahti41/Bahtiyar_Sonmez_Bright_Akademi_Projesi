import React, { createContext, useState } from 'react';

export const OgretmenlerContext = createContext();

export const OgretmenlerProvider = ({ children }) => {
    const [ogretmenler, setOgretmenler] = useState([

        { id: 1, name: 'Engin Niyazi', occupation: 'Bilgisayar Mühendisi', blog: 'Merhaba! Ben Engin Niyazi, bir yazılımcıyım ve teknolojiye olan tutkum beni her zaman yeni şeyler öğrenmeye yönlendiriyor. Yazılım dünyasındaki yenilikleri takip etmek ve projeler geliştirmek beni heyecanlandırıyor.', img: 'Img/Egıtmenler/EngınNıyazı.png' },
        { id: 2, name: 'Talut Sönmez', occupation: 'Back-End Developer', blog: 'Selam! Ben Talut Sönmez, bir yazılımcıyım ve kod yazmayı seviyorum. En sevdiğim teknolojiler arasında JavaScript, React ve Node.js bulunuyor. Sizlere daha fazla yazılım dünyasından paylaşımlar yapmak için buradayım!', img: 'Img/Egıtmenler/Talutsonmez.png' },
        { id: 3, name: 'Bilal Tunca', occupation: 'Siber Güvenlik', blog: 'Merhabalar! Ben Bilal Tunca, yazılım dünyasına yeni adım atan bir yazılımcıyım. Özellikle frontend teknolojilere ilgi duyuyorum ve sürekli öğrenmeye açığım.', img: 'Img/Egıtmenler/BılalTunca.png' },
        { id: 4, name: 'Numan Demirhan', occupation: 'Front end Developer', blog: 'Selam! Numan Demirhan burada. Yazılım dünyası benim için sadece bir iş değil, aynı zamanda bir tutku. Her gün yeni bir şey öğrenmek ve bu öğrendiklerimi uygulamak benim için heyecan verici.', img: 'Img/Egıtmenler/NumanDemirhan.png' },
    ]);

    return (
        <OgretmenlerContext.Provider value={{ ogretmenler, setOgretmenler }}>
            {children}
        </OgretmenlerContext.Provider>
    );
};