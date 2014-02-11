Sis.initializer({
  name: 'currentUser',

  initialize: function(container, application) {
    var store = container.lookup('store:main'),
        jsonString = $('meta[name="current-user"]').attr('content');

    // Set our currentUser (currently null, but is set again later if found)
    // into our auth_controller and currentUser controller.
    container.lookup('controller:auth').set('currentUser', null);
    container.lookup('controller:currentUser').set('content', null);
    // Inject our auth_controller into all controllers and routes
    application.inject('controller', 'auth', 'controller:auth');
    application.inject('route', 'auth', 'controller:auth');

    // If the JSON got set into the current-user meta tag then add it the app
    if (jsonString) {
      var userJson = JSON.parse(jsonString),
          userType = userJson['type'].toLowerCase();

      userJson = Sis.normalizeJsonObject(userJson, userType, store);

      // Push the user model into the store and then grab the newly created user model
      store.push(userType, userJson);
      store.find(userType, userJson.id).then(function(user) {
        container.lookup('controller:auth').set('currentUser', user);
        container.lookup('controller:currentUser').set('content', user);
      });

      // Remove the current-user meta tag so we don't have user data just lying around
      $('meta[name="current-user"]').remove();
    }
  }
});