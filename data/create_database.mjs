import sqlite3 from 'sqlite3'
import { open, Statement } from 'sqlite'
import fs from 'fs'
import * as readline from "node:readline";

open({
    filename: './database.db',
    driver: sqlite3.Database
}).then((db) => {
    // readAndExecuteSQLCommands(db, './tables.txt')
    // readAndExecuteSQLCommands(db, './genres.txt')
    // readAndExecuteSQLCommands(db, './authors.txt')
    addBooks(db, './books.txt')
})

function readFileContents(filename) {
    return fs.readFileSync(filename, 'utf8')
}

function readAndExecuteSQLCommands(db, filename) {
    let text = readFileContents(filename);
    let lines = text.split('\n');

    lines.forEach(line => {
        db.exec(line);
    })
}

async function addBooks(db, filename) {
    let text = readFileContents(filename);
    let lines = text.split('\n');

    for (const line of lines) {
        let arr = line.split(';');

        let book_title = arr[0];
        let first_name = arr[1];
        let last_name = arr[2];
        let genre_name = arr[3];

        console.log("- Adding Book " + book_title);

        const authorResult = await db.get('SELECT author_id FROM authors WHERE first_name = ? AND last_name = ?', [first_name, last_name]);
        const genreResult = await db.get('SELECT genre_id FROM genres WHERE genre_name = ?', [genre_name]);

        console.log(authorResult);
        console.log(genreResult);
        const author_id = authorResult.author_id;
        const genre_id = genreResult.genre_id;

        const result = db.run('INSERT INTO books(book_title, author_id, genre_id) VALUES (:book_title, :author_id, :genre_id)', {
            ':book_title': book_title,
            ':author_id': author_id,
            ':genre_id': genre_id
        })
    }
}

