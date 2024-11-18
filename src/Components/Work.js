import Image from 'next/image';
import React from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { MdKeyboardArrowRight } from 'react-icons/md';

function Work() {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <section className='work_section' id='articles'>
            <div className='heading'>
                <h6>
                    Artykuły <span>📰</span>
                </h6>
                <a
                    href='https://www.money.pl/archiwum/autor/julia-grzesiek,6792148300744321.html'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Wszystkie artykuły <MdKeyboardArrowRight className='icon' />
                </a>
            </div>

            <div className='articles_container'>
                <div className='article'>
                    <div className='image_wrapper'>
                        <Image
                            height={750}
                            width={750}
                            src={'/blog1.jpg'}
                            className='image'
                            onClick={() =>
                                openInNewTab(
                                    'https://www.money.pl/gospodarka/depresja-wysokofuncjonujaca-w-pracy-sa-znakomici-cierpienie-maskuja-7017892904483776a.html'
                                )
                            }
                        />
                    </div>
                    <aside className='text_wrapper'>
                        <h4
                            onClick={() =>
                                openInNewTab(
                                    'https://www.money.pl/gospodarka/depresja-wysokofuncjonujaca-w-pracy-sa-znakomici-cierpienie-maskuja-7017892904483776a.html'
                                )
                            }
                        >
                            Depresja wysokofuncjonująca. W pracy są znakomici,
                            cierpienie maskują
                        </h4>
                        <p>
                            Depresja wysokofuncjonująca jest terminem, który
                            wzbudza w ostatnim czasie coraz większe
                            zainteresowanie. To stosunkowo nowe pojęcie opisuje
                            kogoś, kto cierpi na zaburzenia nastroju...
                        </p>

                        <div className='bottom_bar'>
                            <div className='tags_wrapper'>
                                <p>#praca</p>
                                <p>#kariera</p>
                                <p>#depresja</p>
                            </div>
                            <button
                                onClick={() =>
                                    openInNewTab(
                                        'https://www.money.pl/gospodarka/depresja-wysokofuncjonujaca-w-pracy-sa-znakomici-cierpienie-maskuja-7017892904483776a.html'
                                    )
                                }
                            >
                                Przeczytaj
                                <FaArrowUpRightFromSquare className='icon' />
                            </button>
                        </div>
                    </aside>
                </div>

                <div className='article'>
                    <div className='image_wrapper'>
                        <Image
                            height={750}
                            width={750}
                            src={'/blog2.jpg'}
                            className='image'
                            onClick={() =>
                                openInNewTab(
                                    'https://www.money.pl/gospodarka/julia-grzesiek/oto-najbardziej-wplywowe-kobiety-swiata-taylor-swift-znalazla-sie-w-top-5-6971598656412288a.html'
                                )
                            }
                        />
                    </div>
                    <aside className='text_wrapper'>
                        <h4
                            onClick={() =>
                                openInNewTab(
                                    'https://www.money.pl/gospodarka/julia-grzesiek/oto-najbardziej-wplywowe-kobiety-swiata-taylor-swift-znalazla-sie-w-top-5-6971598656412288a.html'
                                )
                            }
                        >
                            Oto najbardziej wpływowe kobiety świata
                        </h4>
                        <p>
                            Forbes zaprezentował swój coroczny ranking
                            najpotężniejszych kobiet na świecie. Na samym
                            szczycie listy znalazły się liderki polityczne z
                            Europy i USA, ale w pierwszej dziesiątce są też
                            słynna piosenkarka i miliarderka...
                        </p>

                        <div className='bottom_bar'>
                            <div className='tags_wrapper'>
                                <p>#kobiety</p>
                                <p>#forbes</p>
                                <p>#biznes</p>
                            </div>
                            <button
                                onClick={() =>
                                    openInNewTab(
                                        'https://www.money.pl/gospodarka/julia-grzesiek/oto-najbardziej-wplywowe-kobiety-swiata-taylor-swift-znalazla-sie-w-top-5-6971598656412288a.html'
                                    )
                                }
                            >
                                Przeczytaj
                                <FaArrowUpRightFromSquare className='icon' />
                            </button>
                        </div>
                    </aside>
                </div>

                <div className='article'>
                    <div className='image_wrapper'>
                        <Image
                            height={750}
                            width={750}
                            src={'/blog3.jpg'}
                            className='image'
                            onClick={() =>
                                openInNewTab(
                                    'https://www.money.pl/gospodarka/trzy-sposoby-na-produktywnosc-ktore-pomoga-w-pracy-7004426183019232a.html'
                                )
                            }
                        />
                    </div>
                    <aside className='text_wrapper'>
                        <h4
                            onClick={() =>
                                openInNewTab(
                                    'https://www.money.pl/gospodarka/trzy-sposoby-na-produktywnosc-ktore-pomoga-w-pracy-7004426183019232a.html'
                                )
                            }
                        >
                            Trzy sposoby na produktywność, które pomogą w pracy
                        </h4>
                        <p>
                            Czy zdarzyło ci się kiedyś odkładać zadania na
                            później tylko po to, by odkryć, że tydzień zleciał,
                            a większość z nich nadal pozostaje nietknięta? Nie
                            jesteś sam...
                        </p>
                        <div className='bottom_bar'>
                            <div className='tags_wrapper'>
                                <p>#firma</p>
                                <p>#praca</p>
                                <p>#zatrudnienie</p>
                            </div>
                            <button
                                onClick={() =>
                                    openInNewTab(
                                        'https://www.money.pl/gospodarka/trzy-sposoby-na-produktywnosc-ktore-pomoga-w-pracy-7004426183019232a.html'
                                    )
                                }
                            >
                                Przeczytaj
                                <FaArrowUpRightFromSquare className='icon' />
                            </button>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}

export default Work;
