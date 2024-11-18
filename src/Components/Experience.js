import Image from 'next/image';
import React from 'react';
import { MdOutlineTouchApp } from 'react-icons/md';
import { LuMousePointerClick } from 'react-icons/lu';
import { RiMouseLine } from 'react-icons/ri';
import { LuMouse } from 'react-icons/lu';

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
                    <div className='info_wrapper'>
                        <h2>Camp Walden</h2>
                        <p className='date'>06.2024 - 08.2024</p>
                        <p className='place'>Diamond Point, United States</p>
                    </div>

                    <RiMouseLine className='icon' />

                    <div className='image_wrapper'>
                        <Image height={450} width={450} src={'/walden.png'} />
                    </div>

                    <div className='details'>
                        <h6>Administrative Office Front</h6>
                        <li>
                            Managing administrative tasks, including answering
                            phone calls, scheduling appointments, and organizing
                            camp documents
                        </li>
                        <li>
                            Supporting staff coordination and daily operations
                        </li>
                        <li>
                            Ensuring smooth communication between departments
                        </li>
                    </div>
                </div>

                <div className='job_position'>
                    <div className='info_wrapper'>
                        <h2>Money.pl</h2>
                        <p className='date'>07.2022 - 05.2024</p>
                        <p className='place'>Warsaw, Poland</p>
                    </div>

                    <LuMousePointerClick className='icon' />

                    <div className='image_wrapper'>
                        <Image height={450} width={450} src={'/moneypl.png'} />
                    </div>

                    <div className='details'>
                        <h6>English-to-Polish Translator</h6>
                        <li>
                            Translating a diverse range of articles from English
                            to Polish for online publication
                        </li>
                        <li>
                            Conducting thorough research to grasp the nuanced
                            context of each article, enabling accurate and
                            culturally relevant translations that resonate with
                            the Polish-speaking audience.
                        </li>
                        <li>
                            Participating in the editorial process, including
                            style, grammar, and adherence to the portal's
                            publishing guidelines
                        </li>
                    </div>
                </div>

                <div className='job_position'>
                    <div className='info_wrapper'>
                        <h2>Translatium Joanna Woźniczak</h2>
                        <p className='date'>11.2022 - 12.2022</p>
                        <p className='place'>Wrocław, Poland</p>
                    </div>

                    <MdOutlineTouchApp className='icon' />

                    <div className='image_wrapper'>
                        <Image
                            height={450}
                            width={450}
                            src={'/translatium.png'}
                        />
                    </div>

                    <div className='details'>
                        <h6>Translation Internship</h6>
                        <li>
                            Executing English-to-Polish and Polish-to-English
                            translations for a variety of legal documents with
                            adherence to certified translation standards
                        </li>
                        <li>
                            Assisting in the review of translated materials and
                            actively participating in quality assurance
                            processes
                        </li>
                        <li>
                            Researching specific terminology and
                            industry-related language to enhance translation
                            precision
                        </li>
                    </div>
                </div>

                <div className='job_position'>
                    <div className='info_wrapper'>
                        <h2>Alab Plus</h2>
                        <p className='date'>06.2022 - 09.2022</p>
                        <p className='place'>Warsaw, Poland</p>
                    </div>

                    <LuMouse className='icon' />

                    <div className='image_wrapper'>
                        <Image height={450} width={450} src={'/alab2.png'} />
                    </div>

                    <div className='details'>
                        <h6>Archivist</h6>
                        <li>Organizing samples and medical documents</li>
                        <li>Managing data entry in the software</li>
                    </div>
                </div>
            </main>
        </section>
    );
}

export default Experience;
