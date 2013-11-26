// Teaspoon includes some support files, but you can use anything from your own support path too.
// require support/sinon
// require support/your-support-file
//
// Deferring execution
// If you're using CommonJS, RequireJS or some other asynchronous library you can defer execution. Call Teaspoon.execute()
// after everything has been loaded. Simple example of a timeout:
//
// Teaspoon.defer = true
// setTimeout(Teaspoon.execute, 1000)
//
// Matching files
// By default Teaspoon will look for files that match _test.{js,js.coffee,.coffee}. Add a filename_test.js file in your
// test path and it'll be included in the default suite automatically. If you want to customize suites, check out the
// configuration in config/initializers/teaspoon.rb
//
// Manifest
// If you'd rather require your test files manually (to control order for instance) you can disable the suite matcher in
// the configuration and use this file as a manifest.
//
// For more information: http://github.com/modeset/teaspoon
//
// You can require javascript files here. A good place to start is by requiring your application.js.
//= require application
//= require support/pavlov

// Teaspoon.defer = true;

fixture.set('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

Sis.rootElement = '#ember-testing';
Sis.setupForTesting();
Sis.injectTestHelpers();

document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');
document.write('<style>#ember-testing-container { position: absolute; background: white; top: 600px; bottom: 0; right: 0; width: 100%; height: 100%; overflow: auto; z-index: 9999; border: 1px solid #ccc; } #ember-testing { zoom: 75f%; }</style>');

var fixtures = fixture.load('model_fixtures.json', true);

Sis.Project.FIXTURES = fixtures[0]['projects'];
Sis.Subtask.FIXTURES = fixtures[0]['subtasks'];
Sis.ProjectGroup.FIXTURES = fixtures[0]['project_groups'];
Sis.Comment.FIXTURES = fixtures[0]['comments'];
Sis.Student.FIXTURES = fixtures[0]['students'];
Sis.RequiredTask.FIXTURES = fixtures[0]['required_task'];

Ember.run(function() {
  var studentString = JSON.stringify(Sis.Student.FIXTURES[0]);
  $('head').append('<meta content=' + studentString + ' name="current-user">')
});
