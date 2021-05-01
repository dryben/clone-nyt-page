import React from 'react';
import styled, {css} from 'styled-components';

const StyledSingle = styled.div`
  height: 100vh;
  background: white;
  display: flex;
  scroll-snap-align: start;
  padding: 12px;
  ${props => props.reverse && css`
    flex-direction: row-reverse;
  `}
`;

const StyledImg = styled.img`
  width: 72vw;
  margin: 0 0 0 auto;
  object-fit: contain;
`

const StyledCaption = styled.div`
  padding-left: 10px;
  margin: auto 0 10vh 0;
`

export const Single = ({ children, img, when, about, ...props}) => {
    return <StyledSingle {...props}>
      <StyledImg src={img}>

      </StyledImg>
      <StyledCaption>
        <p><strong>{when}</strong></p>
        <p>{about}</p>
        {children}
      </StyledCaption>
      </StyledSingle>;
  };
  