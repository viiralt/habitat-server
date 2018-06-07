const mongoose = require('mongoose');

require('./models/Listing');

// TODO: how do I get move this to process.env
mongoose.connect(process.env.MONGODB_URL, {});

const db = mongoose.connection;

db.on('error', err => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

module.exports = db;
