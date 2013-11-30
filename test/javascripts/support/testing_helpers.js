// Testing Helpers Specific to Sisyphus
////////////////////////////////////////

// Adds ember-testing-continer, resets, and starts ember
var initEmber = function() {
  // Remove previous testing container and add a fresh guy into the dom
  $('#ember-testing-container').remove();
  $('body').append('<div id="ember-testing-container"><h3> Ember Testing Area </h3><div id="ember-testing"></div></div>');

  // Start Ember
  Sis.reset();
  Ember.run(Sis, Sis.advanceReadiness);
}

var loginStudent = function(username, password) {
  visit('/').click('.studentsLogin .btn span')
            .fillIn('#email-field', username)
            .fillIn('#password-field', password)
            .click('#login-button').then(function() {
              console.log("Student logged in");
            });
}

var logoutUser = function(username, password) {
  click('#logout-button').then(function() {
    console.log("User logged out");
  });
}

// Use ic.ajax.defineFixture to mock ic.ajax calls 
var initAjaxFixtures = function() {
  // Login 
  var userJSON = {};
  userJSON['student'] = fixtures[0]['students'][4];
  ic.ajax.defineFixture("/students/sign_in.json", {
    response: userJSON,
    jqXHR: {},
    textStatus: 'success'
  });
  // Log out
  ic.ajax.defineFixture("/students/sign_out.json", {
    response: {'csrf-param': 'authenticity_token', 'csrf-token': 'SgQEpDI0ncccBxXdUTOlMTYtGQmvlpa+Hu5+/aZEgwg='},
    jqXHR: {},
    textStatus: 'success'
  });
}

var initServer = function() {
  var server = sinon.fakeServer.create();
  // Don't need to call server.respond() all the time
  server.autoRespond = true;

  // Need to mock ember internal $.ajax calls with sinon since it's not using ic.ajax
  server.respondWith(
    "GET",
    "/projects",
    [200, { "Content-Type": "application/json" }, JSON.stringify(fixtures[0])]
  );
  return server;
}