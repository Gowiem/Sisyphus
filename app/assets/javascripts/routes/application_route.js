Sis.ApplicationRoute = Ember.Route.extend({
  model: function () {
    console.log("Model: app route");
    currentUser = this.get('auth.currentUser');
    if (currentUser != null) {
      console.log("Model: Returns find semesters");
      return this.get('store').find('semester');
    }

  },

  beforeModel: function () {
    console.log("Before Model: app route");
  }
});