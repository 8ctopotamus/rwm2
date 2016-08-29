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
    Session.update({'currentPodcast': this})
    console.log(Session.get("currentPodcast"))
  }

  _toggleActive() {
    this.setState({active: !this.state.active});
  }

  render() {
    let podcast = this.props.podcast;

    let prepareMarkup = function(content) { return {__html: content}; };
    const stateStyle = this.state.active ? styles.active : styles.inactive;

    return (
      <div className="media" onClick={this._toggleActive}>
        <div className="media-body">
          { podcast.date }
          <h3 className="media-heading"
              dangerouslySetInnerHTML={prepareMarkup(podcast.title.rendered)}
              onClick={this._setAsCurrent.bind(podcast)} />
          <div dangerouslySetInnerHTML={prepareMarkup(podcast.content.rendered)}
               style={stateStyle}></div>
          <span>See {this.props.rwClientData.name + "'s Notes"}</span>
        </div>

        <div className="media-right text-center">
          {/*<img src={podcast.better_featured_image.media_details.sizes.thumbnail.source_url}
               alt={podcast.better_featured_image.alt_text}
               className="media-object" />*/}
          {/*podcast.better_featured_image.alt_text*/}
        </div>

      </div>
    )
  }
}
