import { HTTP } from 'meteor/http';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import { Random } from 'meteor/random';

const API_URL = "https://realwealthmarketing.com/wp-json/wp/v2";
const ACCESS_TOKEN = Meteor.settings.private.RW_ACCESS_TOKEN;
const CURRENT_DATE = moment().format('YYYY-MM-DD');
const TWO_YEARS_AGO = moment().subtract(2, 'years').format('YYYY-MM-DD');

Meteor.methods({
  _getPodcastsFromMktg() {
    // gets all podcasts within 2 years from current date
    let url = API_URL + '/podcasts?filter[date_query][before]='+ CURRENT_DATE +'T9:00:00&filter[date_query][after]=' + TWO_YEARS_AGO + 'T9:00:00&filter[posts_per_page]=-1';

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
    let pageCount = 2;
    let reqURL = API_URL + "/users?page=" + pageCount + "&per_page=100"; // "&context=edit&access_token=" + ACCESS_TOKEN
    try {
      let res = HTTP.call('GET', reqURL, {});
      console.log(res.headers.link)
      res.data.map((client) => {
        //delete the WP stuff we don't need
        delete client.link;
        delete client._links;
        RWClients.insert( client );
      });
    }
    catch(err) {
      if (err) { throw new Meteor.Error('could-not-get-RWClients', err.reason); }
      return false;
    }
  }
});
