require('dotenv').config({ path: `${__dirname}/../.env` });
const fs = require('fs');

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL);

const Listings = require('../models/Listing');

const listings = JSON.parse(fs.readFileSync(`${__dirname}/listings.json`, 'utf-8'));

async function deleteData() {
  console.log(`😢😢 too-da-loo, data...\n`);
  await Listings.remove();

  console.log('Data deleted. To load sample data, run:\n\n\t npm run sample\n\n');
  process.exit();
}

async function loadData() {
  try {
    await Listings.insertMany(listings);
    console.log('👍👍👍 Sample data added!\n\n');
    process.exit();
  } catch (e) {
    console.log(
      '\n👎👎👎 Error! Make sure to drop the existing database first with:\n\n\t npm run nukeit\n\n\n'
    );
    console.log(e);
    process.exit();
  }
}
if (process.argv.includes('--delete')) {
  deleteData();
} else {
  loadData();
  console.log();
}
