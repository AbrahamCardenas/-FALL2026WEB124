let movies = [
  "Interstellar,sci-fi,8,user1@email.com",
  "Django,western,8,user2@email.com",
  "Project Hail Mary,sci-fi,8,user3@email.com",
  "The Super Mario Bros. Movie,,,user4@email.com",
  "Sonic the Hedgehog,adventure,6,",
  "The Whisper Man,thriller,6,user6@email.com",
  "Frankenstein (2025),drama,7,user7@email.com",
];

function Movie(title, genre, rating, reviewEmail, ID) {
  this.title = title;
  this.genre = genre;
  this.rating = rating;
  this.reviewEmail = reviewEmail;
  this.ID = ID;
}

let movieObjects = [];

// use string methods here to split movies array into sections for Movie constuctor
movies.forEach((movie, index) => {
  try {
    let [title, genre, rating, reviewEmail] = movie.split(",");
    let movieId = index + 1;
    //alert(`${title}\n${genre}\n${rating}\n${reviewEmail}\n${movieId}`);
    let movieInfo = new Movie(title, genre, rating, reviewEmail, movieId);
    //console.table(movieInfo);
    //Above line is for Debug
    if (
      movieInfo.title != "" &&
      movieInfo.genre != "" &&
      movieInfo.rating != ""
    ) {
      movieObjects.push(movieInfo);
    } else throw new Error("Invalid Movie");
    if (movieInfo.title == "Project Hail Mary") {
      console.log("Favorite Movie Detected!");
    }
    // I loved the message and theme of the movie. Seeing all the hypothesized alien tech always makes my brain happy!
    // This line will detect if the title of the movie will match my favorite movie and console.log a message in response.
  } catch (error) {
    console.error(error);
    return null;
  }
});

//console.table(movieObjects);

Movie.prototype.getSummary = function () {
  return `${this.title} is a ${this.genre} movie with a rating of ${this.rating}`;
};

Movie.prototype.isHighlyRated = function () {
  if (this.rating >= 8) return true;
  else return false;
};

Movie.prototype.getReviewEmail = function () {
  if (this.reviewEmail != "") return this.reviewEmail;
  else this.reviewEmail = "none";
};

Movie.prototype.getID = function () {
  return this.ID;
};

//all movie data
movieObjects.forEach((movie) => {
  movie.getReviewEmail();
  console.table(movie);
  console.log(movie.getSummary());
});

//highly rated movie array
let highlyRated = movieObjects.filter((movie) => {
  return movie.rating >= 8;
});
//console.table(highlyRated);

//display only titles of hightlyRated
highlyRated.forEach((movie) => {
  alert(movie.title);
});
