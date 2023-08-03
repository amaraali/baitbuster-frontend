import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Video from '@/components/Video';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>BaitBuster - Online clickbait checker</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/img/bait.svg" />
      </Head>
      <Navbar />
      <Hero />
      <Video />
      <Footer />
    </>
  );
}

export default Home;
