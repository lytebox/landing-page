import React from "react";
import PropTypes from "prop-types";
import { LandingPageContainer } from './style';
import whiteBackground from "./white-background.png";

class Landingpage extends React.Component {
  render() {
    return (
      <LandingPageContainer>
          <section className="sec1">
              <div className="first-sentences">
                  <h1>Modern multimedia suite <br/> for agile teams</h1>
                  <p>The world’s first in-browser multimedia suite for <br/> both professional and home uses.</p>
                  <div className="first-buttons">
                      <div className="butt-try"><p>Try for free</p></div>
                      <div className="butt-pricing"><p>See pricing</p></div>
                  </div>
              </div>
              <div className="box">
                <h1>Our lyric displayer is open <br/> for public beta</h1>
                <p><a href="#">Find out more</a></p>
              </div>
              <svg id="curve" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1403.06 165.11"><path class="cls-1" d="M0,300S197,131,711,136c435,1,689,164,689,164Z" transform="translate(1.35 -135.39)"/></svg>
          </section>
          <section className="sec2">
              <div className="rectangle"></div>
              <h1>Tools like you’ve never <br/> seen before</h1>
              <p>From your essential multimedia tools like lyric-displayer <br/> and live visual generator to event specific like Bible <br/> verses displayer. We got you.</p>
              <div className="logos">
                <div className="feature">
                  <svg width="152" height="152" viewBox="0 0 152 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="76" cy="76" r="76" fill="#006EE5"/>
                    <path d="M39.0286 54.0769C37.8918 83.47 70.8901 93.2462 102.849 74.5385C142.798 51.1538 44.3802 8.43755 75.567 54.0769C135.49 141.769 67.285 82.8205 69.2337 120.333" stroke="white" stroke-width="6.82051" stroke-linecap="round" stroke-linejoin="bevel"/>
                  </svg>
                  <h3>SERIF</h3>
                  <p>Lyric displayer webapp</p>
                  <div className="butt try">Try for free</div>
                </div>
                <div className="feature">
                  <svg width="152" height="152" viewBox="0 0 152 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="76" cy="76" r="76" fill="#006EE5"/>
                    <rect x="44" y="44" width="64" height="64" rx="5" fill="white"/>
                    <rect x="44" y="76" width="64" height="32" rx="5" fill="#E4E4E4"/>
                  </svg>
                  <h3>TORAH</h3>
                  <p>Bible displayer</p>
                  <div className="butt soon">Coming soon</div>
                </div>
                <div className="feature">
                  <svg width="152" height="152" viewBox="0 0 152 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="76" cy="76" r="76" fill="#006EE5"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M94.6849 39.1606C80.024 31.012 61.3633 35.5846 52.2049 49.9084C43.0465 64.2322 46.7266 83.0892 60.2753 92.9774L62.4348 89.5999C50.7451 80.9086 47.6069 64.5251 55.5749 52.0632C63.5429 39.6012 79.7309 35.5746 92.5254 42.538L94.6849 39.1606Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M52.9852 107.793C67.6396 115.953 86.3039 111.396 95.4737 97.079C104.643 82.7624 100.978 63.9025 87.4374 54.0036L85.2752 57.3794C96.958 66.08 100.083 82.4659 92.1054 94.9216C84.1275 107.377 67.9363 111.391 55.1473 104.417L52.9852 107.793Z" fill="white"/>
                  </svg>
                  <h3>SNAZZY</h3>
                  <p>Live visual engine</p>
                  <div className="butt soon">Coming soon</div>
                </div>
              </div>
              <p className="more">... and more to come.</p>
              <div className="rectangle"></div>
              <h1>Say goodbye to ridiculous <br/> hardware specs</h1>
              <p>All of our tools run in your browser. Say goodbye to all of <br/> those expensive and ridiculously demanding softwares. <br/> Your browser is all you need to run our tools suite.</p>
              <div className="recommend">
                <p>We recommend</p>
                <div className="chrome">
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.58692 6.61992C8.43442 2.14225 13.7117 0 18.9509 0C25.7403 0 32.4647 3.59892 35.9195 10.3772C31.6097 10.3787 24.8615 10.3772 21.2056 10.3772C18.5551 10.3787 16.8435 10.3186 14.9894 11.2939C12.8108 12.4402 11.1657 14.5667 10.5925 17.0636L4.58692 6.61992ZM12.6778 19C12.6778 22.4833 15.5103 25.3175 18.9921 25.3175C22.4738 25.3175 25.3064 22.4833 25.3064 19C25.3064 15.5167 22.4738 12.6809 18.9921 12.6809C15.5103 12.6809 12.6778 15.5167 12.6778 19ZM21.4431 27.2697C17.8996 28.3242 13.7513 27.1542 11.4792 23.2338C9.74542 20.2397 5.16325 12.2566 3.07958 8.62758C0.97375 11.8576 0 15.4264 0 18.9303C0 27.5563 5.8995 35.7928 15.3156 37.6422L21.4431 27.2697ZM24.8599 12.6809C27.8113 15.4264 28.4557 19.8724 26.4543 23.3193C24.9486 25.9176 20.14 34.0322 17.8093 37.962C29.1919 38.6634 38 29.4753 38 19.0063C38 16.9274 37.6517 14.7947 36.9075 12.6809H24.8599Z" fill="#006EE5"/>
                  </svg>
                  <p>Google Chrome</p></div>
              </div>
          </section>
          <section className="sec3"></section>
      </LandingPageContainer>
    );
  }
}


export default Landingpage;
