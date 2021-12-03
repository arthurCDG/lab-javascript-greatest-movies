const movies = [
  {
    title: 'a',
    year: 1994,
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    score: 9.3
  },
  {
    title: 'b',
    year: 1972,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    score: 9.2
  },
  {
    title: 'c',
    year: 1972,
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    genre: ['Crime', 'Drama'],
    score: 9
  },
  {
    title: 'd',
    year: 2008,
    director: 'Christopher Nolan',
    duration: '2h 32min',
    genre: ['Action', 'Crime', 'Drama', 'Thriller'],
    score: 9
  },
  {
    title: '12 Angry Men',
    year: 1957,
    director: 'Sidney Lumet',
    duration: '1h 36min',
    genre: ['Crime', 'Drama'],
    score: 8.9
  },
]

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(array) {
  return array.map(element => element.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

/* Créer une fonction
   Filtrer le tableau reçu à deux niveaux : la key director est strictemnt égale à SP et la key genre contient 'Drama' dans son tableau
   Résultat : la longueur du tableau */

function howManyMovies(array) {
  let result = array.filter(element => (element.director === 'Steven Spielberg') && (element.genre.includes('Drama')));
  return result.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(array) {
  // Condition : if array provided is empty, return 0
  if (!array.length) {
    return 0;
  } else {
  // Initialize a variable that sums up all scores of movies
  let totalScore = 0;
  // Loop through the array with a ternary condition : if the element has a score, adds it up to the totalScore, else don't do anything (to not break the loop with an empty/undefined value)
  array.forEach(element => Number(element.score) ? totalScore += element.score : false);
  // Return the average by dividing the totalScore by the array.length
  return Math.round((totalScore / array.length)*100)/100;
  }
}

 /* Autres solutions ----------------

  (1) let avg = totalScore / array.length;
      let avg2Decimals = Math.round(avg*100)/100
      return avg2Decimals;

  (2) return Number(avg.toFixed(2));

  -------------------------------- */

// Iteration 4: Drama movies - Get the average of Drama Movies

// Create a function that receives an array to get the average score of the movies objects of the array with a drama genre
function dramaMoviesScore(array) {
  // Create a new array (allDramaMovies) that containes only movie objects with a drama genre
  let allDramaMovies = array.filter(element => element.genre.includes('Drama'));
  // Condition : if array is empty, return 0
  if (!allDramaMovies.length) {
    return 0;
  } else {
    // Intialize two variables with a value of zero :
    // totalScoreOfAllDramaMovies (sum of all drama movies scores) 
    let totalScoreOfAllDramaMovies = 0;
    // numberOfNotScoredDramaMovies (number of movies that have a score key with a value of '')
    let numberOfNotScoredDramaMovies = 0;
    // forEach loop on each movie of the allDramaMovies array : if the value of the score key is empty, increment numberOfNotScoredDramaMovies, else add the movie score to the sum of all other scores
    allDramaMovies.forEach(element => !element.score ?  numberOfNotScoredDramaMovies ++ : totalScoreOfAllDramaMovies += element.score);
    // Return the average grade by dividing the sum of all scores with the number of array elements (minus the number of elements with no score)
    return Math.round((totalScoreOfAllDramaMovies / (allDramaMovies.length - numberOfNotScoredDramaMovies))*100 )/100;

  }

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Create a function to order movies objects of the array by year
function orderByYear(array) {
  // Create a copy of the array AND its objects (to not mutate anything with sort later on)
  let newArray = JSON.parse(JSON.stringify(array));
  // Sort the new array with a ternary condition : if both movies have the same year, compare their titles to sort them. If not, rank them by year.
  newArray.sort((a,b) => a.year === b.year ? a.title.localeCompare(b.title) : a.year - b.year);
  // Return result
  return newArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// Create a function to order movies objects of the array by their title and print the first 20 titles
function orderAlphabetically(array) {

  // Copy the existing array to not mutate it with map
  let newArray = JSON.parse(JSON.stringify(array));
  // Map the new array to get only the movies titles and assign it to a variable
  let finalArray = newArray.map(element => element.title);
  // Sort the new array by titles
  finalArray.sort((a,b) => a.localeCompare(b));
  // Splice (or something like that?) the first 20 elements of the new array and save it to a new var
  finalArray.splice(20, (finalArray.length - 20));
  // Return the spliced array
  return finalArray;
  
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
