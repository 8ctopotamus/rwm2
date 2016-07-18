import { Meteor } from 'meteor/meteor';
import moment from 'moment';

Podcasts = new Mongo.Collection('podcasts');
RWClients = new Mongo.Collection('rwClients');

Meteor.startup(() => {
  if(RWClients.find().count() < 1) {
      Meteor.call('_getRWClientsFromMktg');
  };
  if(Podcasts.find().count() < 1) {
    Meteor.call('_getPodcastsFromMktg');
  }
});

Meteor.publish('Podcasts', function() {
  return Podcasts.find({});
});

Meteor.publish("RWClient", function(userslug) {
  // console.log(RWClients.find({slug: userslug}))
  return RWClients.find({slug: userslug});
});
