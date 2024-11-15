import Image from 'next/image';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

function Blog() {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <section className='blog_section'>
            <div className='heading'>
                <h6>Articles</h6>
                <a
                    href='https://www.money.pl/archiwum/autor/julia-grzesiek,6792148300744321.html'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Wszystkie artykuły <MdKeyboardArrowRight className='icon' />
                </a>
            </div>
            <article>
                <div className='image_wrapper'>
                    <Image
                        height={750}
                        width={750}
                        src={'/blog1.jpg'}
                        className='image'
                    />
                </div>
                <aside className='content_wrapper'>
                    <div>
                        <p className='date'>20 Kwiecień 2024</p>
                        <h6>
                            Depresja wysokofuncjonująca. W pracy są znakomici,
                            cierpienie maskują
                        </h6>
                    </div>

                    <div className='text_wrapper'>
                        <p className='article_text'>
                            Depresja wysokofuncjonująca jest terminem, który
                            wzbudza w ostatnim czasie coraz większe
                            zainteresowanie...
                        </p>
                        <button
                            onClick={() =>
                                openInNewTab(
                                    'https://www.money.pl/gospodarka/depresja-wysokofuncjonujaca-w-pracy-sa-znakomici-cierpienie-maskuja-7017892904483776a.html'
                                )
                            }
                        >
                            Przeczytaj
                        </button>
                    </div>
                </aside>
            </article>

            <article>
                <div className='image_wrapper'>
                    <Image
                        height={750}
                        width={750}
                        src={'/blog2.jpg'}
                        className='image'
                    />
                </div>
                <aside className='content_wrapper'>
                    <div>
                        <p className='date'>9 Grudzień 2023</p>
                        <h6>Oto najbardziej wpływowe kobiety świata</h6>
                    </div>

                    <div className='text_wrapper'>
                        <p className='article_text'>
                            Forbes zaprezentował swój coroczny ranking
                            najpotężniejszych kobiet na świecie. Na samym
                            szczycie listy znalazły się...
                        </p>
                        <button
                            onClick={() =>
                                openInNewTab(
                                    'https://www.money.pl/gospodarka/julia-grzesiek/oto-najbardziej-wplywowe-kobiety-swiata-taylor-swift-znalazla-sie-w-top-5-6971598656412288a.html'
                                )
                            }
                        >
                            Przeczytaj
                        </button>
                    </div>
                </aside>
            </article>
            <article>
                <div className='image_wrapper'>
                    <Image
                        height={750}
                        width={750}
                        src={'/blog3.jpg'}
                        className='image'
                    />
                </div>
                <aside className='content_wrapper'>
                    <div>
                        <p className='date'>5 Kwiecień 2024</p>
                        <h6>
                            Trzy sposoby na produktywność, które pomogą w pracy
                        </h6>
                    </div>

                    <div className='text_wrapper'>
                        <p className='article_text'>
                            Czy zdarzyło ci się kiedyś odkładać zadania na
                            później tylko po to, by odkryć, że tydzień zleciał,
                            a większość z nich nadal pozostaje nietknięta?
                        </p>
                        <button
                            onClick={() =>
                                openInNewTab(
                                    'https://www.money.pl/gospodarka/trzy-sposoby-na-produktywnosc-ktore-pomoga-w-pracy-7004426183019232a.html'
                                )
                            }
                        >
                            Przeczytaj
                        </button>
                    </div>
                </aside>
            </article>
        </section>
    );
}

export default Blog;
