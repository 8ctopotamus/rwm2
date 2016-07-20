import React from 'react';
import SinglePodcast from './SinglePodcast.jsx';
// import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class PodcastLib extends React.Component {
  _renderList() {
    return this.props.podcastData.map((podcast) => {
      return (
        <SinglePodcast key={podcast.id} podcast={podcast} rwClientData={this.props.rwClientData} />
      )
    });
  }

  render() {
    return (
      <section className="container-fluid podcast-library-wrap">
        <h3>Podcast Library</h3>
        <div className="podcast-list">
          {this._renderList()}
        </div>
      </section>
    )
  }
}
