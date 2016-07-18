import React from 'react';
import { Session } from 'meteor/session';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { _ } from 'meteor/underscore';

export default class ClientSidebar extends TrackerReact(React.Component) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: this.props.rwClientData.name,
  //     img: this.props.rwClientData.acf.advisor_image,
  //     contactInfo: this.props.rwClientData.acf,
  //   }
  // }

  _renderData() {
    let counter = 0;
    return _.map(this.props.rwClientData.acf, (el)=>{
      if (el === '') return;
      return <li key={counter++}>{el}</li>
    });
  }

  render() {
    console.log(this.props.rwClientData)
    // if(this.props.rwClientData.length < 1) return <span>Loading...</span>;

    let styles = {
      display: 'block',
      height: '200px',
      backgroundImage: "url(" + this.props.rwClientData.acf.advisor_image + ")",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }

    return (
      <section className="client-sidebar">
        <div style={styles}></div>

        <h2 className="h3 rw-client-name">
          { this.props.rwClientData.name }
        </h2>

        <ul>
          {this._renderData()}
        </ul>
      </section>
    )
  }
}
