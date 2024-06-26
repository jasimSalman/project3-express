const Category = require('../models/category')
const Place = require('../models/place')

//This function will return all the categories.
const index = async (req, res) => {
  const categories = await Category.find({})
  res.json(categories)
}

//This function will show all the places in a particular category
const show = async (req, res) => {
  const categoryId = req.params.categoryId
  const places = await Category.findById(categoryId).populate('place')
  res.send(places)
}

module.exports = {
  index,
  show
}
