Sis.urls = {} || Sis.urls;

Sis.urls.studentLogin = "/students/sign_in.json";
Sis.urls.studentRegister = "/students.json";
Sis.urls.studentLogout = "/students/sign_out.json";

Sis.urls.teacherLogin = "/teachers/sign_in.json";
Sis.urls.teacherRegister = "/teachers.json";
Sis.urls.teacherLogout = "/teachers/sign_out.json";

// Make sure new CSRF tokens which are passed over to the client via 
// ApplicationController#set_csrf_token are added to all ajax requests.
// New tokens come over when we login/logout
// Pretty much followed this SO post: http://stackoverflow.com/a/15761835/1159410
$.ajaxPrefilter(function(options, originalOptions, xhr) {
  var token = $.cookie('XSRF-TOKEN');
  xhr.setRequestHeader('X-CSRF-Token', token);
});