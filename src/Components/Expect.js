import React from 'react';
import { IoSchool, IoPerson } from 'react-icons/io5';
import { MdOutlineNewReleases } from 'react-icons/md';

function Expect() {
    return (
        <section className='expect_section'>
            <h2>Możesz liczyć na</h2>

            <div className='cards_wrapper'>
                <div className='card'>
                    <p className='icon'>👩‍🏫</p>
                    <h5>Indywidualne podejście</h5>
                    <p>
                        Każdy uczeń przyswaja wiedzę w swoim tempie, dlatego
                        oferuję zajęcia dopasowane do Twoich potrzeb. Korzystam
                        z piosenek, filmów, gier językowych i ćwiczeń
                        interaktywnych, aby nauka była ciekawa i efektywna
                    </p>
                </div>

                <div className='card'>
                    <p className='icon'>🎓</p>
                    <h5>Wsparcie w egzaminach</h5>
                    <p>
                        Pomagam w przygotowaniach do matury, FCE i innych
                        certyfikatów językowych. Wspólnie ćwiczymy wszystkie
                        niezbędne umiejętności, abyś mógł zdać egzamin z
                        pewnością siebie
                    </p>
                </div>

                <div className='card'>
                    <p className='icon'>🌍</p>
                    <h5>Angielski z życia codziennego</h5>
                    <p>
                        Dzięki pracy w USA i codziennemu kontaktowi z językiem
                        angielskim znam go nie tylko w teorii, ale i w praktyce.
                        Przybliżam moim uczniom kulturę anglojęzyczną w
                        przystępny sposób
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Expect;
