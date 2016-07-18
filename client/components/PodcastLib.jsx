import React from 'react';
import SinglePodcast from './SinglePodcast.jsx';
// import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class PodcastLib extends React.Component {
  

  _renderList() {
    return this.props.podcastData.map((podcast) => {
      return (
        <SinglePodcast key={podcast.id} podcast={podcast} />
      )
    });
  }

  render() {
    return (
      <section className="podcast-library-wrap">
        <h3>Podcast Library</h3>
        {this._renderList()}
      </section>
    )
  }
}
