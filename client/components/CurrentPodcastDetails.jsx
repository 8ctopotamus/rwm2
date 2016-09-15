import React from 'react'
import AccountsUIWrapper from './AccountsUIWrapper.jsx'
import { Button, Modal } from 'react-materialize'

export default class CurrentPodcastDetails extends React.Component {
  _prepareTitle() { return {__html: this.props.podcastData.title.rendered} }
  _prepareDesc() { return {__html: this.props.podcastData.content.rendered} }

  _renderImg() {
    return this.props.podcastData.better_featured_image.media_details.sizes.medium.source_url ?
    this.props.podcastData.better_featured_image.media_details.sizes.medium.source_url :
    '/rwlogo-placeholder.svg'
  }

  render() {
    return (
      <div className="current-podcast-details">
        <div className="container" style={{marginBottom: '24px'}}>
          <Modal trigger={<span className="right">Login / Sign Up</span> }>
            <AccountsUIWrapper />
          </Modal>
        </div>

        <div className="container">
          <div className="row">
            <div className="col m8 col-md-pull-4">
              <h2 dangerouslySetInnerHTML={this._prepareTitle()} />
              <div dangerouslySetInnerHTML={this._prepareDesc()} />

              <a href={this.props.podcastData.acf.podcast_file}
                 download="download"
                 className="waves-effect waves-light btn"
                 style={{marginRight: 8}}>
                <i className="fa fa-file-audio-o right"></i>Download
              </a>
              <a className="waves-effect waves-light btn">
                <i className="fa fa-share-alt right"></i>Share
              </a>
            </div>

            <div className="col m4 col-md-push-8 text-center">
              <img src={this._renderImg()}
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
    )
  }
}
