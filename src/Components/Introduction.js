import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

import { motion } from 'motion/react';
import { BiSolidPhoneCall } from 'react-icons/bi';

function Introduction() {
    const image1 = useRef(null);
    const image2 = useRef(null);
    const image3 = useRef(null);
    const image4 = useRef(null);

    const showImage = (imageRef, delay) => {
        setTimeout(() => {
            imageRef.current.classList.add('show');
        }, delay);
    };

    useEffect(() => {
        showImage(image1, 2200);
        showImage(image2, 1400);
        showImage(image3, 700);
    }, []);

    return (
        <section className='introduction_section'>
            <div className='gradient_left' />
            <div className='gradient_right' />

            <main>
                <article>
                    {/*
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1.25,
                                type: 'ease',
                            }}
                            onMouseEnter={() => {
                                if (image1.current) {
                                    image1.current.classList.add('zoom');
                                }
                            }}
                            onMouseLeave={() => {
                                if (image1.current) {
                                    image1.current.classList.remove('zoom');
                                }
                            }}
                        >
                            <span>Cześć ✋🏼</span>, Jestem{' '}
                            <span className='name'>Julia</span>
                        </motion.h2>
                       */}

                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1.25,
                            type: 'easeIn',
                        }}
                        onMouseEnter={() => {
                            if (image1.current) {
                                image1.current.classList.add('zoom');
                            }
                        }}
                        onMouseLeave={() => {
                            if (image1.current) {
                                image1.current.classList.remove('zoom');
                            }
                        }}
                    >
                        Cześć, Jestem
                        <span className='name'> Julia</span>
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.25,
                            duration: 1.25,
                            type: 'easeIn',
                        }}
                    >
                        Tłumacz & Korepetytor
                    </motion.h3>

                    <motion.p className='subHeading'>
                        Pomagam uczniom w każdym wieku rozwijać swoje językowe
                        supermoce. Wierzę w naukę przez zabawę, autentyczny
                        kontakt i dopasowanie do Twoich potrzeb
                    </motion.p>

                    <div
                        className='subHeadingOLD'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.25,
                            duration: 1.25,
                            type: 'ease',
                        }}
                    >
                        {/*  <p>
                            <span>angielski</span> z pasją
                        </p>*/}
                    </div>

                    <div className='button'>
                        <p className='primary'>
                            <BiSolidPhoneCall className='icon' /> Umów rozmowę
                        </p>
                        <div className='secondary'>
                            <p>
                                <BiSolidPhoneCall className='icon' /> Umów
                                rozmowę
                            </p>
                            <div />
                        </div>
                    </div>
                </article>
                <aside>
                    <div className='images_wrapper'>
                        <Image
                            ref={image1}
                            height={800}
                            width={800}
                            src={'/julka1.png'}
                            className='image_1'
                        />
                        <Image
                            ref={image2}
                            height={600}
                            width={600}
                            src={'/julka3.jpg'}
                            className='image_2'
                        />
                        <Image
                            ref={image3}
                            height={600}
                            width={600}
                            src={'/julka14.png'}
                            className='image_3'
                        />
                        <Image
                            ref={image4}
                            height={600}
                            width={600}
                            src={'/julka4.jpg'}
                            className='image_4'
                        />
                    </div>
                </aside>
            </main>
        </section>
    );
}

export default Introduction;
