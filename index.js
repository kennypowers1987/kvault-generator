const feathers = require('@feathersjs/feathers');
const rest = require('@feathersjs/express/rest');
const express = require('@feathersjs/express');
const service = require('feathers-elasticsearch');
const elasticsearch = require('elasticsearch');

const messageService = service({
  Model: new elasticsearch.Client({
    host: 'localhost:9200',
    apiVersion: '6.0'
  }),
  paginate: {
    default: 5000,
    max: 5000
  },
  elasticsearch: {
    index: 'test1',
    type: 'lineups'
  },
  esVersion: '6.0'
});

// Initialize the application
const app = express(feathers());

// Needed for parsing bodies (login)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Enable REST services
app.configure(express.rest());
// Initialize your feathers plugin
app.use('/lineups', messageService);
app.use(express.errorHandler());;

app.listen(3030);

console.log('Feathers app started on 127.0.0.1:3030');
