import React from 'react';
import { Session } from 'meteor/session';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import { map } from 'lodash';

export default class ClientSidebar extends TrackerReact(React.Component) {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.rwClientData.name,
      img: this.props.rwClientData.acf.advisor_image,
      contactInfo: this.props.rwClientData.acf,
    }
  }

  _renderData() {
    let counter = 0;
    return _.map(this.state.contactInfo, (el)=>{
      if (el === '') return;
      return <li key={counter++}>{el}</li>
    });
  }

  render() {
    return (
      <div className="client-sidebar">
        <img src={ this.state.img } className="center-block" />
        <h2 className="text-center">{ this.state.name }</h2>
        <ul>
          {this._renderData()}
        </ul>
      </div>
    )
  }
}
