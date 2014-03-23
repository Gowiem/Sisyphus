// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//

// Rails Defaults
//////////////////
//= require jquery
//= require jquery_ujs
//= require turbolinks

// Bootstrap
/////////////
// require bootstrap

// Handlebars, Ember, Ember-Data
/////////////////////////////////
//= require handlebars
//= require ember
//= require ember-data
//= require ./vendor/ember-google-analytics
//= require_self
//= require sisyphus
//= require extensions

// Other 3rd Party Add ons
///////////////////////////
//= require_tree ./vendor

// for more details see: http://emberjs.com/guides/application/
Sis = Ember.Application.create({
  LOG_TRANSITIONS: true,
  // These will probably be useful down the road.
  // LOG_ACTIVE_GENERATION: true,
  // LOG_VIEW_LOOKUPS: true,
  ready: function() {
    console.log("Ember.Application#Ready!");
  }
});

Ember.RSVP.configure('onerror', function(error) {
  Ember.Logger.assert(false, error);
});

//= require_tree .
