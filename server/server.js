import { HTTP } from 'meteor/http';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import { Random } from 'meteor/random';

const API_URL = "https://realwealthmarketing.com/wp-json/wp/v2";
const ACCESS_TOKEN = Meteor.settings.private.RW_ACCESS_TOKEN;
const CURRENT_DATE = moment().format('YYYY-MM-DD');

Meteor.methods({
  _getPodcastsFromMktg() {
    let url = API_URL + '/podcasts'; //?filter[date_query][before]='+ CURRENT_DATE +'T9:00:00';
    try {
      let res = HTTP.call('GET', url, {});
      res.data.map((podcast) => {
        Podcasts.insert( podcast );
      });
    }
    catch (err) {
      if ( err ) throw new Meteor.Error('count-not-get-current-podcast', error);
      return false;
    }
  },
  _getRWClientsFromMktg() {
    let reqURL = API_URL + "/users";
    // "?slug=" + userslug + "&context=edit&access_token=" + ACCESS_TOKEN
    try {
      let res = HTTP.call('GET', reqURL, {});
      res.data.map((client) => {
        RWClients.insert( client );
      });
    }
    catch(err) {
      if (err) { throw new Meteor.Error('could-not-get-RWClients', err.reason); }
      return false;
    }
  }
});
