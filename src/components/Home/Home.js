import React from 'react';

import '../../styles/Home.css';
import Banner from '../Features/Banner';
import Features from '../Features/Features';
import { dataFeatures } from '../../datas/dataFeatures';
import NavBar from '../Features/NavBar';
import Footer from '../Features/Footer';

export default function Home() {
  return (
    <div className="home">
      <NavBar />
      <main>
        <Banner />
        <section className="features">
          {dataFeatures.map((data, index) => (
            <Features key={index} logo={data.logo} title={data.title} content={data.content} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}
