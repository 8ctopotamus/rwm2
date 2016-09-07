import {mediaelementplayer} from 'meteor/delgermurun:mediaelementjs';
import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class RWPlayer extends TrackerReact(React.Component) {
  constructor(props) {
    super(props);
    this.state = {
      podcastFile: props.podcastData.acf.podcast_file,
      title: props.podcastData.title.rendered
    }
  }

  componentDidMount() {
    var rwPlayer = new MediaElementPlayer('#rwPlayer',{
      audioWidth: '100%',
        success: function (mediaElement, domObject) {
          // mediaElement.play()
        }
    });
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.id == this.props.id;
  }

  componentWillReceiveProps(nextProps) {
    rwPlayer.setSrc(nextProps.podcastData.acf.podcast_file);
    // rwPlayer.play();
  }

  _prepareTitle() { return {__html: this.props.podcastData.title.rendered}; };

  render() {
    return (
      <section className="player-wrap">
        <div className="row">
          <div className="col s11">
            <span className="player-title" dangerouslySetInnerHTML={this._prepareTitle()} />
            <audio id="rwPlayer" ref="rwPlayer" controls>
              <source ref="rwPlayerSource" src={this.props.podcastData.acf.podcast_file}></source>
            </audio>
          </div>
          <div className="col s1">
            <img src={this.props.podcastData.better_featured_image.media_details.sizes.thumbnail.source_url}
                 className="responsive-img" />
          </div>
        </div>
      </section>
    )
  }
}
