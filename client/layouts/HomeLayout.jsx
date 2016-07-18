import React from 'react';
import RWPlayer from '../components/RWPlayer.jsx';

export const HomeLayout = ({content}) => (
  <div>
    <RWPlayer podcastData={Session.get("currentPodcast")} />
    <main>
      {content}
    </main>
  </div>
);
