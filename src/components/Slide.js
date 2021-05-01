import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-slideshow-image';

const EachFade = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  position: absolute;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  // div {
  //   width: 75%;
  // }
`

const fadeImages = [
  "https://static01.nyt.com/newsgraphics/2021/01/11/economic-nyc-v2/assets/images/0001_20200930_nyt_pandemic_00387-1440_x2.jpg",
  "https://static01.nyt.com/newsgraphics/2021/01/11/economic-nyc-v2/assets/images/0004_20201207_nyt_pandemic_00109-1440_x2.jpg",
  "https://static01.nyt.com/newsgraphics/2021/01/11/economic-nyc-v2/assets/images/0005_20200828_nyt_pandemic_05114-1440_x2.jpg"
];


export const Slide = () => {
  return (
    <div className="slide-container">
      <Fade arrows={false} duration={1500} pauseOnHover={false}>
        <EachFade>
          <div>
            <img src={fadeImages[0]} />
          </div>
        </EachFade>
        <EachFade>
          <div>
            <img src={fadeImages[1]} />
          </div>
        </EachFade>
        <EachFade>
          <div>
            <img src={fadeImages[2]} />
          </div>
        </EachFade>
      </Fade>
    </div>
  );
};
  