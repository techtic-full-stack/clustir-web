/**
 * Models/cmspages.js
 *
 * Create mongoDB Schema for the CMS pages.
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subCategory = new Schema({
  Sub_Category_name: {
    type: String,
    required: [true, "Category is required"],
  },
  CategoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category'
    }
});

const MessageModel = mongoose.model("Sub-Category", subCategory);

module.exports = MessageModel;
