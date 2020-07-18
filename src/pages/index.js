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
      <p>
        {artist}, <cite>{title}</cite>
      </p>
      <IFrame
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
  flex-direction: column;
  justify-content: center;
`;

const IFrame = styled.iframe`
  height: 45vw;
  width: 80vw;
`;

export default IndexPage;
