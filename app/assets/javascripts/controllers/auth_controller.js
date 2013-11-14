Sis.AuthController = Ember.ObjectController.extend({
  currentUser: null,
  isAuthenticated: Em.computed.notEmpty("currentUser.email"),
  login: function(route) {
    console.log("AuthController - login");
    var self = this,
        postData = {
          "student[email]": route.currentModel.get('email'), 
          "student[password]": route.currentModel.get('password') 
        };
    $.ajax({
      url: Sis.urls.login,
      type: "POST",
      data: postData,
      success: function(data) {
        self.store.push('student', data.student);
        user = self.store.find('student', data.student.id);
        self.set('currentUser', user);
        route.transitionTo('index');
      },
      error: function(jqXHR, textStatus, errorThrown) {
        if (jqXHR.status==401) {
          route.controllerFor('login').set("errorMsg", "That email/password combo didn't work.  Please try again");
        } else if (jqXHR.status==406) {
          route.controllerFor('login').set("errorMsg", "Request not acceptable (406):  make sure Devise responds to JSON.")
        } else {
          console.log("Login Error: ", jqXHR.status, "error: ", errorThrown);
        }
      }
    });
  },
  logout: function() {
    console.log("AuthController - logout");
    var self = this;
    $.ajax({
      url: Sis.urls.logout,
      type: "DELETE",
      dataType: "json",
      success: function(data, textStatus, jqXHR) {
        console.log('Logged out successfully');
        $('meta[name="csrf-token"]').attr('content', data['csrf-token']);
        $('meta[name="csrf-param"]').attr('content', data['csrf-param']);
        self.set('currentUser', null);
        self.transitionToRoute('login');
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error loggin out: ", errorThrown);
      }
    });
  },
  register: function() {

  },

});