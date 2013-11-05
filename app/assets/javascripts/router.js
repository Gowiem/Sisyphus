// For more information see: http://emberjs.com/guides/routing/
Sis.Router.map(function() {
  this.route('projects', { path: '/projects' });
  this.route('project', { path: '/projects/:project_id'});
  this.route('user_login', { path:'/students/sign_in' });
});

Sis.Router.reopen({
  location: 'history'
});
