import React from 'react';

export default class CurrentPodcastDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.podcastData.title.rendered
    }
  }

  _prepareTitle() { return {__html: this.props.podcastData.title.rendered}; };
  _prepareDesc() { return {__html: this.props.podcastData.content.rendered}; };

  render() {
    return (
      <div className="container-fluid current-podcast-details">
        <div className="row">
          <div className="col-md-8">
            <h1 dangerouslySetInnerHTML={this._prepareTitle()} />
            <div dangerouslySetInnerHTML={this._prepareDesc()} />
          </div>
          <div className="col-md-4 text-center">
            <img src={this.props.podcastData.better_featured_image.media_details.sizes.medium.source_url}
                 className="img-responsive center-block"
                 alt={this.props.podcastData.better_featured_image.alt_text} />
               {this.props.podcastData.better_featured_image.alt_text}
          </div>
        </div>

        <div className="icon-container">
          <a href="" title="Download" download="">
            <i className="fa fa-download fa-3x"></i>
            <strong>Download</strong> This Episode
          </a>
          <span>
            <i className="fa fa-mail-forward fa-3x"></i>
            <strong>Forward</strong> to a Friend
          </span>
          <span>
            <i className="fa fa-microphone fa-3x"></i>
            <strong>Free Subscription</strong> to <em>Real</em>Wealth<sup>&reg;</sup>
          </span>
          <span>
            <i className="fa fa-info fa-3x"></i>
            More information
          </span>
        </div>

      </div>
    );
  }
}
