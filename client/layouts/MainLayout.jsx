import React from 'react';
// import { createContainer } from 'meteor/react-meteor-data';
import RWPlayer from '../components/RWPlayer.jsx';
import ClientFooter from '../components/ClientFooter.jsx';
import ClientSidebar from '../components/ClientSidebar.jsx';
import CurrentPodcastDetails from '../components/CurrentPodcastDetails.jsx';
import PodcastLib from '../components/PodcastLib.jsx';
import ReactSpinner from 'react-spin';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

class AppWrap extends TrackerReact(React.Component) {
  constructor(props) {
    super(props);
    this.state = {
      subscription: {
        rwClient: Meteor.subscribe("RWClient", FlowRouter.getParam('userslug')),
        podcasts: Meteor.subscribe("Podcasts", 10)

      }
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
      return <ReactSpinner /> }
      // return <span>"Loading <em>Real</em> Wealth<sup>&reg;</sup> Advisor"</span>; }
    // else if (rwClient == 0) {
    //   return <span>Cannot find {FlowRouter.getParam("slug")}</span>}

    let podcasts = this._getPodcasts();
    if (podcasts.length < 1) {
      return <ReactSpinner /> }

    if(Session.get('currentPodcast')==undefined) {
      Session.setDefaultPersistent({'currentPodcast': podcasts[0]});
      console.log(Session.get('currentPodcast'))
    }

    return (
      <div className="app-wrap">
        <RWPlayer podcastData={Session.get('currentPodcast')} />
        <ClientSidebar rwClientData={rwClient} />

        <div className="main-container">
          <CurrentPodcastDetails podcastData={Session.get('currentPodcast')} />
          <PodcastLib podcastData={podcasts}
                      rwClientData={rwClient} />
          <ClientFooter complianceMsg={rwClient.acf.compliance_message} />
        </div>
      </div>
    );
  }
}

export const MainLayout = ({content}) => (
  <AppWrap content={content} />
);
