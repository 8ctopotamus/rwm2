import { HTTP } from 'meteor/http';
import {mediaelementplayer} from 'meteor/delgermurun:mediaelementjs';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import React from 'react';
import { Session } from 'meteor/session';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class Player extends TrackerReact(React.Component) {
  constructor(props) {
    super(props);
    this.state = {
      currentPodcast: this.props.podcastData,
      title: this.props.podcastData.title.rendered,
      audio: this.props.podcastData.acf.podcast_file
    }
  }

  componentDidMount() {
    console.log(this.state.currentPodcast)

    $('#player').mediaelementplayer({
      audioWidth: '80%',
      success: function (mediaElement, domObject) {
        // mediaElement.play();
      }
    });
  }

  render() {

    return (
      <div className="player-wrap">
        <div className="container">
          <h1 className="h6">{this.state.title}</h1>
          <audio id="player" controls>
            <source src={this.state.audio}></source>
          </audio>
        </div>
      </div>
    )
  }
}
