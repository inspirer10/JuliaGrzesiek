import Image from 'next/image';
import React from 'react';
import { LuMailOpen } from 'react-icons/lu';
import { FiPhoneCall } from 'react-icons/fi';
import { RiCalendarScheduleLine } from 'react-icons/ri';

function Contact() {
    return (
        <section className='contact_section' id='contact'>
            <h2>Po więcej informacji</h2>
            <h3>zapraszam do kontaktu:</h3>
            <main>
                <aside>
                    <div className='option'>
                        <LuMailOpen className='icon' />
                        <a href='mailto:juliagrzesiek19@gmail.com'>
                            juliagrzesiek19@gmail.com
                        </a>
                    </div>
                    <div className='option'>
                        <FiPhoneCall className='icon' />
                        <a href='tel:123-123-123'>+48 789 456 123 </a>
                    </div>
                    <div className='option'>
                        <RiCalendarScheduleLine className='icon' />
                        <a className='underline'>Umów rozmowę !</a>
                    </div>
                </aside>
                <Image width={700} height={700} src={'/julka2.jpg'} />
            </main>
        </section>
    );
}

export default Contact;
