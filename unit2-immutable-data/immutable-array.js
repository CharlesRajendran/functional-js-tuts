const films = [
    {name: "Infinity War", rating: 9.0},
    {name: "Avatar", rating: 9.5},
    {name: "Lights Out", rating: 8.0}
];

// Add a films to the list, with spread operator
const newFilms = [
    ...films,
    {name: "Titanic", rating: 8.5}
];

// Update elements in the array with map higher order function
const updatedRatingForTitanic = newFilms.map((film) => {
    if (film.name === "Titanic") {
        film.rating = 8.9
    }
})

// Removing an element in array with filter higher order function
const removedLightsOut = updatedRatingForTitanic.filter((film) => {
    if (film.name === "Lights Out") {
        return false;
    }
    return true
})