// import { HTTP } from 'meteor/http';
// import { Meteor } from 'meteor/meteor';
// import moment from 'moment';
// import { Session } from 'meteor/session';
//
// const API_URL = "https://realwealthmarketing.com/wp-json/wp/v2";
// const CURRENT_DATE = moment().format('YYYY-MM-DD');
//
// Meteor.startup(function() {
//   let url = API_URL + '/podcasts?filter[date_query][before]='+ CURRENT_DATE +'T9:00:00';
//   HTTP.get(url, {}, ( error, response ) => {
//     if ( error ) throw new Meteor.Error('count-not-get-current-podcast', error);
//
//     Session.setDefaultPersistent({
//       'podcastData': response.data,
//       'currentPodcast': response.data[0]
//     });
//   });
// });
