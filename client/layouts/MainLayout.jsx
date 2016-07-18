import React from 'react';
// import { createContainer } from 'meteor/react-meteor-data';

import RWPlayer from '../components/RWPlayer.jsx';
import ClientSidebar from '../components/ClientSidebar.jsx';
import CurrentPodcastDetails from '../components/CurrentPodcastDetails.jsx';
import PodcastLib from '../components/PodcastLib.jsx';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

class AppWrap extends TrackerReact(React.Component) {
  constructor(props) {
    super(props);
    this.state = {
      subscription: {
        rwClient: Meteor.subscribe("RWClient", FlowRouter.getParam('userslug')),
        podcasts: Meteor.subscribe("Podcasts")
      },
      // libData: Session.get('podcastData'),
    };
  }

  componentWillUnmount() {
    this.state.subscription.podcasts.stop();
    this.state.subscription.rwClient.stop();
  }

  _getRWClient() {
    let userslug = FlowRouter.getParam('userslug');
    return RWClients.findOne({"slug" : userslug});
  }

  _getPodcasts() {
    return Podcasts.find().fetch();
  }

  render() {
    let rwClient = this._getRWClient();
    if (rwClient === undefined) {
      return <span>"Loading <em>Real</em> Wealth<sup>&reg;</sup> Advisor"</span>; }

    let podcasts = this._getPodcasts();
    if (podcasts.length < 1) {
      return <span>Loading podcasts</span> }

    console.log(Session.get('currentPodcast'))

    return (
      <div className="app-wrap">
      <RWPlayer podcastData={Session.get('currentPodcast')} />

        <ClientSidebar rwClientData={rwClient} />

        <div className="main-container">
          <div className="container-fluid">
            {/*<CurrentPodcastDetails podcastData={Session.get('currentPodcast')} />*/}
            <PodcastLib podcastData={podcasts} />
          </div>
        </div>
      </div>
    );
  }
}

export const MainLayout = ({content}) => (
  <AppWrap content={content} />
);
