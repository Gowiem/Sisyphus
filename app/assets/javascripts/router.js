// For more information see: http://emberjs.com/guides/routing/
Sis.Router.map(function() {

  this.route('home', { path: '/' });

  this.route('teachers', { path: '/teachers' })

  this.route('projects', { path: '/projects' });
  this.route('project', { path: '/projects/:project_id'});

  this.route('studentLogin', { path: '/students/login' });
  this.route('teacherLogin', { path: '/teachers/login' });

  this.route('registration', { path: '/sign_up' });
});

Sis.Router.reopen({
  location: 'history'
});
