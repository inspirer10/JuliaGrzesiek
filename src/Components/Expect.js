import React from 'react';
import { BsPersonBoundingBox } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';
import { FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Expect() {
    return (
        <section className='expect_section'>
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    delay: 1,
                    duration: 1,
                    type: 'easeIn',
                }}
            >
                Możesz liczyć na
            </motion.h2>

            <div className='cards_wrapper'>
                <motion.div className='card'>
                    <p className='icon'>👩‍🏫</p>

                    <h5>Indywidualne podejście</h5>
                    <p>
                        Każdy uczeń przyswaja wiedzę w swoim tempie, dlatego
                        oferuję zajęcia dopasowane do Twoich potrzeb. Korzystam
                        z piosenek, filmów, gier językowych i ćwiczeń
                        interaktywnych, aby nauka była ciekawa i efektywna
                    </p>

                    <p className='corner_icon'>
                        <BsPersonBoundingBox />
                    </p>
                </motion.div>

                <motion.div className='card'>
                    <p className='icon'>🎓</p>

                    <h5>Wsparcie w egzaminach</h5>
                    <p>
                        Pomagam w przygotowaniach do matury, FCE i innych
                        certyfikatów językowych. Wspólnie ćwiczymy wszystkie
                        niezbędne umiejętności, abyś mógł podejść do egzaminu
                        pewny swoich kompetencji językowych
                    </p>

                    <p className='corner_icon'>
                        <FaGraduationCap />
                    </p>
                </motion.div>

                <motion.div className='card'>
                    <p className='icon'>🌍</p>

                    <h5>Angielski z życia codziennego</h5>
                    <p>
                        Dzięki pracy w USA i codziennemu kontaktowi z językiem
                        angielskim znam go nie tylko w teorii, ale i w praktyce.
                        Przybliżam moim uczniom kulturę anglojęzyczną w ciekawy
                        i przystępny sposób
                    </p>

                    <p className='corner_icon'>
                        <TbWorld />
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default Expect;
