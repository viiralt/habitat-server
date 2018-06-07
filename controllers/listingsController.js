const Listing = require('../models/Listing');

exports.getListings = async (ctx, next) => {
  if (ctx.method !== 'GET') return next();

  ctx.body = await Listing.find();
};

exports.createListing = async (ctx, next) => {
  if (ctx.method !== 'POST') return next();
  const listing = ctx.request.body;
  await Listing.create(listing);
};

exports.confirmOwner = (listing, user) => {
  if (!listing.owner.equals(user._id)) {
    // hit model's owner prop
    throw new Error('You are not authorised to edit this listing');
  }
};

/* exports.editListing = async (ctx, next) => {
  if (ctx.method !== 'POST') next();

  const listing = await Listing.findOne({ _id: ctx.params });
  // ! NOW WHAT?
}; */
