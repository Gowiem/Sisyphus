Sis.urls = {} || Sis.urls;

Sis.urls.userLogin = "/users/sign_in.json";
Sis.urls.userLogout = "/users/sign_out.json";

Sis.urls.studentRegister = "/students.json";
Sis.urls.teacherRegister = "/teachers.json";

Sis.cookies = Sis.cookies || {};
Sis.cookies.email = 'SISYPHUS_EMAIL';

// Number of seconds a task stays in the limbo state
Sis.SECONDS_IN_LIMBO_TIME = 1.5;

// Make sure new CSRF tokens which are passed over to the client via 
// ApplicationController#set_csrf_token are added to all ajax requests.
// New tokens come over when we login/logout
// Pretty much followed this SO post: http://stackoverflow.com/a/15761835/1159410
$.ajaxPrefilter(function(options, originalOptions, xhr) {
  var token = $.cookie('XSRF-TOKEN');
  xhr.setRequestHeader('X-CSRF-Token', token);
});

Sis.normalizeJsonObject = function(jsonObj, type, store) {
  var serializer,
      dataType;

  // Grab our serializer for this type
  serializer = store.serializerFor(type);

  // Get Sis.Student/Teacher depending on which userType
  dataType = Sis[type.charAt(0).toUpperCase() + type.slice(1)];
  console.assert(serializer && dataType,
    "serializer or dataType were not found to normalize the given JSON. jsonObj: ", jsonObj, " type: ", type);

  // Use our serializer to normalize the jsonObj of the found dataType
  return serializer.normalize(dataType, jsonObj);
};

Sis.newsFeedTimer = null;
Sis.pushObjectsTimer = null;
Sis.updateHistoryTrackers = function(projectGroup) {
  var historiesUrl = "/project_groups/" + projectGroup.get('id') + "/history_trackers.json?exclude_old=true",
      store = Sis.__container__.lookup('store:main');

  // If we've got current run.laters in the run loop then cancel them as we'll be
  // overwriting them in a second anyway.
  if (Sis.newsFeedTimer) { Ember.run.cancel(Sis.newsFeedTimer); }
  if (Sis.pushObjectsTimer) { Ember.run.cancel(Sis.pushObjectsTimer); }

  // Run our AJAX call in 2 seconds
  Sis.currentHistoryUpdate = Ember.run.later(this, function() {
    Sis.newsFeedTimer = null;
    ic.ajax({
      url: historiesUrl,
      type: "GET" })
    // Success
    .then(function(result) {
      var historyTrackers = result['response'],
          emHistoryTrackers;

      // Push our new records into EmberData
      store.pushPayload('historyTracker', historyTrackers);

      Sis.pushObjectsTimer = Ember.run.later(this, function() {
        Sis.pushObjectsTimer = null;
        // Grab the new Ember versions of them and add them to our projectGroup
        emHistoryTrackers = store.all('historyTracker');
        projectGroup.get('historyTrackers').addObjects(emHistoryTrackers);
      }, 1000);
    },
    // Error
    function(result) {
      console.log("Error updating the News Feed. Error: ", result);
    });
  }, 2000);
};
