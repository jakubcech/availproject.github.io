import React from 'react';
import { contentData } from '../data/content-data';
import { TutorialsCard } from '.';

function Home() {
  return (
    <div className="bootstrap-wrapper">
      <div className="section-divider"></div>
      <div className="container">
        <div className="row">
          <div className="index-page exclude">
            <section className="section container-fluid">
              <div className="row justify-content-between">
                <h1 className="landing-page-h1">
                  <a href="https://www.availproject.org/">Avail</a>{' '}
                  Documentation Hub
                </h1>
              </div>
            </section>
          </div>
        </div>
        <div className="modular-blockchain-container">
          <p>
            Avail is a highly robust <strong>modular base layer</strong> that is
            laser-focused on <strong>data availability</strong>: ordering,
            publishing transactions, and making it possible to seamlessly verify
            the availability of block data.
          </p>
        </div>
        <div className="justify-content-center tutorial-cards card-container">
          {contentData.linksCard.map((props, idx) => (
            <TutorialsCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
