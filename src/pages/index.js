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
      <div>
        <Info>
          {artist}, <cite>{title}</cite>
        </Info>
        <IFrame
          src={`https://www.youtube.com/embed/${youtubeID}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></IFrame>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
`;

const Info = styled.p`
  margin: 1.45rem 0;
`;

const IFrame = styled.iframe`
  height: 45vw;
  width: 80vw;
`;

export default IndexPage;
