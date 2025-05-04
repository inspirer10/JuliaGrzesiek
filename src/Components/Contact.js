import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';
import { LuMailOpen } from 'react-icons/lu';
import { FiPhoneCall } from 'react-icons/fi';
import { RiCalendarScheduleLine } from 'react-icons/ri';

function Contact() {
    return (
        <section className='contact_section' id='contact'>
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    delay: 0.25,
                    duration: 1,
                    type: 'easeIn',
                }}
            >
                Po więcej informacji
            </motion.h2>
            <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    delay: 0.5,
                    duration: 1,
                    type: 'easeIn',
                }}
            >
                zapraszam do kontaktu:
            </motion.h3>
            <main>
                <aside>
                    <motion.div className='option'>
                        <LuMailOpen className='icon' />
                        <a href='mailto:juliagrzesiek19@gmail.com'>
                            julia19grzesiek@gmail.com
                        </a>
                    </motion.div>

                    <motion.div className='option'>
                        <FiPhoneCall className='icon' />
                        <a href='tel:608-362-890'>(+48) 608 362 890</a>
                    </motion.div>

                    <motion.div className='option'>
                        <RiCalendarScheduleLine className='icon' />
                        <a className='underline'>Umów rozmowę!</a>
                    </motion.div>
                </aside>

                <div className='image-wrapper'>
                    <Image
                        className='image'
                        loading='lazy'
                        width={750}
                        height={750}
                        src={'/julka2.jpg'}
                    />
                </div>
            </main>
        </section>
    );
}

export default Contact;
