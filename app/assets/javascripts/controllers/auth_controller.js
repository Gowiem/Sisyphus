Sis.AuthController = Ember.ObjectController.extend({
  currentUser: null,
  isAuthenticated: Em.computed.notEmpty("currentUser.email"),

  // Login
  /////////
  login: function(route) {
    var self = this, 
        userType = route.routeName === "studentLogin" ? "student" : "teacher",
        loginUrl = Sis.urls[userType + 'Login'],
        postData = {};
    postData[userType + "[email]"] = route.currentModel.get('email');
    postData[userType + "[password]"] = route.currentModel.get('password');
    $.ajax({
      url: loginUrl,
      type: "POST",
      data: postData,
      success: function(data) {
        self.store.push(userType, data[userType]);
        self.store.find(userType, data[userType].id).then(function(user) {
          self.set('currentUser', user);
          if (user.get('isTeacher')) {
            route.transitionTo('teachers');
          } else {
            route.transitionTo('home');
          }
        });
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

  // Logout
  //////////
  logout: function() {
    console.log("AuthController - logout");
    var self = this,
        logoutUrl = this.get('currentUser').get('isTeacher') ? Sis.urls['teacherLogout'] : Sis.urls['studentLogout'];
    $.ajax({
      url: logoutUrl,
      type: "DELETE",
      dataType: "json",
      success: function(data, textStatus, jqXHR) {
        console.log('Logged out successfully');
        $('meta[name="csrf-token"]').attr('content', data['csrf-token']);
        $('meta[name="csrf-param"]').attr('content', data['csrf-param']);
        self.set('currentUser', null);
        self.transitionToRoute('home');
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error loggin out: ", errorThrown);
      }
    });
  },

  // Registration
  ////////////////
  register: function(route, userType) {
    var self = this,
        registerUrl = Sis.urls[userType + 'Register'],
        registerData = {};
    registerData[userType + '[email]'] = route.currentModel.get('email');
    registerData[userType + '[password]'] = route.currentModel.get('password');
    registerData[userType + '[password_confirmation]'] = route.currentModel.get('password_confirmation');
    $.ajax({
      url: registerUrl,
      type: "POST", 
      data: registerData,
      success: function(data) {
        route.transitionTo('home');
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error while registering: ", errorThrown);
      }
    });
  },
});