import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { RiMenu3Fill } from 'react-icons/ri';

function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                if (window.innerWidth >= 600) {
                    setIsVisible(false); // Ukryj header przy scrollowaniu w dół
                }
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
                <h5>
                    <Image
                        className='icon-image'
                        src={'/icon.jpg'}
                        height={250}
                        width={250}
                        alt='Flag of England and USA'
                    />
                    Angielski z Pasją
                </h5>

                <div className='links'>
                    <a
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }
                    >
                        Home
                    </a>
                    <a href='#articles'>Artykuły</a>
                    <a href='#experience'>Doświadczenie</a>
                    <a href='#faq'>FAQ</a>
                    <a href='#contact'>Kontakt</a>
                </div>
                <div className='burger-menu'>
                    <RiMenu3Fill
                        className='icon'
                        onClick={() => setMobileMenu(true)}
                    />
                </div>
            </nav>
        </header>
    );
}

export default Header;
