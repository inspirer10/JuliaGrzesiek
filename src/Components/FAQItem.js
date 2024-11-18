import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

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
                <div className='faq-answer acitve'>{answer}</div>
            ) : (
                <div className='faq-answer '>{answer}</div>
            )}
        </div>
    );
};

export default FAQItem;
