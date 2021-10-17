// http client to make request
const needle = require ('needle')
const config = require ('dotenv').config()
const TOKEN = process.env.TWITTER_BEARER_TOKEN

// endpoints for the URL's
const rulesURL = 'https://api.twitter.com/2/tweets/search/stream/rules'
const streamURL = 'https://api.twitter.com/2/tweets/search/stream?tweet.field=public_metrics&expansions=author_id'

// rules that wanted to add
const rules = [{values: 'giveaway'}]

// get stream rules
async function getRules () {
    const response = await needle('get', rulesURL, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
        }
    })

    console.log(response.body)
    return response.body
}

//function that run itself
;(async () => {
    let currentRules

    try {
        currentRules = await getRules()
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}) ()