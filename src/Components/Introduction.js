import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

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
                    <span>Cześć ✋🏼</span>, Jestem{' '}
                    <span className='name'>Julia</span>
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
                    <Image
                        ref={image4}
                        height={750}
                        width={750}
                        src={'/test4.jpg'}
                        className='image_4'
                    />
                </div>
            </div>

            <div className='subheading'>
                <Image src={'/icon.jpg'} height={1500} width={1500} />
                <p>
                    <span>angielski</span> z pasją
                </p>
            </div>
        </section>
    );
}

export default Introduction;
