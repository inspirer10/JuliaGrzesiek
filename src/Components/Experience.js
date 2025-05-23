import React from 'react';

import { motion } from 'motion/react';

function Experience() {
    const opacityAnimation = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 0.325,
                type: 'spring',
                damping: 30,
                stiffness: 100,
            },
        },
    };

    const workExperienceData = [
        /*
        {
            company: '',
            date: '',
            place: 'Ostrów Wielkopolski, Poland',
            position: '',
            duty: '',
            duty2: '',
            duty3: '',
        },
        {
            company: 'ALAB Plus',
            date: '',
            place: 'Warsaw, Poland',
            position: 'Archivist',
            duty: '',
            duty2: '',
            duty3: '',
        },*/
        {
            company: 'Camp Walden',
            date: '06.2024 - 08.2024',
            place: 'Diamond Point, United States',
            position: 'Administrative Office Front',
            duty: 'Managing administrative tasks, including answering phone calls, scheduling appointments, and organizing camp documents',
            duty2: 'Supporting staff coordination and daily operations',
            duty3: 'Ensuring smooth communication between departments',
        },

        {
            company: 'Money.pl',
            date: '07.2022 - 05.2024',
            place: 'Warsaw, Poland',
            position: 'English-to-Polish Translator',
            duty: 'Translating a diverse range of articles from English to Polish for online publication',
            duty2: 'Conducting thorough research to grasp the nuanced context of each article, enabling accurate and culturally relevant translations that resonate with the Polish-speaking audience',
            duty3: "Participating in the editorial process, including style, grammar, and adherence to the portal's publishing guidelines",
        },
        {
            company: 'Translatium Joanna Woźniczak',
            date: '11.2022 - 12.2022',
            place: 'Wrocław, Poland',
            position: 'Translation Internship',
            duty: 'Executing English-to-Polish and Polish-to-English translations for a variety of legal documents with adherence to certified translation standards',
            duty2: 'Assisting in the review of translated materials and actively participating in quality assurance processes',
            duty3: 'Researching specific terminology and industry-related language to enhance translation precision',
        },
        {
            company: 'ALAB Plus',
            date: '06.2021 - 09.2021',
            place: 'Warsaw, Poland',
            position: 'Archivist',
            duty: 'Organizing samples and medical documents',
            duty2: 'Managing data entry in the software',
        },
    ];

    return (
        <section className='experience_section' id='experience'>
            <motion.div
                className='heading'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    delay: 0.3,
                    duration: 1,
                    type: 'easeIn',
                }}
            >
                <h6>
                    Doświadczenie <span>💼</span>
                </h6>
            </motion.div>

            <main>
                {workExperienceData.map(
                    (
                        { company, date, place, position, duty, duty2, duty3 },
                        index
                    ) => (
                        <motion.div
                            variants={opacityAnimation}
                            initial='initial'
                            whileInView='animate'
                            viewport={{ once: true }}
                            className='job_position'
                            key={'0' + index + 1}
                        >
                            <div className='info_wrapper'>
                                <h2>{company}</h2>
                                <div className='details'>
                                    <p className='date'>{date}</p>
                                    <p className='place'>{place}</p>
                                </div>
                            </div>

                            <div className='about_job'>
                                <h6>{position}</h6>
                                <li>{duty}</li>
                                <li>{duty2}</li>
                                {duty3 ? <li>{duty3}</li> : null}
                            </div>
                        </motion.div>
                    )
                )}
            </main>
        </section>
    );
}

export default Experience;
