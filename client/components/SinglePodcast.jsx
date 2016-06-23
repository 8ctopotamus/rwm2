import React from 'react';
import { Session } from 'meteor/session';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class SinglePodcast extends TrackerReact(React.Component) {
  constructor(props) {
    super(props);
    this.state = {
      podcastData: this.props.podcastData
    }
  }

  _setAsCurrent(e) {
    Session.update({'currentPodcast': this});
  }

  render() {
    return (
      <div>Single Podcast</div>
    )
  }
}
