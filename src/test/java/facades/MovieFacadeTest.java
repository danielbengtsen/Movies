package facades;

import DTOs.MovieDTO;
import DTOs.MoviesDTO;
import utils.EMF_Creator;
import entities.Movie;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

//Uncomment the line below, to temporarily disable this test
//@Disabled
public class MovieFacadeTest {

    private static EntityManagerFactory emf;
    private static MovieFacade facade;
    private final Movie m1 = new Movie(1994, "Forrest Gump", new String[]{"Tom Hanks","Robin Wright"});
    private final Movie m2 = new Movie(2009, "Coraline", new String[]{"Coraline Jones","Wybie Lovat"});
    
    public MovieFacadeTest() {
    }

    @BeforeAll
    public static void setUpClass() {
       emf = EMF_Creator.createEntityManagerFactoryForTest();
       facade = MovieFacade.getFacadeExample(emf);
    }

    @AfterAll
    public static void tearDownClass() {
//        Clean up database after test is done or use a persistence unit with drop-and-create to start up clean on every test
    }

    // Setup the DataBase in a known state BEFORE EACH TEST
    //TODO -- Make sure to change the script below to use YOUR OWN entity class
    @BeforeEach
    public void setUp() {
        EntityManager em = emf.createEntityManager();
        try {
            em.getTransaction().begin();
                em.createNamedQuery("Movie.deleteAllRows").executeUpdate();
                em.persist(m1);
                em.persist(m2);
            em.getTransaction().commit();
        } finally {
            em.close();
        }
    }

    @AfterEach
    public void tearDown() {
//        Remove any data after each test was run
    }

    // TODO: Delete or change this method 
    @Test
    public void testAFacadeMethod() {
        assertEquals(2, facade.getMovieCount(), "Expects two rows in the database");
    }
    
    
    @Test
    public void deleteAllMoviesTest() {
            // Define expected
            List<MovieDTO> expected = new ArrayList();
            //Define result with the existing two movies in the db
            List<MovieDTO> result = facade.getAllMovies();
            System.out.println(result);
            
            // Run delete-method
            facade.deleteAllMovies();
            
            // Update result
            result = facade.getAllMovies();
            
            // Assert
            assertEquals(expected.size(), result.size());
    }
    
    @Test
    public void getMovieCountTest() {
        long expected = 2;
        long result = facade.getMovieCount();
        
        assertEquals(expected, result);  
    }
    
    @Test
    public void getMovieByIdRest() {
        MovieDTO expected = new MovieDTO(m1);
        MovieDTO result = facade.getMovieById(m1.getId());
        
        assertEquals(expected.getId(), result.getId());
    }
    
    @Test
    public void getMovieByTitleTest() {
        List<MovieDTO> expected = new ArrayList();
        expected.add(new MovieDTO(m2));
        
        List<MovieDTO> result = facade.getMovieByTitle(m2.getTitle());
        
        assertEquals(expected.get(0).getTitle(), result.get(0).getTitle());
    }
    
    @Test
    public void getAllMoviesTest() {
        List<MovieDTO> expected = new ArrayList();
        expected.add(new MovieDTO(m1));
        expected.add(new MovieDTO(m2));
        
        List<MovieDTO> result = facade.getAllMovies();
        
        assertEquals(expected.get(1).getId(), result.get(1).getId());
    }
    
    

}
