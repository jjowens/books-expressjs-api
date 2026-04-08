// app.test.js
const request = require("supertest");
const should = require("supertest");
const app = require("../src/server.js");

describe("Author requests", () => {
    it("/ - Get All Authors", async () => {
        const res = await request(app)
            .get("/author/all")
            .expect("Content-Type", /json/)
            .expect(200);

        expect(res.body.length).toBe();

        console.table(res.body);
    });

    it("/author/save - Save New Author", async () => {
        const payload = {"first_name": "New", "last_name": "Author"}

        const res = await request(app)
            .post("/author/save")
            .send(payload)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json")
            .expect(200);

        const expectedResult = {"status": "success", "author_id": 0};

        expect(res.body.text).toBe(expectedResult);
    });

});