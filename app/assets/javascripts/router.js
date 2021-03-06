// For more information see: http://emberjs.com/guides/routing/
Sis.Router.map(function() {
  this.route('home', { path: '/' });
  this.route('semester', { path: '/semester/:semester_id'});
  this.resource('project', { path: '/projects/:project_id' }, function() {
    this.route('project_group', { path: '/project_groups/:project_group_id' });
  });
  
  this.route('userLogin', { path: '/users/login' });
  this.route('registration', { path: '/users/sign_up' });

  this.route("fourOhFour", { path: "*path"});
});

Sis.Router.reopen({
  location: 'history'
});
