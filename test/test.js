var supertest = require("supertest");
var should = require("should");

var server = supertest.agent("http://localhost:7980");

describe("Testing Login",function() {

  it("01-should respond with redirect & HTTP status code 200 on success",function(done) {
    server
    .get("/")
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res) {
      done();
    });
  }); // end of 1st test

  it("02-should return error message : Invalid User",function(done) {
    server
    .post("/login")
    .send({uname : 'user', psw : 'user@123'})
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res) {
        res.text.should.equal('Invalid User');
      done();
    });
  }); // end of 2nd test

  it("03-should return success message : Valid User",function(done) {
    server
    .post("/login")
    .send({uname : 'admin', psw : 'admin@123'})
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res) {
        res.text.should.equal('Valid User');
      done();
    });
  }); // end of 3rd test


}); // end of describe
