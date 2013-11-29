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
    }
  }
})();

Ember.Test.registerHelper('path', function() {
  return emberHelpers.path();
});