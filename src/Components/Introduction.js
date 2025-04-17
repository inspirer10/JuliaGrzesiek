import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

import { motion } from 'motion/react';

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
            <div className='gradient'></div>
            <div className='heading'>
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
            </div>

            <motion.div
                className='subheading'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    delay: 0.25,
                    duration: 1.25,
                    type: 'ease',
                }}
            >
                <Image
                    src={'/icon.jpg'}
                    height={500}
                    width={500}
                    alt='Flag of England and USA'
                />
                <p>
                    <span>angielski</span> z pasją
                </p>
            </motion.div>
        </section>
    );
}

export default Introduction;
