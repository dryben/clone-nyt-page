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
    </Article>
    </>
  );
}

export default App;
