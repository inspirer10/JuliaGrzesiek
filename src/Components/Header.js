import Image from 'next/image';
import React from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';

function Header() {
    return (
        <header>
            <nav>
                <h6></h6>
                <div className='links'>
                    {/*  <p>Home</p>*/}

                    <p>Artykuły</p>
                    <p>Doświadczenie</p>
                    <p>Kontakt</p>
                    <p>FAQ</p>
                </div>
                <button>
                    <BiSolidPhoneCall className='icon' /> Umów rozmowę
                </button>
            </nav>
        </header>
    );
}

export default Header;
