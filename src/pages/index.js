import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import SEO from '../components/seo';
import { SONGS } from '../const';
import './style.css';
import 'typeface-comfortaa';

const IndexPage = () => {
  const [{ artist, title, youtubeID }, setSong] = useState({});

  useEffect(() => {
    const song = SONGS[Math.floor(Math.random() * SONGS.length)];
    setSong(song);
  }, []);

  return (
    <Container>
      <SEO />
      <Info>
        —{artist}, <cite>{title}</cite>
      </Info>
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
  display: flex;
  height: 100vh;
  padding: 1.45rem;
  place-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Info = styled.p`
  margin: 1.45rem;
`;

const IFrame = styled.iframe`
  @media (max-width: 500px) {
    height: unset;
    margin-top: 1.45rem;
    width: 100%;
  }
`;

export default IndexPage;
