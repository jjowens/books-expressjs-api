const { DatabaseSync } = require('node:sqlite');
const database = new DatabaseSync(__dirname + '/database.db');

async function getAuthors() {
    const query = database.prepare('SELECT * FROM authors ORDER BY last_name ASC');

    return query.all();
}

async function getGenres() {
    const query = database.prepare('SELECT * FROM genres ORDER BY genre_name ASC');

    return query.all();
}

async function getBooks() {
    const queryString = "SELECT books.book_id, books.book_title, " +
                                "authors.author_id, authors.first_name, authors.last_name, " +
                                "genres.genre_id, genres.genre_name FROM books " +
                                "INNER JOIN authors ON authors.author_id = books.author_id " +
                                "INNER JOIN genres ON genres.genre_id=books.genre_id " +
                                "ORDER BY books.book_title";

    const query = database.prepare(queryString);

    return query.all();
}

module.exports = {
    getAuthors: getAuthors,
    getGenres: getGenres,
    getBooks: getBooks,
}