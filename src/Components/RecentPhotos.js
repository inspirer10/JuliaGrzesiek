import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

function RecentPhotos() {
    return (
        <section className='recent-photos_section'>
            {/* <h2>Some of my recent photography</h2> */}
            <motion.div
                className='photo-container'
                initial={{ opacity: 0, x: -250 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                    delay: 0.25,
                    duration: 1.25,
                    type: 'ease',
                }}
            >
                <div className='image-wrapper'>
                    <Image
                        src={'/blog3.jpg'}
                        height={900}
                        width={900}
                        alt='Recent Photography'
                    />
                </div>
                <p>Some of my recent photography</p>
            </motion.div>

            <motion.div
                className='photo-container'
                initial={{ opacity: 0, x: 250 }}
                whileInView={{ opacity: 1, x: -70, y: -50 }}
                viewport={{ once: true }}
                transition={{
                    delay: 0.25,
                    duration: 1.25,
                    type: 'ease',
                }}
            >
                <div className='image-wrapper'>
                    <Image
                        src={'/blog1.jpg'}
                        height={900}
                        width={900}
                        alt='Recent Photography'
                    />
                </div>
                <p>Some of my recent photography</p>
            </motion.div>
        </section>
    );
}

export default RecentPhotos;
