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
    const ASSET_URL = "https://realwealthmarketing.com/wp-content/uploads/";
    let prepareMarkup = function(content) { return {__html: content}; };

    return this.state.podcastData.map((podcast) => {
      return (
        <div key={ podcast.id } className="media">
          <div className="media-left">
            <img src={ASSET_URL + podcast.better_featured_image.media_details.file}
                 alt={podcast.better_featured_image.alt_text}
                 className="media-object" />
            <span>
              {podcast.better_featured_image.alt_text}
                <br />
              <strong>ToDo: click image to view Guest info</strong>
            </span>
          </div>
          <div className="media-body">
            <h4 className="h3 media-heading">{ podcast.title.rendered }</h4>
            { podcast.date }
            <div dangerouslySetInnerHTML={prepareMarkup(podcast.content.rendered)}></div>
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
