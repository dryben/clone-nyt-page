import React from 'react';
import styled from 'styled-components';

const StyledSingle = styled.div`
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: row-reverse;
  scroll-snap-align: start;
  padding: 12px;
`;

const StyledImg = styled.img`
  width: 72vw;
  margin: 0 0 0 auto;
  object-fit: contain;
`

const StyledCaption = styled.div`
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
  