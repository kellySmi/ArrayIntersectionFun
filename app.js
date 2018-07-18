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
      const res1 = JSON.parse(rawData);
      //console.log(res1);
      let names1 =  _.uniqBy(res1.companies,r1=>r1.domain);
      let n1Ar = names1.map(n=>n.domain);
      https.get(wsurl+ process.argv[3]+".json", (res2) => {
      res2.setEncoding('utf8');
         let rawData = '';
         res2.on('data', (chunk) => { rawData += chunk; });
         res2.on('end', () => {
           const res3 = JSON.parse(rawData);
            let names2 =  _.uniqBy(res3.companies,r3=>r3.domain);
            let n2Ar = names2.map(n=>n.domain);
            
         });
       }).on('error', (e) => {
          console.error(`Got error: ${e.message}`);
       });
    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});
