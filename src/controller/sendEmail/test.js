import chai from 'chai';
import chaiHttp from 'chai-http';
import { port } from 'configuration'

process.env.NODE_ENV = 'test';

chai.use(chaiHttp);
chai.should();

const host = `http://localhost:${port}`;


describe('sendEmail', () =>
  describe('Send Email controller test', () => { 
   
    const body = { 
      messageInfo: {
        recipientCodeName: 'Armando Mossuto', 
        emailAddress: 'test@test.com',
        firstName: 'Test',
        firstName: 'Armando',
        lastName: 'Mossuto',
        subject: 'Testing mail sender',
        text: 'Hello, this is a test'
      }
    }

    it('should create a new account', done => {
      const path = '/contact';
      chai.request(host)
        .post(path)
        .send(body)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.message.should.equal('success');
          done();
      });
    });

   
  }),
);
