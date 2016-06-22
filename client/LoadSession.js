import { HTTP } from 'meteor/http';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import { Session } from 'meteor/session';

const API_URL = "https://realwealthmarketing.com/wp-json/wp/v2";
const CURRENT_DATE = moment().format('YYYY-MM-DD');

Meteor.startup(function() {
  Meteor.call('getRWClientInfo', (err, res) => {
    if ( err ) throw new Meteor.Error('count-not-get-RW-Client', err);
    console.log(res);

    //TODO:
    //  loop over the properties of 'res'
    //  validate that they exist before saving them to session vars
    let rwClientData = {
      'rwClientID' : res.id,
      'rwClientName' : res.name,
      'rwClientSlug' : res.slug,
      'rwClientURL' : res.url,
      'advisor_image' : res.acf.advisor_image,
      'alternative_email': res.acf.alternative_email,
      'alternative_web_address' : res.acf.alternative_web_address,
      'business_address' : res.acf.business_address,
      'business_name' : res.acf.business_name,
      'cell_number' : res.acf.cell_number,
      'company_logo' : res.acf.company_logo,
      'compliance_group' : res.acf.compliance_group,
      'complaince_message' : res.acf.compliance_message,
      'designation' : res.acf.designation,
      'facebook_url' : res.acf.facebook_url,
      'fax_number' : res.acf.fax_number,
      'lhp_verified' : res.acf.lifehappenspro_verified,
      'linkedin_url': res.acf.linkedin_url,
      'outro_audio' : res.acf.outro_audio,
      'phone_number_1' : res.acf.phone_number_1,
      'phone_number_2' : res.acf.phone_number_2,
      'podcast_frequency' : res.acf.podcast_frequency,
      'toll_free_number' : res.acf.toll_free_number,
      'twitter_username' : res.acf.twitter_username
    }
    Session.set(rwClientData);
  })

  // current podcast
  HTTP.get(API_URL + '/podcasts?filter[date_query][before]='+ CURRENT_DATE +'T9:00:00', {}, ( error, response ) => {
    if ( error ) throw new Meteor.Error('count-not-get-current-podcast', error);
    Session.set({
      'currentAudio': response.data[0].acf.podcast_file,
      'currentTitle': response.data[0].title.rendered,
      // 'podcastData': response.data,
    });
  });
});
