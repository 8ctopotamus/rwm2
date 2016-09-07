import React from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import { Button, Modal } from 'react-materialize';

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
        <div className="container" style={{marginBottom: '24px'}}>
          <Modal header='Modal Header' trigger={<span className="right">Login / Sign Up</span> }>
            <AccountsUIWrapper />
          </Modal>

          <img className="rw-logo" src="/realwealth-logo.svg" width="150" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col m8 col-md-pull-4">
              <h2 dangerouslySetInnerHTML={this._prepareTitle()} />
              <div dangerouslySetInnerHTML={this._prepareDesc()} />
              <a className="waves-effect waves-light btn"><i className="fa fa-file-audio-o right"></i>Download</a>
              <a className="btn-floating waves-effect waves-light red"><i className="fa fa-share-alt right"></i></a>
            </div>

            <div className="col m4 col-md-push-8 text-center">
              <img src={this.props.podcastData.better_featured_image.media_details.sizes.medium.source_url}
                   className="responsive-img center-block z-depth-3 center"
                   alt={this.props.podcastData.better_featured_image.alt_text} />
              <p className="center-align">{this.props.podcastData.better_featured_image.alt_text}</p>
            </div>
          </div>
        </div>

        <aside className="row">
          <div className="col m6">
            ad
          </div>
          <div className="col m6">
            Quote
          </div>
        </aside>

      </div>
    );
  }
}
