import logo from './logo.svg';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import {Article} from './components/Article'
import {Cover} from './components/Cover'
import {TextOnly} from './components/TextOnly'
import {Single} from './components/Single'

const GlobalStyle = createGlobalStyle`
  body {
    background: #dfacee;
  }
`;


function App() {
  return (
    <>
    <GlobalStyle />
    <Article>
      <Cover>
        <h1>A City Ruptured</h1>
      </Cover>
      <TextOnly>
        <p>
          <p>Photographs by Ashley Gilbertson</p>
          <p>Produced by Renee Melides and Rebecca Lieberman</p>
          <p>Text by Nelson D. Schwartz</p>
          <em>March 9, 2021</em>
        </p>
        <p>
        New York City, the country’s largest metropolis and an engine of the American economy, is more than just another victim of the coronavirus. It is a canvas upon which nearly every element of the pandemic played out, from the collapse in tourism and employment to the rise in crime and the strain on city services.
        </p>
      </TextOnly>
      <Single img="https://static01.nyt.com/newsgraphics/2021/01/11/economic-nyc-v2/assets/images/0002_20200823_nyt_pandemic_03748-1050_x2.jpg">
        <p>
          <strong>Aug. 23, 2020</strong> Times Square
        </p>    
      </Single>
      <Single img="https://static01.nyt.com/newsgraphics/2021/01/11/economic-nyc-v2/assets/images/0003_20201001_nyt_pandemic_01501-720_x2.jpg">
        <p>
          <strong>Aug. 23, 2020</strong> Times Square
        </p>    
      </Single>
      <TextOnly>
        <p>
          As the virus marched across the United States last year,<a href="https://www.nytimes.com/interactive/2020/05/08/business/economy/april-jobs-report.html"> </a><a href="https://www.nytimes.com/interactive/2020/05/08/business/economy/april-jobs-report.html">over 20 million jobs</a> vanished in just one month, the worst toll since the Great Depression. In New York, where cases peaked early, the health and economic crises were devastating.
        </p>
        <p>
          Retailers closed their doors. Wealthy residents fled to second homes in the Hamptons. Late-night subway service was eliminated, a sign that many New Yorkers who had to keep going to work were largely left to fend for themselves.
        </p>
      </TextOnly>
      <Single img="https://static01.nyt.com/newsgraphics/2021/01/11/economic-nyc-v2/assets/images/0006b_20200906_nyt_pandemic_00866-m-720_x2.jpg">
        <p>
          <strong>Aug. 23, 2020</strong> Times Square
        </p>    
      </Single>
      <TextOnly>
        <p>
        We spent months documenting the changing city as its economy frayed and split during the pandemic.
        </p>
      </TextOnly>
      <Cover>
        <h1>Inequality</h1>
      </Cover>
      <TextOnly>
        <p>
        In a city with gleaming penthouses and decrepit slums, the pandemic made the extremes of rich and poor stand out even more.
        </p>
        <p>
        A 10-minute cab ride separated the moneyed fortresses of Park Avenue, with their gloved doormen and spacious apartments, from housing projects in disrepair. White-collar workers were able to retreat to home offices. Service workers found themselves out of jobs.
        </p>
      </TextOnly>
      <Single img="https://static01.nyt.com/newsgraphics/2021/01/11/economic-nyc-v2/assets/images/0009_20201221_pandemic_iphone_00010-720_x2.jpg">
        <p>
          <strong>Aug. 23, 2020</strong> Times Square
        </p>    
      </Single>
      <Single img="https://static01.nyt.com/newsgraphics/2021/01/11/economic-nyc-v2/assets/images/0008_20201206_pandemic_iphone_00445-720_x2.jpg">
        <p>
          <strong>Aug. 23, 2020</strong> Times Square
        </p>    
      </Single>
    </Article>
    </>
  );
}

export default App;
