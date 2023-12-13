import asyncHandler from "express-async-handler";
import Product from "../model/productSchema.js";
import { json } from "express";

export const getAllProducts = asyncHandler(async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

export const getSingleProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    res.json(product)
  } catch (error) {
    res.json(error);
  }
});

export const createProduct = asyncHandler(async (req, res) => {
  const { title, price, description, category, rating,image } = req.body;
  try {
    const product = await Product.create({
      title,
      image,
      price,
      description,
      category,
     
      rating: {
        rate: rating && rating.rate ? rating.rate : 0,
        count: rating && rating.count ? rating.count : 0,
      },
    });
    res.json(product);
  } catch (error) {
    res.json(error);
  }
});

export const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Product.deleteOne({ _id: req.params.id });
    res.json(product);
  } catch (error) {
    console.log(error)
  }
});

export const updateProduct = asyncHandler(async (req, res) => {
  const { title, price, description, category, image, rating } = req.body;
  try {
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      {
        title,
        price,
        description,
        category,
        image,
        rating: {
          rate: rating && rating.rate ? rating.rate : 0,
          count: rating && rating.count ? rating.count : 0,
        },
      },
      { new: true }
    );
    res.json(product);
  } catch (error) {
    res.json(error);
  }
});
