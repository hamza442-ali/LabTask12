const request = require("supertest");
const app = require('./routes/User');
const mongoose = require('mongoose');

describe("Test the root path", () => {
    test("It should response the POST method", () => 
    {
    const response = request(app).post("mongodb://localhost:27017/labtask12"
    ).send ({
    "Name": "Hamza",
    "Email": "hamza@gmail.com",
    "Age": 12,
    "Contact": 123
    })
    expect(response.statusCode).toBe(200);
    })

   describe("Test the root path",()=>
    {
        test("It should response the POST method",()=>
        {
            const response=request(app).delete("http://localhost:8000/User/131111178"
            ).send({
                "id" : "131111178"
            })
    expect(response.statusCode).toBe(200);
    })
    })
    
    test("It should response the POST method", () => 
    {
    const response = request(app).post("http://localhost:8000/User/add"
    ).send ({
    "Name": "Hamza"
    })
    expect(response.statusCode).toBe(400);
    })
    
    })