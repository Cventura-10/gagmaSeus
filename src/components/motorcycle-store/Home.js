import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Banner = styled.div`
  animation: ${fadeIn} 2s linear;
  margin: 20px;
  padding: 20px;
  border: 1px solid black;
  width: 80%;
  text-align: center;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  ${props => props.primary && css`
    background-color: #ddd;
    &:hover {
      background-color: #ccc;
    }
  `}
`;

const Home = () => {
  return (
    <HomeContainer>
      <Banner primary>Interactive Banner 1</Banner>
      <Banner>Interactive Banner 2</Banner>
    </HomeContainer>
  );
};

export default Home;
