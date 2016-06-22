import { HTTP } from 'meteor/http';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import React from 'react';
import { Session } from 'meteor/session';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class PodcastLib extends TrackerReact(React.Component) {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    }
  }

  _renderList() {
    console.log(this.state.data);
    // this.state.data.map((podcast) => {
    //   return (<div key="podcast.id">{podcast.id}</div>)
    // });
  }

  render() {
    return (
      <div className="podcast-library-wrap">
        <h1 className="h6">Podcast Library</h1>
          {this.state.data}
          {this._renderList()}
      </div>
    )
  }
}
