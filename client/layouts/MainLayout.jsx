import React from 'react';
import Player from '../components/Player.jsx';
import ClientSidebar from '../components/ClientSidebar.jsx';
import PodcastLib from '../components/PodcastLib.jsx';

export const MainLayout = ({content}) => (
  <div className="app-wrap">

    <Player
      podcastData={Session.get('podcastData')}
      podcast={Session.get('currentAudio')}
      title={Session.get('currentTitle')} />

    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <ClientSidebar rwClientData={Session.get('rwClientData')} />
        </div>
        <div className="col-md-9">
          { content }
          <PodcastLib podcastData={Session.get('podcastData')} />
        </div>
      </div>
    </div>
  </div>
);
