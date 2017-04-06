var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var app            = express();
//var searchResults  = require('/public/js/search.js');


app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(morgan('dev')); 					// log every request to the console
app.use(bodyParser()); 						// pull information from html in POST
app.use(methodOverride()); 					// simulate DELETE and PUT




const elasticsearch = require('elasticsearch');
const esClient = new elasticsearch.Client({
  host: '127.0.0.1:9200',
  log: 'error'
});

const search = function search(index, body) {
  return esClient.search({index: index, body: body});
};

// only for testing purposes
// all calls should be initiated through the module

app.get('/search', function(req, res){
  // only for testing purposes
  // all calls should be initiated through the module
  const test = function test(q) {
    var body = {
      size: 100,
      from: 0,
      query: {
        multi_match: {
          query: req.query.q,
          fields: ["Artist", "Song"]
        }
      }
    };

    console.log(`retrieving documents whose title or authors match '${body.query.multi_match.query}' (displaying ${body.size} items at a time)...`);
    search('library', body)
    .then(results => {
      console.log(`found ${results.hits.total} items in ${results.took}ms`);
      res.send(results);
    })
    .catch(console.error);
  };

  test(req);
})



module.exports = {
  search
};


app.listen(8000);
console.log('Simple static server listening on port 8000');
