import React from 'react';
import RWPlayer from '../components/RWPlayer.jsx';
import ClientSidebar from '../components/ClientSidebar.jsx';
import PodcastLib from '../components/PodcastLib.jsx';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

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

class AppWrap extends TrackerReact(React.Component) {
  constructor(props) {
   super(props);
  }


  render() {
    return (
      <div className="app-wrap">
        <RWPlayer podcastData={Session.get('currentPodcast')} />
        <ClientSidebar rwClientData={Session.get('rwClientData')} />

        <div className="main-container">
          <div className="container-fluid">
            {/*<CurrentPodcastInfo podcastData={Session.get('currentPodcast')} />*/}

            <PodcastLib podcastData={Session.get('podcastData')} />
          </div>
        </div>
      </div>
    );
  }
}


export const MainLayout = ({content}) => (
  <AppWrap content={content} />
);
