import React from 'react';

import '../../styles/Home.css'
import Banner from '../Features/Banner';
import Features from '../Features/Features';
import NavBar from '../Features/NavBar';
import chat from '../../assets/icon-chat.png';
import money from '../../assets/icon-money.png';
import security from '../../assets/icon-security.png';

export default function Home() {
  const dataFeatures = [
    {
      id: "1",
      title: "You are our #1 priority",
      content: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
    },
    {
      id: "2",
      title: "More savings means higher rates",
      content: "The more you save with us, the higher your interest rate will be!"
    },
    {
      id: "3",
      title: "Security you can trust",
      content: "We use top of the line encryption to make sure your data and money is always safe."
    }
  ]
  return (
    <main className="home">
      <NavBar />
      <main>
        <Banner />
        <section className="features">
          <Features logo={chat} title={dataFeatures[0].title} content={dataFeatures[0].content}/>
          <Features logo={money} title={dataFeatures[1].title} content={dataFeatures[1].content}/>
          <Features logo={security} title={dataFeatures[2].title} content={dataFeatures[2].content}/>
        </section>
      </main>
    </main>
  )
}
