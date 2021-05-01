import { createGlobalStyle } from 'styled-components';
import {Article} from './components/Article'
import {Cover} from './components/Cover'
import {TextOnly} from './components/TextOnly'
import {Single} from './components/Single'
import { Dyptich } from './components/Dyptich';

const GlobalStyle = createGlobalStyle`
  body {
    background: gray;
  }
`;


function App() {
  return (
    <>
    <GlobalStyle />
    <Article>
      <Cover>
        <span>A</span>
        <span>City</span>
        <span>Reptured</span>
      </Cover>
      <TextOnly>
        <p>
          <strong>Photographs by Ashley Gilbertson </strong>
          <strong> Produced by Renee Melides and Rebecca Lieberman </strong> 
          <strong>Text by Nelson D. Schwartz</strong>
          <em>March 9, 2021</em>
        </p>
        <p>
          New York City, the country’s largest metropolis and an engine of the American economy, is more than just another victim of the coronavirus. It is a canvas upon which nearly every element of the pandemic played out, from the collapse in tourism and employment to the rise in crime and the strain on city services.
        </p>
      </TextOnly>
      <Single reverse
        img="https://static01.nyt.com/newsgraphics/2021/01/11/economic-nyc-v2/assets/images/0002_20200823_nyt_pandemic_03748-1050_x2.jpg"
        when="Aug. 23, 2020"
        about="Times Square">
      </Single>
      <Single 
        img="https://static01.nyt.com/newsgraphics/2021/01/11/economic-nyc-v2/assets/images/0003_20201001_nyt_pandemic_01501-720_x2.jpg"
        when="OCT. 1, 2020"
        about="Inside the Astoria, Queens, home of a couple while they worked alongside their two small children"> 
      </Single>
      <TextOnly>
        <p>
          As the virus marched across the United States last year,<a href="https://www.nytimes.com/interactive/2020/05/08/business/economy/april-jobs-report.html"> </a><a href="https://www.nytimes.com/interactive/2020/05/08/business/economy/april-jobs-report.html">over 20 million jobs</a> vanished in just one month, the worst toll since the Great Depression. In New York, where cases peaked early, the health and economic crises were devastating.
        </p>
        <p>
          Retailers closed their doors. Wealthy residents fled to second homes in the Hamptons. Late-night subway service was eliminated, a sign that many New Yorkers who had to keep going to work were largely left to fend for themselves.
        </p>
      </TextOnly>
      <Single 
        img="https://static01.nyt.com/newsgraphics/2021/01/11/economic-nyc-v2/assets/images/0006b_20200906_nyt_pandemic_00866-m-720_x2.jpg"
        when="SEPT. 5, 2020"
        about="Moving out of Crown Heights, Brooklyn, to return to New Mexico">
      </Single>
      <TextOnly>
        <p>
        We spent months documenting the changing city as its economy frayed and split during the pandemic.
        </p>
      </TextOnly>
      <Cover
        img="https://static01.nyt.com/newsgraphics/2021/01/11/economic-nyc-v2/assets/images/0008_20201206_pandemic_iphone_00445-1440_x2.jpg"
        when="Dec. 6, 2020"
        about="Dining out in SoHo">
        <span>Inequality</span>
        {/* <h1></h1> */}
      </Cover>
      <TextOnly>
        <p>
        In a city with gleaming penthouses and decrepit slums, the pandemic made the extremes of rich and poor stand out even more.
        </p>
        <p>
        A 10-minute cab ride separated the moneyed fortresses of Park Avenue, with their gloved doormen and spacious apartments, from housing projects in disrepair. White-collar workers were able to retreat to home offices. Service workers found themselves out of jobs.
        </p>
      </TextOnly>
      <Single reverse
        img="https://static01.nyt.com/newsgraphics/2021/01/11/economic-nyc-v2/assets/images/0009_20201221_pandemic_iphone_00010-720_x2.jpg"
        when="DEC. 21, 2020"
        about="The New York Stock Exchange">
      </Single>
      <Single 
        img="https://static01.nyt.com/newsgraphics/2021/01/11/economic-nyc-v2/assets/images/0010_20201030_iphone_pandemic_00138-1050_x2.jpg"
        when="OCT. 30, 2020"
        about="Times Square">
      </Single>
      <Dyptich 
        img={[
          "https://static01.nyt.com/newsgraphics/2021/01/11/economic-nyc-v2/assets/images/0018_20201002_nyt_pandemic_00612-720_x2.jpg",
          "https://static01.nyt.com/newsgraphics/2021/01/11/economic-nyc-v2/assets/images/0019_20200928_nyt_pandemic_02392-720_x2.jpg"
        ]}
        when={["OCT. 2, 2020","SEPT. 28, 2020"]}
        about={[
          "An occupational therapist working over Zoom in Hell’s Kitchen",
          "Food delivery people in Harlem"
        ]}>
      </Dyptich>
      <TextOnly>
        <p><strong>Related Coverage</strong></p>
        <p>
          <strong>
            <a href="https://www.nytimes.com/2021/03/10/insider/new-york-economy-photos.html">Times Insider: Photographing a New York in Need</a>
            </strong>
            <em>March 10, 2021</em>
          <strong>
            <a href="https://www.nytimes.com/2020/03/19/business/coronavirus-photos-economy.html">Witnessing the Birth of the Coronavirus Economy</a>
            </strong>
          <em>March 19, 2020</em>
          <strong>
            <a href="https://www.nytimes.com/2020/04/20/nyregion/new-york-economy-coronavirus.html">‘I Don’t Think the New York That We Left Will Be Back for Some Years’</a>
            </strong>
          <em>April 20, 2020</em>
          <strong>
            <a href="https://www.nytimes.com/2020/07/21/business/economy/coronavirus-cities.html">The Coronavirus Threatens the Luster of Superstar Cities</a>
            </strong>
          <em>July 21, 2020</em>
        </p>
        <p>
          <em>Matisse gallery painting credit: 2021 Succession H. Matisse / Artists Rights Society (ARS), New York</em>
        </p>
      </TextOnly>
    </Article>
    </>
  );
}

export default App;
