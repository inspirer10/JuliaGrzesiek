import Image from 'next/image';
import React, { useState } from 'react';
import FAQItem from './FAQItem';
import { motion } from 'motion/react';

function FAQ() {
    const [openQuestionId, setOpenQuestionId] = useState(null);

    const toggleOpen = (id) => {
        setOpenQuestionId((prevId) => (prevId === id ? null : id));
    };

    const faqData = [
        {
            id: 1,
            question: 'Jak można się ze mną skontaktować?',
            answer: 'Oferuję kilka wygodnych form kontaktu:',
            contactForm: true,
        },
        {
            id: 2,
            question: 'Dla kogo są przeznaczone moje korepetycje?',
            answer: 'Moje zajęcia skierowane są dla dzieci i młodzieży w wieku szkolnym, którym zależy na rozwijaniu umiejętności językowych w sposób dostosowany do ich indywidualnych potrzeb.',
            contactForm: false,
        },
        {
            id: 3,
            question: 'Jak wyglądają moje zajęcia?',
            answer: 'Każdy przyswaja materiał we własnym tempie, dlatego dbam, by lekcje były interesujące i dopasowane do każdego ucznia. Oprócz tradycyjnych materiałów korzystam także z piosenek, krótkich filmów, gier językowych i ćwiczeń interaktywnych.',
            contactForm: false,
        },
        {
            id: 4,
            question:
                'Czy pomagam w przygotowaniach do egzaminów (np. matura, certyfikaty)?',
            answer: 'Tak, wspieram uczniów w przygotowaniach do egzaminów, takich jak matura, FCE, czy inne certyfikaty językowe, ćwicząc obszary dostosowane do ich wymagań.',
            contactForm: false,
        },
        {
            id: 5,
            question: 'Jak długo trwa jedna lekcja i ile kosztuje?',
            answer: 'Jedna lekcja trwa pełną godzinę zegarową (60 minut) i kosztuje 70 zł.',
            contactForm: false,
        },
    ];

    return (
        <section className='FAQ_section' id='faq'>
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    delay: 0.3,
                    duration: 1,
                    type: 'easeIn',
                }}
            >
                Masz jakieś pytania?
            </motion.h2>

            <main>
                <div className='image-wrapper'>
                    <Image
                        loading='lazy'
                        width={750}
                        height={750}
                        src={'/questionPhoto.jpg'}
                    />
                </div>

                <div className='faq_wrapper'>
                    {faqData.map((item, index) => (
                        <FAQItem
                            key={item.id + index}
                            id={item.id}
                            question={item.question}
                            answer={item.answer}
                            contactForm={item.contactForm}
                            isOpen={openQuestionId === item.id}
                            toggleOpen={toggleOpen}
                        />
                    ))}
                </div>
            </main>
        </section>
    );
}

export default FAQ;
