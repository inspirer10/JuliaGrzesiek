import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

function Introduction() {
    const image1 = useRef(null);
    const image2 = useRef(null);
    const image3 = useRef(null);

    const showImage = (imageRef, delay) => {
        setTimeout(() => {
            imageRef.current.classList.add('show');
        }, delay);
    };

    useEffect(() => {
        showImage(image1, 2100);
        showImage(image2, 1100);
        showImage(image3, 500);
    }, []);

    return (
        <section className='introduction_section'>
            <div className='heading'>
                <h2
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
                    Cześć<span>✋🏼</span>, Jestem{' '}
                    <span className='name'>Julia</span>,
                </h2>

                <div className='images_wrapper'>
                    <Image
                        ref={image1}
                        height={750}
                        width={750}
                        src={'/test.png'}
                        className='image_1'
                    />
                    <Image
                        ref={image2}
                        height={750}
                        width={750}
                        src={'/test2.jpg'}
                        className='image_2'
                    />
                    <Image
                        ref={image3}
                        height={750}
                        width={750}
                        src={'/test3.jpg'}
                        className='image_3'
                    />
                </div>
            </div>

            <p>korepetytorka Angielskiego</p>
        </section>
    );
}

export default Introduction;
