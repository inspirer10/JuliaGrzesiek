import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

const FAQItem = ({ question, answer, contactForm }) => {
    const [isOpen, setIsOpen] = useState(false);

    const contactFormLi = (
        <>
            <li className='contact_option'>- telefoniczny,</li>
            <li className='contact_option'>- mailowy,</li>
            <li className='contact_option'>
                - lub przez formularz na mojej stronie, dzięki któremu możesz
                umówić się na dłuższą wideorozmowę.
            </li>
        </>
    );

    return (
        <div className='faq-item'>
            <div
                className='faq-question'
                onClick={() => setIsOpen(!isOpen)}
                id={isOpen ? 'opened' : ''}
            >
                {question}
                <span className={isOpen ? 'faq-toggle opened' : 'faq-toggle'}>
                    <FiPlus className={isOpen ? 'icon opened' : 'icon'} />
                </span>
            </div>

            {isOpen ? (
                <div className='faq-answer acitve'>
                    {answer}
                    {contactForm && contactFormLi}
                </div>
            ) : (
                <div className='faq-answer '>{answer}</div>
            )}
        </div>
    );
};

export default FAQItem;
