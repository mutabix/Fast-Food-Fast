import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index.js';

chai.use(chaiHttp);
const should = chai.should();

const newestOrder = {
    name: 'Azu Patrick',
    email: 'email@email.com',
    meal: 'spicy chicken',
    quantity: 1,
    price: 800,
    location: 'Lagos',
}

const invalidOrder = {
    name: 'Lucy Doe',
    email: 'unregisteredemail@email.com',
    meal: 'spicy chicken',
    quantity: 1,
    price: 800,
    location: 'Lagos',
}

const emptyInputs = {
  name: '',
  email: '',
  meal: '',
  quantity: '',
  price: '',
  location: '',
}

const invalidEmail = {
  email: 'azzz@zssscom',
}

describe('Fast-Food-Fast Test Suite', () => {

  // ==== Place a new order ==== //

  describe(' POST /orders', () => {
    it('should place a new order', (done) => {
      chai.request(app)
        .post('/api/v1/orders')
        .send(newestOrder)
        .end((err, res) => {
          if (err) throw err;
          res.status.should.equal(201);
          res.body.should.be.a('object'); 
          res.body.should.have.property('success'); 
          res.body.should.have.property('data'); 
          res.body.success.should.be.a('boolean'); 
          res.body.data.should.be.a('object'); 
          res.body.success.should.equal(true);
          res.body.data.message.should.be.a('string');
          res.body.data.message.should.equal('Your order has been processed, thank you.'); 
          done();
        });
    });
  });

  describe(' POST /orders', () => {
    it('should not place a new order', (done) => {
      chai.request(app)
        .post('/api/v1/orders')
        .send(invalidOrder)
        .end((err, res) => {
          if (err) throw err;
          res.status.should.equal(404);
          res.body.should.be.a('object'); 
          res.body.should.have.property('success'); 
          res.body.should.have.property('data'); 
          res.body.success.should.be.a('boolean'); 
          res.body.data.should.be.a('object'); 
          res.body.success.should.equal(false);
          res.body.data.message.should.be.a('string');
          res.body.data.message.should.equal('Sorry, user not found, order not made'); 
          done();
        });
    });
  });

  describe(' POST /orders', () => {
    it('should return error on empty input fields and not place a new order', (done) => {
      chai.request(app)
        .post('/api/v1/orders')
        .send(emptyInputs)
        .end((err, res) => {
          if (err) throw err;
          res.status.should.equal(400);
          res.body.should.be.a('object'); 
          res.body.should.have.property('success'); 
          res.body.should.have.property('error'); 
          res.body.success.should.be.a('boolean'); 
          res.body.error.should.be.a('string'); 
          res.body.success.should.equal(false); 
          done();
        });
    });
  });

  describe(' POST /orders', () => {
    it('should return error on invalid email and not place a new order', (done) => {
      chai.request(app)
        .post('/api/v1/orders')
        .send(invalidEmail)
        .end((err, res) => {
          if (err) throw err;
          res.status.should.equal(400);
          res.body.should.be.a('object'); 
          res.body.should.have.property('success'); 
          res.body.should.have.property('error');
          res.body.success.should.be.a('boolean'); 
          res.body.error.should.be.a('string'); 
          res.body.success.should.equal(false); 
          done();
        });
    });
  });

});
