/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DTOs;

import entities.Movie;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author jobe
 */
public class MoviesDTO {
    
     private List<MovieDTO> all = new ArrayList();

    
    public MoviesDTO(List<Movie> movieList){
        for (Movie m : movieList) {
            all.add(new MovieDTO(m));
        }
    }

    public List<MovieDTO> getAll() {
        return all;
    } 
    
    
    
}
