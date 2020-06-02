import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import SEO from '../components/seo';
import { SONGS } from '../const';
import './style.css';
import 'typeface-comfortaa';

const IndexPage = () => {
  const [{ title, blockQuote, youtubeID }, setSong] = useState({});

  useEffect(() => {
    const song = SONGS[Math.floor(Math.random() * SONGS.length)];
    setSong(song);
  }, []);

  return (
    <Container>
      <SEO />
      {blockQuote && (
        <Blockquote cite={blockQuote.cite}>
          <Quote>{blockQuote.quote.join('\n')}</Quote>
          <footer>
            —{blockQuote.author}, <cite>{title}</cite>
          </footer>
        </Blockquote>
      )}
      <IFrame
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${youtubeID}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></IFrame>
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
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

const Quote = styled.p`
  white-space: pre-wrap;
`;

const IFrame = styled.iframe`
  @media (max-width: 500px) {
    height: unset;
    margin-top: 1.45rem;
    width: 100%;
  }
`;

export default IndexPage;
