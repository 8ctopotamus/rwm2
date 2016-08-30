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
      <div className="current-podcast-details">

        <div className="">
          <div className="row">
            <div className="col m5 col-md-push-8 text-center">
              <img src={this.props.podcastData.better_featured_image.media_details.sizes.medium.source_url}
                   className="responsive-img center-block z-depth-3"
                   alt={this.props.podcastData.better_featured_image.alt_text} />
                 {this.props.podcastData.better_featured_image.alt_text}
            </div>

            <div className="col m7 col-md-pull-4">
              <h2 dangerouslySetInnerHTML={this._prepareTitle()} />
              <div dangerouslySetInnerHTML={this._prepareDesc()} />

                <a className="btn-floating waves-effect waves-light red"><i className="material-icons">add</i></a>
                <a className="btn-floating waves-effect waves-light red"><i className="material-icons">add</i></a>
                <a className="waves-effect waves-light btn"><i className="fa fa-file-audio-o right"></i>Download</a>
                <a className="waves-effect waves-light btn"><i className="material-icons right">cloud</i>Subscribe</a>
            </div>
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
