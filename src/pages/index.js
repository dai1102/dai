import React from 'react';
import styled from 'styled-components';

import SEO from '../components/seo';
import './style.css';
import 'typeface-comfortaa';

const IndexPage = () => (
  <Container>
    <SEO />
    <Blockquote cite="https://en.wikipedia.org/wiki/Luv(Sic)_Hexalogy#Luv(Sic)_Part_2">
      <p>
        The rhymes will heal 'cause I believe in music
        <br />
        In times of need I won't be leaving you sick
        <br />
        The beat plus the melody's the recipe
        <br />
        Your vibe surely brings out the best in me
      </p>
      <footer>
        —Shing02, <cite>Luv(Sic) Part 2</cite>
      </footer>
    </Blockquote>
    <IFrame
      width="560"
      height="315"
      src="https://www.youtube.com/embed/If9HEbCpvB8"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></IFrame>
  </Container>
);

const Container = styled.div`
  align-items: center;
  background-color: #fff6e5;
  display: flex;
  height: 100vh;
  justify-content: center;
  padding: 1.45rem;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Blockquote = styled.blockquote`
  @media (max-width: 500px) {
    margin: 0;
    font-size: 0.875rem;
  }
`;

const IFrame = styled.iframe`
  @media (max-width: 500px) {
    height: unset;
    margin-top: 1.45rem;
    width: 100%;
  }
`;

export default IndexPage;
