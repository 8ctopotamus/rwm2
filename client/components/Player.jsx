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
      podcastData: this.props.podcastData,
      podcast: this.props.podcast,
      title: this.props.title
    }
  }

  componentDidMount() {
    console.log(this.state.podcastData)
    $('#player').mediaelementplayer({
      audioWidth: '90%',
      success: function (mediaElement, domObject) {
        // mediaElement.play();
      }
    });
  }

  render() {
    return (
      <div className="player-wrap">
        <div className="row">
          <div className="col-sm-3">
            Real Wealth
          </div>
          <div className="col-sm-9">
            <h1 className="h6">{this.state.title}</h1>
            <audio id="player" controls>
              <source src={this.state.podcast}></source>
            </audio>
          </div>
        </div>
      </div>
    )
  }
}
