import React from 'react';
import { Session } from 'meteor/session';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { _ } from 'meteor/underscore';

export default class ClientSidebar extends TrackerReact(React.Component) {
  _renderData() {
    const excludedProtperties = ['']

    let counter = 0;
    return _.map(this.props.rwClientData.acf, (el)=>{
      if (el === '') return;
      return <li key={counter++}>{el}</li>
    });
  }

  render() {
    // if(this.props.rwClientData.length < 1) return <span>Loading...</span>;

    let styles = {
      display: 'block',
      height: '200px',
      backgroundImage: "url(" + this.props.rwClientData.acf.advisor_image + ")",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }

    let actionBtnStyle={
      bottom: "45px",
      right: "24px",
    }

    return (
      <section className="client-sidebar">
        <div style={styles}></div>

        <h2 className="h3 rw-client-name">
          { this.props.rwClientData.name }
        </h2>

        <ul className="client-contact-details">
          {this._renderData()}
        </ul>


        <div className="fixed-action-btn" style={actionBtnStyle}>
        <a className="btn-floating btn-large red">
        <i className="large material-icons">contact_phone</i>
        </a>
        <ul>
          <li><a className="btn-floating red"><i className="material-icons">insert_chart</i></a></li>
          <li><a className="btn-floating yellow darken-1"><i className="material-icons">format_quote</i></a></li>
          <li><a className="btn-floating green"><i className="material-icons">publish</i></a></li>
          <li><a className="btn-floating blue"><i className="material-icons">attach_file</i></a></li>
        </ul>
        </div>
      </section>
    )
  }
}
