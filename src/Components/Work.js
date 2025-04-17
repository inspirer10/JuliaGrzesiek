import Image from 'next/image';
import React from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { motion } from 'framer-motion';

function Work() {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const opacityAnimation = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 0.2,
                type: 'spring',
                damping: 30,
                stiffness: 100,
            },
        },
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
                <motion.div
                    variants={opacityAnimation}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true }}
                    className='article'
                >
                    <div className='image_wrapper'>
                        <Image
                            height={750}
                            width={750}
                            src={'/blog1.jpg'}
                            className='image'
                            onClick={() =>
                                openInNewTab(
                                    'https://www.money.pl/pieniadze/julia-grzesiek/sa-bajecznie-bogate-a-zyja-jakby-brakowalo-im-pieniedzy-sama-obcinam-sobie-wlosy-unikam-starbucksa-jak-zarazy-6954203855649312a.html'
                                )
                            }
                        />
                    </div>
                    <aside className='text_wrapper'>
                        <h4
                            onClick={() =>
                                openInNewTab(
                                    'https://www.money.pl/pieniadze/julia-grzesiek/sa-bajecznie-bogate-a-zyja-jakby-brakowalo-im-pieniedzy-sama-obcinam-sobie-wlosy-unikam-starbucksa-jak-zarazy-6954203855649312a.html'
                                )
                            }
                        >
                            Są bajecznie bogate, a żyją, jakby brakowało im
                            pieniędzy
                        </h4>
                        <p>
                            Wśród osób o wielomilionowych majątkach nie brakuje
                            takich, które świadomie decydują się żyć skromnie.
                            Preferują prosty styl życia, bo uważają, że przepych
                            nie przynosi im szczęścia, a swoje pieniądze wolą
                            przeznaczać na pomoc innym...
                        </p>

                        <div className='bottom_bar'>
                            <div className='tags_wrapper'>
                                <p>#milionerzy</p>
                                <p>#oszczędzanie</p>
                                <p>#pieniądze</p>
                            </div>
                            <button
                                onClick={() =>
                                    openInNewTab(
                                        'https://www.money.pl/pieniadze/julia-grzesiek/sa-bajecznie-bogate-a-zyja-jakby-brakowalo-im-pieniedzy-sama-obcinam-sobie-wlosy-unikam-starbucksa-jak-zarazy-6954203855649312a.html'
                                    )
                                }
                            >
                                Przeczytaj
                                <FaArrowUpRightFromSquare className='icon' />
                            </button>
                        </div>
                    </aside>
                </motion.div>

                <motion.div
                    variants={opacityAnimation}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true }}
                    className='article'
                >
                    <div className='image_wrapper'>
                        <Image
                            height={750}
                            width={750}
                            src={'/blog2.jpg'}
                            className='image'
                            onClick={() =>
                                openInNewTab(
                                    'https://www.money.pl/gospodarka/lazy-girl-job-to-nowy-trend-pokolenia-z-wola-latwa-prace-by-miec-naprawde-fajne-zycie-6926999143623328a.html'
                                )
                            }
                        />
                    </div>
                    <aside className='text_wrapper'>
                        <h4
                            onClick={() =>
                                openInNewTab(
                                    'https://www.money.pl/gospodarka/lazy-girl-job-to-nowy-trend-pokolenia-z-wola-latwa-prace-by-miec-naprawde-fajne-zycie-6926999143623328a.html'
                                )
                            }
                        >
                            Lazy girl job to nowy trend pokolenia Z
                        </h4>
                        <p>
                            Dla dzisiejszych 20- i 30-latków, którzy dorastali,
                            patrząc, jak ich rodzice i starsi koledzy poświęcają
                            się pracy bez reszty, utrzymanie równowagi między
                            życiem prywatnym i zawodowym jest jedną z
                            najważniejszych spraw...
                        </p>

                        <div className='bottom_bar'>
                            <div className='tags_wrapper'>
                                <p>#kariera</p>
                                <p>#pokolenieZ</p>
                                <p>#generacjaZ</p>
                            </div>
                            <button
                                onClick={() =>
                                    openInNewTab(
                                        'https://www.money.pl/gospodarka/lazy-girl-job-to-nowy-trend-pokolenia-z-wola-latwa-prace-by-miec-naprawde-fajne-zycie-6926999143623328a.html'
                                    )
                                }
                            >
                                Przeczytaj
                                <FaArrowUpRightFromSquare className='icon' />
                            </button>
                        </div>
                    </aside>
                </motion.div>

                <motion.div
                    variants={opacityAnimation}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true }}
                    className='article'
                >
                    <div className='image_wrapper'>
                        <Image
                            height={750}
                            width={750}
                            src={'/blog3.jpg'}
                            className='image'
                            onClick={() =>
                                openInNewTab(
                                    'https://www.money.pl/gospodarka/inteligentni-ludzie-pozno-wstaja-i-maja-sklonnosc-do-prokrastynacji-4-nieoczywiste-cechy-osob-z-wysokim-iq-6949274488846944a.html'
                                )
                            }
                        />
                    </div>
                    <aside className='text_wrapper'>
                        <h4
                            onClick={() =>
                                openInNewTab(
                                    'https://www.money.pl/gospodarka/inteligentni-ludzie-pozno-wstaja-i-maja-sklonnosc-do-prokrastynacji-4-nieoczywiste-cechy-osob-z-wysokim-iq-6949274488846944a.html'
                                )
                            }
                        >
                            Inteligentni ludzie późno wstają i mają skłonność do
                            prokrastynacji
                        </h4>
                        <p>
                            Poza typowymi cechami, jak łatwość uczenia się,
                            myślenie abstrakcyjne czy sprawność w rozwiązywaniu
                            problemów, uczeni wskazują w badaniach również takie
                            oznaki wysokiego IQ, które można uznać wręcz za
                            wady...
                        </p>
                        <div className='bottom_bar'>
                            <div className='tags_wrapper'>
                                <p>#rozwój</p>
                                <p>#inteligencja</p>
                                <p>#nauka</p>
                            </div>
                            <button
                                onClick={() =>
                                    openInNewTab(
                                        'https://www.money.pl/gospodarka/inteligentni-ludzie-pozno-wstaja-i-maja-sklonnosc-do-prokrastynacji-4-nieoczywiste-cechy-osob-z-wysokim-iq-6949274488846944a.html'
                                    )
                                }
                            >
                                Przeczytaj
                                <FaArrowUpRightFromSquare className='icon' />
                            </button>
                        </div>
                    </aside>
                </motion.div>
            </div>
        </section>
    );
}

export default Work;
