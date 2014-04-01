// Ember Extensions
Ember.ArrayProxy.prototype.flatten = Array.prototype.flatten = function() {
  var r = [];
  this.forEach(function(el) {
    r.push.apply(r, Ember.isArray(el)  ? el.flatten() : [el]);
  });
  return r;
};

// jQuery Additions

jQuery.fn.exists = function() { return this.length > 0; };
