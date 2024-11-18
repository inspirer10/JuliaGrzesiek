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
                        <h2>Camp Walden</h2>
                        <p className='date'>06.2024 - 08.2024</p>
                        <p className='place'>Diamond Point, United States</p>
                    </div>

                    <div className='image_wrapper'>
                        <Image height={450} width={450} src={'/walden.png'} />
                    </div>
                </div>

                <div className='job_position'>
                    <div className='details'>
                        <h2>Money.pl</h2>
                        <p className='date'>07.2022 - 05.2024</p>
                        <p className='place'>Warsaw, Poland</p>
                    </div>

                    <div className='image_wrapper'>
                        <Image height={450} width={450} src={'/moneypl.png'} />
                    </div>
                </div>

                <div className='job_position'>
                    <div className='details'>
                        <h2>Translatium Joanna Woźniczak</h2>
                        <p className='date'>11.2022 - 12.2022</p>
                        <p className='place'>Wrocław, Poland</p>
                    </div>

                    <div className='image_wrapper'>
                        <Image
                            height={450}
                            width={450}
                            src={'/translatium.png'}
                        />
                    </div>
                </div>

                <div className='job_position'>
                    <div className='details'>
                        <h2>Alab Plus</h2>
                        <p className='date'>06.2022 - 09.2022</p>
                        <p className='place'>Warsaw, Poland</p>
                    </div>

                    <div className='image_wrapper'>
                        <Image height={450} width={450} src={'/alab2.png'} />
                    </div>
                </div>
            </main>
        </section>
    );
}

export default Experience;
