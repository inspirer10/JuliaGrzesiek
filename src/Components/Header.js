import React from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';

function Header() {
    return (
        <header>
            <nav>
                <div className='logo'>
                    <h5>Julia Grzesiek</h5>
                </div>
                <div className='links'>
                    {/*  <p>Home</p>*/}

                    <p>Doświadczenie</p>
                    <p>Artykuły</p>
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
