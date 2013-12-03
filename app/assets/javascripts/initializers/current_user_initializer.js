Sis.initializer({
  name: 'currentUser',

  initialize: function(container, application) {
    var store = container.lookup('store:main'),
        jsonString = $('meta[name="current-user"]').attr('content'),
        user = null;

    // If the JSON got set into the current-user meta tag then add it the app
    if (jsonString) {
      var userJson = JSON.parse(jsonString), controller;

      // Push the user model into the store and then grab the newly created user model
      // TODO: Expecting students here, so we'll have to fix this later to work with teachers as well.
      store.push('student', userJson);
      store.find('student', userJson.id).then(function(user) {
        container.lookup('controller:auth').set('currentUser', user);
        container.lookup('controller:currentUser').set('content', user);
      });

      // Remove the current-user meta tag so we don't have user data just lying around
      $('meta[name="current-user"]').remove();
    }

    container.lookup('controller:auth').set('currentUser', user);
    container.lookup('controller:currentUser').set('content', user);
    application.inject('controller', 'auth', 'controller:auth');
    application.inject('route', 'auth', 'controller:auth');

    // Set the auth controllers's content to this user (or null is none was passed in the meta tag) 
    // and inject the controller into all the things.
  }
});