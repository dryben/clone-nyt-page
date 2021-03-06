import React from 'react';
import styled, {css} from 'styled-components';

const StyledDyptich = styled.div`
  height: 100vh;
  background: white;
  display: flex;
  scroll-snap-align: start;
  padding: 12px;
  position:relative;
`;

const StyledImg = styled.img`
  width: calc(50vw - 24px);
  margin: 0 0 0 auto;
  object-fit: contain;
  ${props => props.top && css`
    margin-bottom: auto;
  `}
`

const StyledCaption = styled.div`
  position: absolute;
  bottom: 52px;
  left: 24px;
  p {
    margin: 0;
  }
`

export const Dyptich = ({ children, img, when, about, ...props}) => {
    return <StyledDyptich {...props}>
      <StyledImg src={img[0]} top></StyledImg>
      <StyledImg src={img[1]}></StyledImg>
      <StyledCaption>
        <p><strong>{when[0]}</strong></p>
        <p>{about[0]}</p>
        <p><strong>{when[1]}</strong></p>
        <p>{about[1]}</p>
      </StyledCaption>
    </StyledDyptich>;
  };
  