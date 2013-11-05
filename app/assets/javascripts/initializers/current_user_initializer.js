Sis.initializer({
  name: 'currentUser',
  initialize: function(container) {
    var store = container.lookup('store:main'),
        jsonString = $('meta[name="current-user"]').attr('content');

    // If the JSON got set into the current-user meta tag then add it the app
    if (jsonString) {
      var userJson = JSON.parse(jsonString), user, controller;

      // Push the user model into the store and then grab the newly created user model
      // TODO: Expecting students here, so we'll have to fix this later to work with teachers as well.
      store.push('student', userJson);
      user = store.find('student', userJson.id);

      // Set the currentUserController's content to this user and inject the controller
      // into all the things. 
      controller = container.lookup('controller:currentUser').set('content', user);
      container.typeInjection('controller', 'currentUser', 'controller:currentUser');

      // Remove the current-user meta tag so we don't have user data just lying around
      $('meta[name="current-user"]').remove();
    }
  }
});