const request = require('supertest');
const express = require('express');

const app = require('../src/app');

describe('Books', function(){

    it('GET /api/books', function(done){
        request(app)
            .get('/api/books')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res){
                if (err) return done(err);
                done()
            });
    })

    it('GET /api/books/all', function(done){
        request(app)
            .get('/api/books/all')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res){
                if (err) return done(err);
                done()
            });
    })

    it('POST /api/books/save', function(done){
        const payload = { "title": "Random",
                               "author":
                                      { "firstname": "Joe", "lastname": "Bloggs"},
                               "genre": "Fiction"
                            };
        const expectedResult = { "status": "success", "genreid": 1 };

        request(app)
            .post('/api/genre/save')
            .set('Accept', 'application/json')
            .send(payload)
            .expect(200)
            .end(function(err, res){
                if (err) return done(err);
                done()
            });
    })
});