// app.test.js
const request = require("supertest");
const app = require("../src/app.js");

describe("GET Home Page /", () => {
    it("", async () => {
        const res = await request(app)
            .get("/")
            .expect("Content-Type", /html/)
            .expect(200);

        //expect(res.body.message).toBe("Hello, World!");
    });

});