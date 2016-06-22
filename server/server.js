import { HTTP } from 'meteor/http';
import { Meteor } from 'meteor/meteor';

const API_URL = "https://realwealthmarketing.com/wp-json/wp/v2";

Meteor.methods({
  getRWClientInfo() {
    // this.unblock()
    // const RW_TOKEN = Meteor.settings.private.RW_TOKEN;
    // API_URL + '/users/202?access_token=' + RW_TOKEN + '&context=view'
    let res = HTTP.call('GET', API_URL + '/users/' , {});
    return res.data[0];
  }
})
