import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class PodcastLib extends TrackerReact(React.Component) {
  constructor(props) {
    super(props);
    this.state = {
      podcastData: this.props.podcastData
    }
  }

  _renderList() {
    let prepareMarkup = function(content) { return {__html: content}; };

    return this.state.podcastData.map((podcast) => {
      return (
        <div key={ podcast.id } className="row">
          <div className="col-sm-2">
            {/*<img src={ podcast.better_featured_image.media_details.sizes.medium.source_url } />*/}
          </div>
          <div className="col-sm-8">
            <h3>{ podcast.title.rendered }</h3>
            { podcast.date }
            <div dangerouslySetInnerHTML={prepareMarkup(podcast.content.rendered)}></div>
          </div>
          <div className="col-sm-2">
            Play
          </div>
        </div>
      )
    });
  }

  render() {
    return (
      <div className="podcast-library-wrap">
        <h1 className="h4">Podcast Library</h1>
        {this._renderList()}
      </div>
    )
  }
}
