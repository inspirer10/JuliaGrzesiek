import { useEffect } from 'react';
import Head from 'next/head';
import Lenis from 'lenis';
import Header from '@/Components/Header';
import Introduction from '@/Components/Introduction';
import Work from '@/Components/Work';
import FAQ from '@/Components/FAQ';
import Experience from '@/Components/Experience';
import Expect from '@/Components/Expect';
import Contact from '@/Components/Contact';
import RecentPhotos from '@/Components/RecentPhotos';

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
                <Expect />
                <Work />
                <Experience />
                <RecentPhotos />
                <FAQ />
                <Contact />
            </>
        </>
    );
}
