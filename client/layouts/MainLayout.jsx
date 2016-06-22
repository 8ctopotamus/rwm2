import React from 'react';
import Player from '../components/Player.jsx';
import ClientSidebar from '../components/ClientSidebar.jsx';
import PodcastLib from '../components/PodcastLib.jsx';


// class CurrentPodcastInfo extends React.Component {
//   constructor(props) {
//   super(props);
//   this.state = {
//     currentPodcast: this.props.podcastData,
//     title: this.props.podcastData.title.rendered,
//     audio: this.props.podcastData.acf.podcast_file
//   }
// }
//   render() {
//     return (
//       <h1>current pod info</h1>
//     )
//   }
// }

export const MainLayout = ({content}) => (
  <div className="app-wrap">

    <Player podcastData={Session.get('currentPodcast')} />

    <ClientSidebar rwClientData={Session.get('rwClientData')} />

    <div className="main-container">
      <div className="container-fluid">
        {/*<CurrentPodcastInfo podcastData={Session.get('currentPodcast')} />*/}

        { content }
        <PodcastLib podcastData={Session.get('podcastData')} />
      </div>
    </div>
  </div>
);
