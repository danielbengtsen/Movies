package facades;

import DTOs.MovieDTO;
import DTOs.MoviesDTO;
import entities.Movie;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;

/**
 *
 * Rename Class to a relevant name Add add relevant facade methods
 */
public class MovieFacade {

    private static MovieFacade instance;
    private static EntityManagerFactory emf;
    
    //Private Constructor to ensure Singleton
    private MovieFacade() {}
    
    
    /**
     * 
     * @param _emf
     * @return an instance of this facade class.
     */
    public static MovieFacade getFacadeExample(EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new MovieFacade();
        }
        return instance;
    }

    private EntityManager getEntityManager() {
        return emf.createEntityManager();
    }
    
    public void deleteAllMovies(){
        EntityManager em = emf.createEntityManager();
        try {
            em.getTransaction().begin();
            em.createNamedQuery("Movie.deleteAllRows").executeUpdate();
            em.getTransaction().commit();
        } finally {
            em.close();
        }
    }
    
    public long getMovieCount(){
        EntityManager em = emf.createEntityManager();
        try{
            long movieCount = (long)em.createQuery("SELECT COUNT(m) FROM Movie m").getSingleResult();
            return movieCount;
        }finally{  
            em.close();
        }
    }

    public MovieDTO getMovieById(long id){
        EntityManager em = emf.createEntityManager();
        try {
              Query query = em.createNamedQuery("Movie.getById");
              query.setParameter("id", id);
              MovieDTO movie = new MovieDTO((Movie) query.getSingleResult());
              return movie;
        }         
        finally {
            em.close();
        }
    }
    
    public List<MovieDTO> getMovieByTitle(String title){
        EntityManager em = emf.createEntityManager();
        try {
              Query query = em.createNamedQuery("Movie.getByTitle");
              query.setParameter("title", title);
              List<Movie> movieList = query.getResultList();
              return convertListToDTOList(movieList);
        }         
        finally {
            em.close();
        }  
    }
    
    public List<MovieDTO> getAllMovies() {
        EntityManager em = emf.createEntityManager();
        try {
              Query query = em.createNamedQuery("Movie.getAll");
              List<Movie> movies = query.getResultList();
              
              return convertListToDTOList(movies);
        }         
        finally {
            em.close();
        }
    }
    
    public void populateDB(){
            EntityManager em = emf.createEntityManager();
        try {
            em.getTransaction().begin();
            em.persist(new Movie(1994, "Forrest Gump", new String[]{"Tom Hanks", "Robin Wright","Sally Field"}));
            em.persist(new Movie(2009, "Coraline", new String[]{"Coraline Jones", "Wybie Lovat"}));
            em.persist(new Movie(2002, "Harry Potter and The Chamber of Secrets", 
                    new String[]{"Daniel Radcliffe", "Emma Watson", "Rubert Grint"}));
            em.getTransaction().commit();
        } finally {
            em.close();
        }
    }
    
    
    private static List<MovieDTO> convertListToDTOList(List<Movie> movies) {
        List<MovieDTO> moviesDTO = new ArrayList();
        for(Movie m : movies) {
            moviesDTO.add(new MovieDTO(m));
        }
        return moviesDTO;
    }
    
}
