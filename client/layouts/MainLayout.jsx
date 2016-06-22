import React from 'react';
import Player from '../components/Player.jsx';
import ClientSidebar from '../components/ClientSidebar.jsx';
import PodcastLib from '../components/PodcastLib.jsx';

export const MainLayout = ({content}) => (
  <div className="app-wrap">
    <Player podcast={Session.get('currentAudio')}
              title={Session.get('currentTitle')} />

    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <ClientSidebar
              name={Session.get('rwClientName')}
              designation={Session.get('designation')} />
        </div>
        <div className="col-md-9">
          { content }
          <PodcastLib data={Session.get('podcastData')} />
      </div>
      </div>
    </div>
  </div>
);
