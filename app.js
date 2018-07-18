var http = require('http');
var _ = require('lodash');

const wsurl ="https://s3.amazonaws.com/challenge.getcrossbeam.com/public/";
//const wsurl ="http://localhost:3000/api/"; /// test url

/// append the url with the arguments form the command line
https.get(wsurl+ process.argv[2]+".json", (res) => {
  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    try {
      
    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});
