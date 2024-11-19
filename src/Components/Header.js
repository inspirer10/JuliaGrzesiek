import React, { useEffect, useState } from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';

function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false); // Ukryj header przy scrollowaniu w dół
            } else {
                setIsVisible(true); // Pokaż header przy scrollowaniu w górę
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={isVisible ? 'visible' : 'hidden'}>
            <nav>
                <h6></h6>
                <div className='links'>
                    {/*  <p>Home</p>*/}

                    <a href='#articles'>Artykuły</a>
                    <a href='#experience'>Doświadczenie</a>
                    <a href='#contact'>Kontakt</a>
                    <a href='#faq'>FAQ</a>
                </div>

                <div className='button'>
                    <p className='primary'>
                        <BiSolidPhoneCall className='icon' /> Umów rozmowę
                    </p>
                    <div className='secondary'>
                        <p>
                            <BiSolidPhoneCall className='icon' /> Umów rozmowę
                        </p>
                        <div />
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
