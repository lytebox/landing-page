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
                  <div class="first-buttons">
                      <div class="butt-try"><p>Try for free</p></div>
                      <div class="butt-pricing"><p>See pricing</p></div>
                  </div>
              </div>
              <div className="box">
                <h1>Our lyric displayer is open <br/> for public beta</h1>
                <p>Find out more</p>
              </div>
              <svg id="curve" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1403.06 165.11"><path class="cls-1" d="M0,300S197,131,711,136c435,1,689,164,689,164Z" transform="translate(1.35 -135.39)"/></svg>
          </section>
          <section class="sec2">

              <div className="rectangle"></div>
          </section>
      </LandingPageContainer>
    );
  }
}


export default Landingpage;
