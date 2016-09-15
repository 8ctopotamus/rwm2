import { Meteor } from 'meteor/meteor'
import moment from 'moment'

Meteor.startup(() => {
  if(RWClients.find().count() < 1) {
      Meteor.call('_getRWClientsFromMktg') }
  if(Podcasts.find().count() < 1) {
    Meteor.call('_getPodcastsFromMktg') }
})

Meteor.publish('filteredPodcasts', function(userslug) {
  let client = RWClients.findOne({slug: userslug})
  let group = client.acf.compliance_group
  let frequency = client.acf.podcast_frequency
  let frequencyAsNumber = frequency == "weekly" ? 51 : 52 // returns number that references

  let criteria = {
    "podcast-frequency" : frequencyAsNumber
  }
  // console.log(Podcasts.find({{}}, {limit: 10}))
  return Podcasts.find(criteria, {limit: 10})
})

Meteor.publish("RWClient", function(userslug) {
    return RWClients.find({slug: userslug})
})
