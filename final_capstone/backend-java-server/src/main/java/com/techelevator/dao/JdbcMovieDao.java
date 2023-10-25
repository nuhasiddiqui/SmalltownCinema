package com.techelevator.dao;

import com.techelevator.model.Movie;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcMovieDao implements MovieDao {
    private final JdbcTemplate jdbcTemplate;

    public JdbcMovieDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Movie> findAll() {
        List<Movie> movies = new ArrayList<>();
        String sql = "SELECT * FROM movies";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql);
        while (results.next()) {
            Movie movie = mapRowToMovie(results);
            movies.add(movie);
        }
        return movies;

    }

    @Override
    public Movie getMovieById(int movieId) {
        String sql = "SELECT * FROM movies WHERE movie_id = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, movieId);
        if (results.next()) {
            return mapRowToMovie(results);
        } else {
            return null;
        }
    }

    @Override
    public Movie getMovieByTitle(String title) {
        String sql = "SELECT * FROM movies WHERE title = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, title);
        if (results.next()) {
            return mapRowToMovie(results);
        } else {
            return null;
        }
    }

    private Movie mapRowToMovie(SqlRowSet results) {
        Movie movie = new Movie();
        movie.setMovieId(results.getInt("movie_id"));
        movie.setTitleImg(results.getString("title_img"));
        movie.setBgImg(results.getString("bg_img"));
        movie.setPreviewImg(results.getString("preview_img"));
        movie.setVideo(results.getString("video"));
        movie.setTitle(results.getString("title"));
        movie.setYear(results.getInt("year"));
        movie.setDate(results.getString("date"));
        movie.setAge(results.getString("age"));
        movie.setLength(results.getString("length"));
        movie.setCategory(results.getString("category"));
        movie.setDescription(results.getString("description"));
        movie.setActive(results.getBoolean("active"));
        return movie;
    }
}
