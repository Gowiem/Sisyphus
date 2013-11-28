// Testing Helpers Specific to Sisyphus
////////////////////////////////////////

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

var setupServer = function(server) {
  // Don't need to call server.respond() all the time
  server.autoRespond = true;

  // All the things
  server.respondWith(
    "GET",
    "/projects",
    [200, { "Content-Type": "application/json" }, JSON.stringify(fixtures[0])]
  );
  // Log in
  var userJSON = {};
  userJSON['student'] = fixtures[0]['students'][4];
  server.respondWith(
    "POST",
    "/students/sign_in.json",
    [200, { "Content-Type": "application/json" }, JSON.stringify(userJSON)]
  );
  // Log out
  server.respondWith(
    "DELETE",
    "/students/sign_out.json",
    [200, { "Content-Type": "application/json" }, "{csrf-param: 'authenticity_token', csrf-token: 'SgQEpDI0ncccBxXdUTOlMTYtGQmvlpa+Hu5+/aZEgwg='}"]
  );
}