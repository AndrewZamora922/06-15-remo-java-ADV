package com.company;
import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String movie, rating;
        int year;
        Movie favoriteMovie;
        System.out.println("Enter movie title: ");
        movie = in.nextLine();
        System.out.println("Enter movie rating: ");
        rating = in.nextLine();
        System.out.println("Enter movie year: ");
        year = in.nextInt();
        favoriteMovie = new Movie(movie, rating, year);
        System.out.println("\n" + favoriteMovie);
    }

    Integer[] intArray = {10 , 20 , 30 , 40 , 50};
    String[] strArray = {"Java" , "JavaScript" , "React" , "Ruby"};
    Character[] charArray = {'H', 'E', 'L', 'L', 'O'};

            System.out.println("Prints the Integer Array")


            System.out.println("Prints the String Array")


            System.out.println("Prints the Character Array")


    public static <W> void printArray(W[] arrayIn){
        for(W element : arrayIn){
            System.out.printf("%s", element);
        }
        System.out.println();
    }

    public static <T extends Comparable<T>> int greaterThan(T[] numArray, T element){
                int count = 0;
                for(T e : numArray){
                    if(e.compareTo(element)){
                        ++count;
                    }
                }
                return count;
    }
}
