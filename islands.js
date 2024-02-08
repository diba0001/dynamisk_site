const islands = ("Rhodos", "Salamina", "Crete", "Chios");
islands.array.forEach(visitIslands);
function visitIslands(aSingleIsland) {
  console.log("aSingleIsland");
}

const movies =
  ({
    title: "Face Off",
    director: "John Woo",
    year: "2000",
  },
  {
    title: "Harold og Maude",
    director: "N/A",
    year: "1767",
  },
  {
    title: "ToyStory",
    director: "Pixar",
    year: "2002",
  });
movies.forEach(showMovie);
function showMovie(oneSingleMovieObject) {
  console.log("Her kommer en film");
  console.log(oneSingleMovieObject);
  // write .OBJECT_INFO to PRESENT ONLY A SINGLE VALUE i.e.   "console.log(oneSingleMovieObject.TITLE);" or   console.log(oneSingleMovieObject);//
}
