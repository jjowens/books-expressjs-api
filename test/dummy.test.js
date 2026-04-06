// app.test.js
const request = require("supertest");
const should = require("supertest");
const app = require("../src/server.js");

describe("GET requests", () => {
    it("/ - Home", async () => {
        const res = await request(app)
            .get("/")
            .expect("Content-Type", /html/)
            .expect(200);
    });

    it("/simplejson", async () => {
        const res = await request(app)
            .get("/simplejson")
            .expect("Content-Type", /json/)
            .expect(200);

        console.table(res.body);

        expect(res.body).toEqual("Hello, World!");
    });

    it("/complexjson", async () => {
        const res = await request(app)
            .get("/complexjson")
            .expect("Content-Type", /json/)
            .expect(200);

        const record = await res.body;

        expect(record.name).toEqual("Jim-Bob");
        expect(record.role).toEqual("Software Developer");
        expect(record.department).toEqual("Software Delivery");
    });

});