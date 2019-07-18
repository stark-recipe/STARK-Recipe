const request = require('supertest');
const server = 'http://localhost:3000';

describe('Route integration', () => {
  describe('/login', () => {
    describe('POST', () => {
      it('responds with 200 status and application/json content type', (done) => {
        return request(server)
          .post('/login')
          .send( {username: 'test', password: 'test'} )
          .expect((res) => {
              expect(res.status).toBe(200);
              expect(res.header['content-type']).toBe('application/json; charset=utf-8')
          })
          .end(done)
      });
      it ('responds with object that has keys including username, email, id', (done) => {
        return request(server)
          .post('/login')
          .send( {username: 'test', password: 'test'} )
          .expect((res) => {
            expect(res.body).toEqual( {username: "test", email: "test@codesmith.io", id: 15});
          })
          .end(done);
        });
      it ('responds to invalid request with 403 status and error message in body', (done) => {
        request(server)
          .post('/login')
          .send('this isn\'t a correct login')
          .expect((res) => {
             expect(res.status).toBe(403)
             expect(res.text).toEqual('Error - no username/password')
          })
          .end(done);
      });
    })
  })

  describe('addFav and deleteFav' ,() => {
    describe('POST', () => {
      it ('adds and deletes favs while returning object with user_id, id, img_url, recipe_url, label as keys', (done) => {
        let favId;
        return request(server)
          .post('/addFav')
          .send( {user_id: 1, label: "Chicken", img_url: "testImgUrl", recipe_url: "testRecipeUrl"} )
          .expect((res) => {
            favId = res.body.id
            console.log(favId, 'favId')
            expect(res.body).toEqual( {user_id: 1, label: "Chicken", img_url: "testImgUrl", recipe_url: "testRecipeUrl"} );
          })
          .end((function() {
            request(server)
            .delete('/removeFav')
            .send({id: favId})
            .expect((res) => {
              // expect(res.body).toEqual( {user_id: 1, label: "Chicken", img_url: "testImgUrl", recipe_url: "testRecipeUrl"} );
              // console.log(res, 'this is resbody');
              expect(res.body.user_id).toEqual(1);
              expect(res.body.label).toEqual("Chicken");
              expect(res.body.img_url).toEqual("testImgUrl");
              expect(res.body.recipe_url).toEqual("testRecipeUrl");
            })
            .end(done);
          }));
      });
      it ('addFav responds to bad request with 403 error status', (done) => {
        return request(server)
          .post('/addFav')
          .send({user_id: 'str'})
          .expect((res) => {
            console.log(res.body)
            expect(res.status).toBe(403)
            expect(res.body.name).toEqual('error')
          })
          .end(done);
      })
      it ('removeFav response to bad request with 403 error status', (done) => {
        return request(server)
          .delete('/removeFav')
          .send({id: 'notanID'})
          .expect((res) => {
            expect(res.status).toBe(403)
            expect(res.text).toEqual('id is not a number')
          })
          .end(done);
      })
    })
  })


})