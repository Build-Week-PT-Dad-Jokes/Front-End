import React from "react";
import Header from './Header';

const LandingPage = () => {
  return (
    <div className="wrapper">
      <div className="landing-page">
        <Header />
        <div className="carousel">
          <header className="carousel-header">
            <span className="left-button">{"<<"}</span>
            <h2>Sample Dad Joke Carousel</h2>
            <span className="right-button">{">>"}</span>
          </header>
          <section className="joke">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo ipsum repellat minus repellendus id illum itaque
              repudiandae labore rem numquam? Nihil perferendis dolor sed
              tenetur veniam provident perspiciatis pariatur minima.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
