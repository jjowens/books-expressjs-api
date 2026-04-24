const request = require('supertest');
const express = require('express');

const app = require('../src/app');

describe('Authors', function(){

    it('GET /api/author', function(done){
        request(app)
            .get('/api/author')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res){
                if (err) return done(err);
                done()
            });
    })

    it('GET /api/author/all', function(done){
        request(app)
            .get('/api/author/all')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res){
                if (err) return done(err);
                done()
            });
    })

    it('POST /api/author/save', function(done){
        const payload = { "firstname": "First", "lastname": "Last" };
        const expectedResult = { "status": "success", "authorid": 1 };

        request(app)
            .post('/api/author/save')
            .set('Accept', 'application/json')
            .send(payload)
            .expect(200)
            .end(function(err, res){
                if (err) return done(err);
                done()
            });
    })
});