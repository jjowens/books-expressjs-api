// app.test.js
const request = require("supertest");
const should = require("supertest");
const app = require("../src/server.js");

describe("Author requests", () => {
    it("/ - Get All Authors", async () => {
        const res = await request(app)
            .get("/")
            .expect("Content-Type", /html/)
            .expect(200);

    });

});