package com.techelevator.model;


public class Movie {
    private int movieId;
    private String titleImg;
    private String bgImg;
    private String previewImg;
    private String video;
    private String title;
    private int year;
    private String date;
    private String age;
    private String length;
    private String category;

    private String description;
    private Boolean active;


    public Movie(int movieId, String titleImg, String bgImg, String previewImg, String video, String title, int year, String date, String age, String length, String category, String description, Boolean active) {
        this.movieId = movieId;
        this.titleImg = titleImg;
        this.bgImg = bgImg;
        this.previewImg = previewImg;
        this.video = video;
        this.title = title;
        this.year = year;
        this.date = date;
        this.age = age;
        this.length = length;
        this.category = category;
        this.description = description;
        this.active = active;
    }

    public Movie() {

    }

    public int getMovieId() {
        return movieId;
    }

    public void setMovieId(int movieId) {
        this.movieId = movieId;
    }

    public String getTitleImg() {
        return titleImg;
    }

    public void setTitleImg(String titleImg) {
        this.titleImg = titleImg;
    }

    public String getBgImg() {
        return bgImg;
    }

    public void setBgImg(String bgImg) {
        this.bgImg = bgImg;
    }

    public String getPreviewImg() {
        return previewImg;
    }

    public void setPreviewImg(String previewImg) {
        this.previewImg = previewImg;
    }

    public String getVideo() {
        return video;
    }

    public void setVideo(String video) {
        this.video = video;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getLength() {
        return length;
    }

    public void setLength(String length) {
        this.length = length;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    @Override
    public String toString() {
        return "Movie{" +
                "movie_id=" + movieId +
                ", titleImg='" + titleImg + '\'' +
                ", bgImg='" + bgImg + '\'' +
                ", previewImg='" + previewImg + '\'' +
                ", video='" + video + '\'' +
                ", title='" + title + '\'' +
                ", year='" + year + '\'' +
                ", date='" + date + '\'' +
                ", age='" + age + '\'' +
                ", length=" + length +
                ", category='" + category + '\'' +
                ", description= ' " + description + '\'' +
                ", active= ' " + active + '\'' +
                '}';
    }

}
