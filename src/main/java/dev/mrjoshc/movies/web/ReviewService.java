package dev.mrjoshc.movies.web;

import dev.mrjoshc.movies.repositories.ReviewRepository;
import dev.mrjoshc.movies.models.Movie;
import dev.mrjoshc.movies.models.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private MongoTemplate mongoTemplate; // templates basically make a query without using the repository, might be too complex or some other reason
    public Review createReview(String reviewBody, String imdbId) {
        Review review = reviewRepository.insert(new Review(reviewBody));
        ;

        mongoTemplate.update(Movie.class)
                .matching(Criteria.where("imdbId").is(imdbId))
                .apply(new Update().push("reviewIds").value(review))
                .first(); // grabs the first movie and only updates that

        return review;
    }

    public List<Review> findAllReview() {
        return reviewRepository.findAll();
    }
}
