Sis.urls = {} || Sis.urls;

Sis.urls.studentLogin = "/students/sign_in.json";
Sis.urls.studentRegister = "/students.json";
Sis.urls.studentLogout = "/students/sign_out.json";

Sis.urls.teacherLogin = "/teachers/sign_in.json";
Sis.urls.teacherRegister = "/teachers.json";
Sis.urls.teacherLogout = "/teachers/sign_out.json";

Sis.cookies = Sis.cookies || {};
Sis.cookies.email = 'SISYPHUS_EMAIL';

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
}