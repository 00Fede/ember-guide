export default function() {
  this.namespace = '/api';
  this.get('/spies', function() {
    return {
      data: [{
        type: 'spy',
        id: 1,
        attributes: {
          name: 'Brayan Maison',
          city: 'Medellín',
          type: 'Espía',
          image: 'http://cdn01.am.infobae.com/adjuntos/163/infografia/013/330/0013330024.jpg?0000-00-00-00-00-00'
        }
      }, {
        type: 'spy',
        id: 2,
        attributes: {
          name: 'María Calamidades',
          city: 'Bogotá',
          type: 'Espía',
          image: 'http://www.cineycine.com/archivos/2099/09/espias-lucha.jpg'
        }
      }, {
        type: 'spy',
        id: 3,
        attributes: {
          name: 'Otilio Benavidez',
          city: 'Valle',
          type: 'Luchador',
          image: 'https://gimnasiorizo.files.wordpress.com/2015/02/img_0291.jpg'
        }
      }]
    };
  });
  // Find and return the provided spy from our spy list above
  this.get('/spies/:id', function (db, request) {
  return { data: spies.find((spy) => request.params.id === spy.id) };
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
  Config (with defaults).

  Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
  Shorthand cheatsheet:

  this.get('/posts');
  this.post('/posts');
  this.get('/posts/:id');
  this.put('/posts/:id'); // or this.patch
  this.del('/posts/:id');

  http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
}
