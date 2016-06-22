import React from 'react';
import { Session } from 'meteor/session';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class ClientSidebar extends TrackerReact(React.Component) {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      designation: this.props.designation
    }
  }

  render() {
    return (
      <div>
        <small>ClientSidebar</small>
        <h1>{this.state.name}</h1>
        <ul>
          <li>{this.state.designation}</li>
        </ul>
      </div>
    )
  }
}
