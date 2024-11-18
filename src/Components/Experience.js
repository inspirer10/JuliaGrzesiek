import Image from 'next/image';
import React from 'react';

function Experience() {
    return (
        <section className='experience_section' id='experience'>
            <div className='heading'>
                <h6>
                    Doświadczenie <span>💼</span>
                </h6>
            </div>

            <main>
                <div className='job_position'>
                    <div className='details'>
                        <h2>ALAB</h2>
                        <p>06.2022 - 09.2022</p>
                    </div>

                    <div className='image_wrapper'>
                        <Image height={450} width={450} src={'/alab.png'} />
                    </div>
                </div>

                <div className='job_position'>
                    <div className='details'>
                        <h2>Money.pl</h2>
                        <p>10.2022 - 06.2024</p>
                    </div>

                    <div className='image_wrapper'>
                        <Image height={450} width={450} src={'/job3.png'} />
                    </div>
                </div>

                <div className='job_position'>
                    <div className='details'>
                        <h2>ALAB</h2>
                        <p>02.2024</p>
                    </div>

                    <div className='image_wrapper'>
                        <Image height={450} width={450} src={'/alab.png'} />
                    </div>
                </div>

                <div className='job_position'>
                    <div className='details'>
                        <h2>Camp Walden</h2>
                        <p>06.2024 - 08.2024</p>
                    </div>

                    <div className='image_wrapper'>
                        <Image height={450} width={450} src={'/walden.png'} />
                    </div>
                </div>
            </main>
        </section>
    );
}

export default Experience;
