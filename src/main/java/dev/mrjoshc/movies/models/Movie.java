package dev.mrjoshc.movies.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection = "movies")
@Data // this is from the lombok project, takes care of all getters/setters
@AllArgsConstructor // also from lombok, makes a constructor that takes all private fields as argument
@NoArgsConstructor // another constructor that takes no parameters
public class Movie {
    @Id
    private ObjectId id;
    private String imdbId;
    private String title;
    private String releaseDate;
    private String trailerLink;
    private String poster;
    private List<String> genres;
    private List<String> backdrops;
    @DocumentReference // this will cause the DB to only store the id of the review, the reviews will be a separate collection
    private List<Review> reviewIds;

}
