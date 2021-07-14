package com.company;

public class Movie {
        private String movieTitle;
        private String rating;
        private int year;
        public Movie(String title, String rating, int year){
            this.movieTitle = title;
            this.rating = rating;
            this.year = year;
        }

        public String getMovieTitle() {
            return movieTitle;
        }

        public void setMovieTitle(String movieTitle) {
            this.movieTitle = movieTitle;
        }

        public String getRating() {
            return rating;
        }

        public void setRating(String rating) {
            this.rating = rating;
        }

        public int getYear() {
            return year;
        }

        public void setYear(int year) {
            this.year = year;
        }
        @Override
        public String toString(){
            return "Movie title: " + movieTitle +
                    "\nRating: " + rating +
                    "\nYear: " + year;
        }
    }


