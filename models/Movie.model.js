const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  titel: {
    type: String,
    required: true,
  },
  genre: String, 
  plot: String,
  cast = {
      //link to celebrities
  }
});

const Movie = model("Movie", movieSchema);

module.exports = Movie;