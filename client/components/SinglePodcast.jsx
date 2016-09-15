import React from 'react'
import { Session } from 'meteor/session'
import TrackerReact from 'meteor/ultimatejs:tracker-react'

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
    super()
    this.state = {
      active: false
    }
    this._toggleActive = this._toggleActive.bind(this)
  }

  _setAsCurrent() {
    Session.update({'currentPodcast': this})
    console.log(Session.get("currentPodcast"))
  }

  _toggleActive() {
    this.setState({active: !this.state.active})
  }

  _renderImg() {
    console.log(this.props.podcast)
    if(this.props.podcast.better_featured_image.media_details.sizes.thumbnail.source_url) {
      return this.props.podcast.better_featured_image.media_details.sizes.thumbnail.source_url
    } else {
      return '/rwlogo-placeholder.svg'
    }
  }

  render() {
    let podcast = this.props.podcast
    let prepareMarkup = function(content) { return {__html: content} }

    const stateStyle = this.state.active ? styles.active : styles.inactive

    return (
        <div className="card-panel z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s2">
              <img src={this._renderImg()}
                   alt={podcast.better_featured_image.alt_text}
                   className="circle responsive-img" />
              {podcast.better_featured_image.alt_text}
            </div>
            <div className="col s10">
              <h4 className="media-heading"
                  dangerouslySetInnerHTML={prepareMarkup(podcast.title.rendered)}
                  onClick={this._setAsCurrent.bind(podcast)} />
              <p>{ podcast.date }</p>
              <div dangerouslySetInnerHTML={prepareMarkup(podcast.content.rendered)}
                   style={stateStyle} />
              <span onClick={this._toggleActive}>See {this.props.rwClientData.name + "'s Notes"}</span>
          </div>
        </div>
      </div>
    )
  }
}
