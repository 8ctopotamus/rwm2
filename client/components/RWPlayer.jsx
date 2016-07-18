import { HTTP } from 'meteor/http';
import {mediaelementplayer} from 'meteor/delgermurun:mediaelementjs';
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Session } from 'meteor/session';
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

  render() {
    return (
      <section className="player-wrap">
        <img className="rw-logo" src="/realwealth-logo.svg" width="150" />
        <h1 className="h4">{this.props.podcastData.title.rendered}</h1>
        <audio id="rwPlayer" ref="rwPlayer" controls>
          <source ref="rwPlayerSource" src={this.props.podcastData.acf.podcast_file}></source>
        </audio>
      </section>
    )
  }
}
