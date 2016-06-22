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
    let styles = {
      display: 'block',
      height: '200px',
      backgroundImage: "url(" + this.state.img + ")",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }

    return (
      <div className="client-sidebar">
        <div style={styles}></div>

        <h2 className="h3 rw-client-name">
          { this.state.name }
        </h2>

        <ul>
          {this._renderData()}
        </ul>
      </div>
    )
  }
}
