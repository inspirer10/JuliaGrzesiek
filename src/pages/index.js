import Head from 'next/head';
import Header from '@/Components/Header';
import Introduction from '@/Components/Introduction';
import Blog from '@/Components/Blog';

export default function Home() {
    return (
        <>
            <Head>
                <title>Julia Grzesiek Korepetycje z Angielskiego</title>
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
                <Blog />
            </>
        </>
    );
}
