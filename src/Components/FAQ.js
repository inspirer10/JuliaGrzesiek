import Image from 'next/image';
import React from 'react';
import FAQItem from './FAQItem';

function FAQ() {
    const faqData = [
        {
            question: 'What is loco.ai?',
            answer: 'Loco.ai is a platform designed to simplify the development and deployment of AI models. It provides tools and resources for both beginners and experienced developers to create powerful AI solutions.',
        },
        {
            question: 'How can I get started with loco.ai?',
            answer: 'To get started with loco.ai, sign up on the website, explore the documentation, and use the platform’s starter templates and resources to build your first AI model.',
        },
        {
            question: 'What types of AI models does loco.ai support?',
            answer: 'Loco.ai supports a wide range of AI models including machine learning, deep learning, and NLP (Natural Language Processing) models, making it suitable for various AI applications.',
        },
        {
            question: 'Is loco.ai suitable for beginners in AI development?',
            answer: 'Yes, loco.ai is suitable for beginners as it offers comprehensive tutorials, templates, and a user-friendly interface to help new users learn and build AI models effectively.',
        },
        {
            question: 'What kind of support does loco.ai provide?',
            answer: 'Loco.ai provides technical support through documentation, a community forum, and direct customer support for troubleshooting and assistance with AI projects.',
        },
    ];

    return (
        <section className='FAQ_section'>
            <h2>Masz jakieś pytania?</h2>

            <main>
                <Image width={500} height={500} src={'/test2.jpg'} />

                <div className='faq_wrapper'>
                    {faqData.map((item, index) => (
                        <FAQItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                        />
                    ))}
                </div>
            </main>
        </section>
    );
}

export default FAQ;
