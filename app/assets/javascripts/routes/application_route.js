Sis.ApplicationRoute = Ember.Route.extend({
  model: function () {
    currentUser = this.get('auth.currentUser');
    if (currentUser !== null && currentUser.get('isTeacher')) {
      return this.get('store').find('semester');
    }
  },
});