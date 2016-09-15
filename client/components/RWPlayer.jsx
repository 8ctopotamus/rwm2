import {mediaelementplayer} from 'meteor/delgermurun:mediaelementjs';
import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class RWPlayer extends TrackerReact(React.Component) {
  constructor(props) {
    super(props);

//    console.log(this.props.podcastData)

    // this.state = {
    //   podcastFile: props.podcastData.acf.podcast_file,
    //   title: props.podcastData.title.rendered
    // }
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

  _renderImg() {
   return this.props.podcastData.better_featured_image.media_details.sizes.thumbnail.source_url ?
   [this.props.podcastData.better_featured_image.media_details.sizes.thumbnail.source_url] :
   '/rwlogo-placeholder.svg'
  }

  render() {
    return (
      <section className="player-wrap">
        <div className="row">
          <div className="col s11">
            <img src="/realwealth-logo-horiz.svg" className="rw-logo" alt="Real Wealth Media" />
            <h6 className="player-title" dangerouslySetInnerHTML={this._prepareTitle()} />
            <audio id="rwPlayer" ref="rwPlayer" controls>
              <source ref="rwPlayerSource" src={this.props.podcastData.acf.podcast_file}></source>
            </audio>
          </div>
          <div className="col s1">
            <img src={this._renderImg()} className="player-img" alt={"Guest: " + this.props.podcastData.better_featured_image.alt_text} />
          </div>
        </div>
      </section>
    )
  }
}
