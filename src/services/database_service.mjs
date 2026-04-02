import sqlite3 from 'sqlite3'
import { open, Statement } from 'sqlite'
import fs from 'fs'

let db = await open({
    filename: './database.db',
    driver: sqlite3.Database
})

async function closeDB() {
    await db.close()
}

async function saveBooks(db, books) {
    for (let book of books) {
        saveBookDetails(db, book)
    }
}

async function saveBookDetails(db, book) {
    let authorID = saveAuthor();
}

async function saveBook(db, book) {

}

async function saveAuthors(db, authors) {

}

async function saveAuthorDetails(db, firstName, lastName) {
    return saveAuthor(db, {firstname: firstName, lastname: lastName})
}

async function saveAuthor(db, author) {
    let authorResult = await db.get('SELECT author_id FROM authors WHERE first_name = ? AND last_name = ?', [first_name, last_name]);


}

async function saveGenres(db, authors) {

}

async function saveGenre(db, author) {

}