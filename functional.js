// Map practice

// Doubling values in an array

const array = [6, 7, 8]

var newArrayMap = array.map(function (arr) {
    return arr * 2
})

// console.log(array)
// console.log(newArrayMap)

// Filter Practice

const movies = [
    { name: "Wonder Woman", rating: "PG-13" },
    { name: "The Shining", rating: "R" },
    { name: "Finding Nemo", rating: "G" },
]

const newMovieArray = movies.filter(function (movie) {
    return (movie.rating === "PG-13") ? 1 : 0
})

// console.log(newMovieArray)

// Reduce Practice

const nums = [100, 4500, 327666, 5]

const newNums = nums.reduce(function (acc, curr, index) {
    // console.log(index)
    // console.log(acc)
    return (curr > acc) ? curr : acc

},0)

console.log(newNums)