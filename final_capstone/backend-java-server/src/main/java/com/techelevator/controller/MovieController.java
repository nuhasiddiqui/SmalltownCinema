package com.techelevator.controller;

import com.techelevator.dao.JdbcMovieDao;
import com.techelevator.dao.MovieDao;
import com.techelevator.model.Movie;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(path = "/api")
public class MovieController {
    private JdbcMovieDao jdbcMovieDao;

    public MovieController(JdbcMovieDao jdbcMovieDao) {
        this.jdbcMovieDao = jdbcMovieDao;
    }

    @RequestMapping(value="/movies",method = RequestMethod.GET)
    public List<Movie> getAllMovies(){
        return jdbcMovieDao.findAll();
    }

    @RequestMapping(value="/movies/{id}",method = RequestMethod.GET)
    public Movie getAllMovies(@PathVariable int movie_id){
        return jdbcMovieDao.getMovieById(movie_id);
    }

}
