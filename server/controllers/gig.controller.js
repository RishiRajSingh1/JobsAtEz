import Gig from "../models/gig.model.js";
import createError from "../utils/createError.js";

export const createGig = async (req, res, next) => {
  if (!req.isSeller)
    return next(createError(403, "Only sellers can create a gig!"));

  const newGig = new Gig({
    userId: req.userId,
    ...req.body,
  });

  try {
    const savedGig = await newGig.save();
    res.status(201).json(savedGig);
  } catch (err) {
    next(err);
  }
};
export const deleteGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (!gig) {
      return next(createError(404, "Gig not found!"));
    }
    
    if (gig.userId !== req.userId) {
      return next(createError(403, "You can delete only your gig!"));
    }
    await Gig.findByIdAndUpdate(req.params.id, { $set: { isActive: false } });

    res.status(200).send("Gig has been made inaccessible!");
  } catch (err) {
    next(err);
  }
};

export const getGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.gigId);
    if (!gig) {
      return next(createError(404, "Gig not found!"));
    }

    if (!gig.isActive) {
      return next(createError(403, "This gig is no longer accessible."));
    }

    res.status(200).send(gig);
  } catch (err) {
    next(err);
  }
};

export const getGigs = async (req, res, next) => {
  const q = req.query;
  const filters = {
    isActive: true,
    ...(q.cat && { cat: q.cat }), // Filter by category
    ...(q.min && { price: { $gt: parseInt(q.min) } }),
    ...(q.max && { price: { $lt: parseInt(q.max) } }),
    ...(q.search && { title: { $regex: q.search, $options: "i" } }),
  };

  try {
    let sortQuery = {};
    if (q.sort) {
      sortQuery[q.sort] = -1; // Default sorting in descending order
    }

    const gigs = await Gig.find(filters).sort(sortQuery);
    res.status(200).send(gigs);
  } catch (err) {
    next(err);
  }
};

export const searchGigs = async (req, res, next) => {
  const { category, minPrice, maxPrice } = req.query;

  // Constructing filters based on provided query parameters
  const filters = {
    isActive: true,
    ...(category && { cat: category }), // Filtering by category
    ...(minPrice && { price: { $gte: parseInt(minPrice) } }), // Minimum price
    ...(maxPrice && { price: { $lte: parseInt(maxPrice) } }), // Maximum price
  };

  try {
    const gigs = await Gig.find(filters);
    res.status(200).json(gigs);
  } catch (error) {
    next(error);
  }
};

export const getGigsByUser = async (req, res, next) => {
  try {
    const gig = await Gig.find({ userId: req.params.userId });
    if (!gig) {
      return next(createError(404, "Gig not found!"));
    }
    
    res.status(200).send(gig);
  
  } catch (error) {
    next(error);
  }
};




