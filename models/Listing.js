const mongoose = require('mongoose');
const slug = require('slugs');

const ListingSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a listing name',
  },
  description: {
    type: String,
    trim: true,
  },
  property_type: {
    type: String,
  },
  price: {
    type: Number,
    required: 'Please enter asking price',
  },
  size: {
    area_sqm: String,
    bedrooms: Number,
    bathrooms: Number,
  },
  features: {},
  photo: String,
  slug: String,
  created: {
    type: Date,
    default: Date.now(),
  },
});

// TODOS: figure out how to handle features: duplex, renovated, corner unit, small pets allowed, pet allowed, swimming pool, park
// TODOS: add location to schema

/* owner: {
  type: mongoose.Schema.ObjectId,
  ref: 'User',
  required: 'Please provide your credentials',
}, */

ListingSchema.pre('save', async function(next) {
  if (!this.isModified('name')) {
    return next();
  }
  this.slug = slug(this.name);

  const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`, 'i');

  const listingsWithSlug = await this.constructor.find({ slug: slugRegEx });

  if (listingsWithSlug.length) {
    this.slug = `${this.slug}-${listingsWithSlug.length + 1}`; // if monkey-bar exists, slug will be monkey-bar-2, etc. increment by 1
  }
  next();
});

module.exports = mongoose.model('Listing', ListingSchema);
