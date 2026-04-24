const request = require('supertest');
const express = require('express');

const app = require('../src/app');

describe('Genres', function(){

    it('GET /api/genre', function(done){
        request(app)
            .get('/api/genre')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res){
                if (err) return done(err);
                done()
            });
    })

    it('GET /api/genre/all', function(done){
        request(app)
            .get('/api/genre/all')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res){
                if (err) return done(err);
                done()
            });
    })

    it('POST /api/genre/save', function(done){
        const payload = { "genrename": "Random" };
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