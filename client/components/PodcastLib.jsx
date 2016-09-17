import React from 'react'
import PodcastCard from './PodcastCard.jsx'
import TrackerReact from 'meteor/ultimatejs:tracker-react'

export default class PodcastLib extends React.Component {
  _renderList() {
    return this.props.podcastData.map((podcast) => {
      return (
        <PodcastCard key={podcast.id} podcast={podcast} rwClientData={this.props.rwClientData} />
      )
    })
  }

  render() {
    return (
      <section className="podcast-library-wrap">
        <h3>Podcast Library</h3>
        <div className="podcast-list">
          {this._renderList()}
        </div>
      </section>
    )
  }
}
