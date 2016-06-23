import React from 'react';
import { Session } from 'meteor/session';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

const styles = {
  active: {
    display: 'inherit'
  },
  inactive: {
    display: 'none'
  }
}

export default class SinglePodcast extends TrackerReact(React.Component) {
  constructor() {
    super();
    this.state = {
      active: false
    }
    this._toggleActive = this._toggleActive.bind(this);
  }

  _setAsCurrent() {
    Session.setPersistent({'currentPodcast': this})
  }

  _toggleActive() {
    this.setState({active: !this.state.active});
  }

  render() {
    const ASSET_URL = "https://realwealthmarketing.com/wp-content/uploads/";
    let podcast = this.props.podcast;
    let prepareMarkup = function(content) { return {__html: content}; };
    const stateStyle = this.state.active ? styles.active : styles.inactive;

    return (
      <div className="media" onClick={this._toggleActive}>
        <div className="media-left">
          <img src={ASSET_URL + podcast.better_featured_image.media_details.file}
               alt={podcast.better_featured_image.alt_text}
               className="media-object" />
          <span>
            {podcast.better_featured_image.alt_text}
              <br />
            <strong>ToDo: click image to view Guest info</strong>
          </span>
        </div>

        <div className="media-body">
          <h4 className="h3 media-heading"
              onClick={this._setAsCurrent.bind(podcast)} >
              { podcast.title.rendered }
          </h4>
          { podcast.date }
          <div dangerouslySetInnerHTML={prepareMarkup(podcast.content.rendered)}
               style={stateStyle}></div>
        </div>
      </div>
    )
  }
}
