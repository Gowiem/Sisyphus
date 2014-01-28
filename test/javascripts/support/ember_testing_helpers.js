// Ember Testing Helpers
/////////////////////////

// Adapted from: https://github.com/Ember-SC/peepcode-ordr-test/wiki/Guide:-Testing-Setup-Helpers
var emberHelpers = (function() {
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
    },
    isVisible: function(selector) {
      console.log("isVisible: ", find(selector).is(':visible'));
      return find(selector).is(':visible');
    }
  }
})();

Ember.Test.registerHelper('path', function() {
  return emberHelpers.path();
});

Ember.Test.registerHelper('isVisible', function(app, selector, context) {
  return emberHelpers.isVisible(selector);
});

Ember.Test.registerHelper('exists', function(app, selector, context) {
  return emberHelpers.exists(selector);
});

Ember.Test.registerHelper('getController', function(app, name, context) {
  return emberHelpers.getController(name);
});