import React from 'react';

export default class CurrentPodcastDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.podcastData.title.rendered
    }
  }

  render() {
    return <h1>Current Pcst Deets</h1>;
  }
}
