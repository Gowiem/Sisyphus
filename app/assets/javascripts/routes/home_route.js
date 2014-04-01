Sis.HomeRoute = Ember.Route.extend({
  needs: ['navigation'],
  model: function() {
    if (this.get('auth.currentUser') && this.get('auth.currentUser.isTeacher')) {
      return this.store.findAll('semester');
    }
  },
});
