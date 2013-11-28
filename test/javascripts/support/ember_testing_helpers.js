// Ember Testing Helpers
/////////////////////////

// Adapted from: https://github.com/Ember-SC/peepcode-ordr-test/wiki/Guide:-Testing-Setup-Helpers
var helper = (function() {
  var container = function() {
    return Sis.__container__;
  }

  return {
    getController: function(name){
      return container().lookup('controller:' + name);
    },

    path: function(){
      return this.getController('application').get('currentPath');
    },

    exists: function(selector) {
      return !!find(selector).length;
    }
  }
})();

Ember.Test.registerHelper('path', function() {
  return helper.path();
});

Ember.Test.registerHelper('getController', function(name) {
  return helper.getController(name);
});

Ember.Test.registerHelper('exists', function(selector) {
  return helper.exists(selector);
});