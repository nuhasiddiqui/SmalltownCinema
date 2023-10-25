package com.techelevator.dao;

import com.techelevator.model.Movie;
import java.util.List;
public interface MovieDao {

    List<Movie> findAll();

    Movie getMovieById(int movieId);

    Movie getMovieByTitle(String title);
}
