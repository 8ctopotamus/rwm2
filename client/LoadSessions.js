import { HTTP } from 'meteor/http';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import { Session } from 'meteor/session';

const API_URL = "https://realwealthmarketing.com/wp-json/wp/v2";
const CURRENT_DATE = moment().format('YYYY-MM-DD');

Meteor.startup(function() {
  Meteor.call('getRWClientInfo', (err, res) => {
    if ( err ) throw new Meteor.Error('count-not-get-RW-Client', err);
    Session.set({'rwClientData': res});
  })

  // current podcast
  let url = API_URL + '/podcasts?filter[date_query][before]='+ CURRENT_DATE +'T9:00:00';
  HTTP.get(url, {}, ( error, response ) => {
    if ( error ) throw new Meteor.Error('count-not-get-current-podcast', error);
    Session.set({
      'podcastData': response.data,
      'currentAudio': response.data[0].acf.podcast_file,
      'currentTitle': response.data[0].title.rendered,
    });
  });
});
