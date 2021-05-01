import React from 'react';
import styled, {css} from 'styled-components';

const StyledSingle = styled.div`
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: row;
  scroll-snap-align: start;
  padding: 12px;
  position:relative;
`;

const StyledImg = styled.img`
  width: calc(50vw - 24px);
  margin: 0 0 0 auto;
  object-fit: contain;
  ${props => props.bottom && css`
    margin-top: auto;
    margin-bottom: 10px;
  `}
`

const StyledCaption = styled.div`
  position: absolute;
  bottom: 52px;
  left: 24px;
  // padding-left: 10px;
  // margin: auto 0 10vh 0;
  p {
    margin: 0;
  }
`

export const Dyptich = ({ children, img, when, about, ...props}) => {
    return <StyledSingle {...props}>
      <StyledImg src={img[0]}></StyledImg>
      <StyledImg src={img[1]} bottom></StyledImg>
      <StyledCaption>
        <p><strong>{when[0]}</strong></p>
        <p>{about[0]}</p>
        <p><strong>{when[1]}</strong></p>
        <p>{about[1]}</p>
      </StyledCaption>
    </StyledSingle>;
  };
  