import { Container, Row, Col, Tab, Tabs } from 'react-materialize'
import React from 'react'
// import { createContainer } from 'meteor/react-meteor-data'
import RWPlayer from '../components/RWPlayer.jsx'
import ClientFooter from '../components/ClientFooter.jsx'
import ClientSidebar from '../components/ClientSidebar.jsx'
import CurrentPodcastDetails from '../components/CurrentPodcastDetails.jsx'
import PodcastLib from '../components/PodcastLib.jsx'
import ReactSpinner from 'react-spin'
import TrackerReact from 'meteor/ultimatejs:tracker-react'

class AppWrap extends TrackerReact(React.Component) {
  constructor(props) {
    super(props)
    this.state = {
      subscription: {
        rwClient: Meteor.subscribe("RWClient", FlowRouter.getParam('userslug')),
        podcasts: Meteor.subscribe("filteredPodcasts", FlowRouter.getParam('userslug'))
      }
    }
    // console.log(this.props.content)
  }

  componentWillUnmount() {
    this.state.subscription.podcasts.stop()
    this.state.subscription.rwClient.stop()
  }

  _getRWClient() {
    let userslug = FlowRouter.getParam('userslug')
    return RWClients.findOne({"slug" : userslug})
  }

  _getPodcasts() {
    let userslug = FlowRouter.getParam('userslug')
    return Podcasts.find().fetch()
  }

  _determineFrequency(frequency) {
    return frequency === 'weekly' ? 'Week' : 'Month'
  }

  render() {
    let rwClient = this._getRWClient()

    if (rwClient===undefined) {
        console.log("getting client", rwClient)
      return <ReactSpinner /> }
    // else if (rwClient === false) {
    //   console.log("not found client", rwClient)
    //   return <span>client not fount</span>
    // }

    let podcasts = this._getPodcasts()
    if (podcasts.length < 1) { return <ReactSpinner /> }

    if(Session.get('currentPodcast') == undefined) {
      Session.setDefaultPersistent({'currentPodcast': podcasts[0]})
      console.log(Session.get('currentPodcast'))
    }

    console.log(Session.get('currentPodcast'))

    return (
      <div className="app-wrap">
        <RWPlayer podcastData={Session.get('currentPodcast')} />
        <ClientSidebar rwClientData={rwClient} />

        <main className="main-container grey lighten-5">
          <CurrentPodcastDetails podcastData={Session.get('currentPodcast')} />

          <div className="container">
            <Row>
                <Col m={8}>
                  <PodcastLib podcastData={podcasts} rwClientData={rwClient} />
                </Col>
                <Col m={4}>
                  <blockquote>
                    <h5>Quote of the {this._determineFrequency(rwClient.acf.podcast_frequency)}</h5>
                    <p>“Try not to become a man of success, but rather, try to become a man of value.” - Albert Einstein</p>
                  </blockquote>
                  <img src="http://placehold.it/300x300?text=Ad" className="responsive-img" />
                </Col>
            </Row>
          </div>

          <ClientFooter complianceMsg={rwClient.acf.compliance_message} />
        </main>
      </div>
    )
  }
}

export const MainLayout = ({content}) => (
  <AppWrap content={content} />
)
