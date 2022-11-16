
const express =require('express')
const router = express.Router();

const Movie = require('../models/Movie.model'); 

router.get('/movies', async (req, res, next) => {
  try{ 
			const allMovies = await Movie.find();
			res.render('movies', {movies: allMovies});
    }
  catch(error) {
      console.log('Error', error);
      next(error);
    };
});

router.get('/movies/:moviesId', async (req, res, next) => {
  try{ 
	const { moviesId } = req.params;

	const movie = await Movie.findById(moviesId);
 
  res.render('movies-details', movie);

	} catch (error){
		next(error);
}
}); 


module.exports = router;
