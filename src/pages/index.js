import Head from 'next/head';

import Accomplishments from '../components/Accomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Chris Stultz | Design Engineer</title>
        <meta
          name='description'
          content='Chris Stultz is a design engineer who designs interfaces and builds them in production code: UX/UI design, frontend development and design systems.'
        />
        <meta property='og:title' content='Chris Stultz | Design Engineer' />
        <meta
          property='og:description'
          content='UX/UI design, frontend development and design systems, from Figma to production.'
        />
      </Head>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Accomplishments />
    </Layout>
  );
};

export default Home;
