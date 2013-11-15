Sis.RegistrationController = Ember.ObjectController.extend({
  hasPickedAUserType: false,
  userType: null,
  actions: {
    pickTeacherType: function() {
      this.set('hasPickedAUserType', true);
      this.set('userType', 'student');
    },
    pickStudentType: function() {
      this.set('hasPickedAUserType', true);
      this.set('userType', 'student');
    },
    cancel: function() {
      this.set('hasPickedAUserType', false);
      this.set('userType', null);
    }
  }
});