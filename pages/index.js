import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Card from '../layout/Card';
import TabSection from '../components/TabSection';

export default function Home() {

  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (index) => {
    setActiveTab(index)
  }

  return (
    <>
      <style jsx>{`
      section {
        display: flex;
      }
    `}
      </style>
      <Head>
        <title>DevKasun Home page</title>
        <meta name="description" content="Welcome to my website. Checkout projects that I have done." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <Card>
          <div className="card-header">
            <div className="header-content">
              <div className="profile-image">
                <Image src="/man.png" alt="avatar" width="64" height="64" />
              </div>
              <h3>Kasun Lakshitha</h3>
              <h6>UI developer</h6>
            </div>
          </div>
          <div className="card-main">
            <TabSection activeTab={activeTab} />
            <div className="card-buttons">
              <button
                className={activeTab === 1 ? 'btn active' : null}
                type="button"
                value="about"
                onClick={() => changeTab(1)}>
                About
              </button>
              <button
                className={activeTab === 2 ? 'btn active' : null}
                type="button"
                value="experience"
                onClick={() => changeTab(2)}>
                Experience
              </button>
              <button
                className={activeTab === 3 ? 'btn active' : null}
                type="button"
                value="contact"
                onClick={() => changeTab(3)}>
                Contact
              </button>
            </div>
          </div>
        </Card>
      </section>
    </>
  )
}
