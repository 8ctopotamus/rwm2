import React from 'react'
import { Session } from 'meteor/session'
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import { _ } from 'meteor/underscore'

export default class ClientSidebar extends TrackerReact(React.Component) {
  _renderContactInfo() {
    let counter = 0
    return _.map(this.props.rwClientData.acf, (val, key) => {
      if (key === '' ||
          key === 'podcast_frequency' ||
          key === 'advisor_image' ||
          key === 'company_logo' ||
          key === 'compliance_group' ||
          key === 'compliance_message' ||
          key === 'intro_audio' ||
          key === 'outro_audio'
      ) return

      return <li key={key}>{val}</li>
    })
  }

  render() {
    console.log(this.props.rwClientData)

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
          {this._renderContactInfo()}
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
