Sis.ApplicationRoute = Ember.Route.extend({
  model: function () {
    console.log("Model: app route");
    currentUser = this.get('auth.currentUser');
    if (currentUser.get('isAuthenticated') && currentUser.get('isTeacher')) {
      return this.get('store').find('semester');
    }
  },

  beforeModel: function () {
    console.log("Before Model: app route");
  }
});