package movies;

import static spark.Spark.exception;
import static spark.Spark.get;
import static spark.Spark.port;

import java.io.IOException;
import java.io.InputStreamReader;
import java.time.LocalDate;
import java.util.Comparator;
import java.util.List;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import java.util.zip.GZIPInputStream;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.annotations.SerializedName;
import com.google.gson.reflect.TypeToken;

import datadog.trace.api.Trace;
import spark.Request;
import spark.Response;

public class Server {
    private static final Gson GSON;
    private static volatile List<Movie> CACHED_MOVIES;
    private static volatile long LAST_CACHE_TIME = 0;
    private static final long CACHE_DURATION = TimeUnit.MINUTES.toMillis(10); // Cache duration of 10 minutes

    static {
        GSON = new GsonBuilder().setLenient().create();
    }

    public static void main(String[] args) {
        port(8080);
        get("/movies", Server::moviesEndpoint);

        exception(Exception.class, (exception, request, response) -> {
            System.err.println(exception.getMessage());
            exception.printStackTrace();
        });
    }

    @Trace(operationName = "http.req", resourceName = "/movies")
    private static Object moviesEndpoint(Request req, Response res) {
        var movies = getMovies().stream();
        movies = sortByDescReleaseDate(movies);
        var query = req.queryParamOrDefault("q", req.queryParams("query"));
        if (query != null) {
            final String upperCaseQuery = query.toUpperCase();
            movies = movies.filter(m -> m.title.toUpperCase().contains(upperCaseQuery));
        }
        return replyJSON(res, movies);
    }

    private static Stream<Movie> sortByDescReleaseDate(Stream<Movie> movies) {
        return movies.sorted(Comparator.comparing((Movie m) -> {
            try {
                return LocalDate.parse(m.releaseDate);
            } catch (Exception e) {
                return LocalDate.MIN;
            }
        }).reversed());
    }

    private static Object replyJSON(Response res, Stream<?> data) {
        return replyJSON(res, data.collect(Collectors.toList()));
    }

    private static Object replyJSON(Response res, Object data) {
        res.type("application/json");
        return GSON.toJson(data);
    }

    private static List<Movie> getMovies() {
        if (CACHED_MOVIES != null && System.currentTimeMillis() - LAST_CACHE_TIME < CACHE_DURATION) {
            return CACHED_MOVIES;
        }

        synchronized (Server.class) {
            if (CACHED_MOVIES == null || System.currentTimeMillis() - LAST_CACHE_TIME >= CACHE_DURATION) {
                CACHED_MOVIES = loadMovies();
                LAST_CACHE_TIME = System.currentTimeMillis();
            }
        }

        return CACHED_MOVIES;
    }

    private static List<Movie> loadMovies() {
        try (
            var is = ClassLoader.getSystemResourceAsStream("movies5000.json.gz");
            var gzis = new GZIPInputStream(is);
            var reader = new InputStreamReader(gzis)
        ){
            return GSON.fromJson(reader, new TypeToken<List<Movie>>() {}.getType());
        } catch (IOException e) {
            throw new RuntimeException("Failed to load movie data");
        }
    }

    public static class Movie {
        public String title;
        @SerializedName("vote_average")
        public double rating;
        @SerializedName("release_date")
        public String releaseDate;
    }
}
