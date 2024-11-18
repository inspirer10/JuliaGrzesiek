import Head from 'next/head';
import Header from '@/Components/Header';
import Introduction from '@/Components/Introduction';

import { useEffect } from 'react';
import Lenis from 'lenis';
import Work from '@/Components/Work';
import { FaQ } from 'react-icons/fa6';
import FAQ from '@/Components/FAQ';

export default function Home() {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <>
            <Head>
                <title>Angielski z pasją - Julia Grzesiek</title>
                {/*<title>Julia Grzesiek Korepetycje z Angielskiego</title>*/}
                <meta name='description' content='Julia Grzesiek' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <>
                <Header />
                <Introduction />
                <Work />
                <FAQ />
            </>
        </>
    );
}
