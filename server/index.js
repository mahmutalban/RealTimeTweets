/*http client to make request*/
const needle = require ('needle')
const config = require ('dotenv').config()
const TOKEN = process.env.TWITTER_BEARER_TOKEN

/*printing out token*/ 
console.log(TOKEN)