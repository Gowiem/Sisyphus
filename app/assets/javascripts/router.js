// For more information see: http://emberjs.com/guides/routing/

console.log("--> Loading router.js")

Sis.Router.map(function() {
  this.resource('projects', { path: '/' })
});
