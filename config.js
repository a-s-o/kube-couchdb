'use strict';

const path = require('path');

module.exports = {
   containerName: 'kube-couchdb',
   containerImage: 'klaemo/couchdb',
   port: process.env.EXPOSE_PORT || 5984,
   dataDir: path.resolve(__dirname, './db_data')
};
