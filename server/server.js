import { HTTP } from 'meteor/http'
import { Meteor } from 'meteor/meteor'
import moment from 'moment'
import { Random } from 'meteor/random'

const API_URL = "https://realwealthmarketing.com/wp-json/wp/v2"
const ACCESS_TOKEN = Meteor.settings.private.RW_ACCESS_TOKEN
const CURRENT_DATE = moment().format('YYYY-MM-DD')
const TWO_YEARS_AGO = moment().subtract(2, 'years').format('YYYY-MM-DD')

Meteor.methods({
  _getPodcastsFromMktg() {
    // gets all podcasts within 2 years from current date
    let url = API_URL + '/podcasts?filter[date_query][before]='+ CURRENT_DATE +'T9:00:00&filter[date_query][after]=' + TWO_YEARS_AGO + 'T9:00:00&filter[posts_per_page]=-1'

    try {
      let res = HTTP.call('GET', url, {})
      res.data.map((podcast) => {
        // delete the WP stuff we don't need
        delete podcast.date_gmt
        delete podcast.guid
        delete podcast.modified
        delete podcast.modified_gmt
        delete podcast.slug
        delete podcast.type
        delete podcast.format
        delete podcast.link
        delete podcast.excerpt
        delete podcast.featured_media
        delete podcast.parent
        delete podcast.acf.air_date
        delete podcast.acf.add_to_cart_id
        delete podcast.acf.transcript_file_url
        delete podcast.acf.air_date
        delete podcast.acf.facebook_posts
        delete podcast.acf.twitter_posts
        delete podcast.acf.linkedin_posts
        delete podcast.acf.life_happens_pro
        delete podcast._links

        // ?_embed

        // if(podcast.better_featured_image.media_details) {
        //   for (size in podcast.better_featured_image.media_details.sizes) {
        //     if (size !== 'thumbnail' || size !== "medium") delete size
        //   }
        // }

        Podcasts.insert( podcast )
      })
    }
    catch (err) {
      if ( err ) throw new Meteor.Error('count-not-get-current-podcast', err)
      return false
    }
  },

  _getRWClientsFromMktg() {
    let pageCount = 1
    let reqURL = API_URL + "/users?page=" + pageCount + "&per_page=100"

    try {
      let res = HTTP.call('GET', reqURL, {})
      console.log(res.headers.link)
      res.data.map((client) => {
        // delete the WP stuff we don't need
        delete client.link
        delete client._links
        RWClients.insert( client )
      })
    }
    catch(err) {
      if (err) { throw new Meteor.Error('could-not-get-RWClients', err.reason) }
      return false
    }
  }
})
