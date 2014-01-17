Sis.AuthController = Ember.ObjectController.extend({
  currentUser: null,
  isAuthenticated: Em.computed.notEmpty("currentUser"),

  // Login
  /////////
  login: function(route) {
    var self = this, 
        userType = route.routeName === "studentLogin" ? "student" : "teacher",
        loginUrl = Sis.urls[userType + 'Login'],
        postData = {};
    postData[userType + "[email]"] = route.currentModel.get('email');
    postData[userType + "[password]"] = route.currentModel.get('password');
    return ic.ajax({
      url: loginUrl,
      type: "POST",
      data: postData,
    }).then(
    // Success Callback
    function(result) {
      var data = result.response;
      var model = route.currentModel
      model.deleteRecord();
      self.store.push(userType, data[userType]);
      self.store.find(userType, data[userType].id).then(function(user) {
        self.set('currentUser', user);
        if (user.get('isTeacher')) {
          route.transitionTo('teacher');
        } else {
          route.get('store').find('project').then(function(projects) {
            route.transitionTo('project', projects.get('firstObject'));
          });
        }
      });
    },
    // Error Callback
    function(result) {
      var jqXHR = result.jqXHR;
      if (jqXHR.status==401) {
        route.controllerFor('login').set("errorMsg", "That email/password combo didn't work.  Please try again");
      } else if (jqXHR.status==406) {
        route.controllerFor('login').set("errorMsg", "Request not acceptable (406):  make sure Devise responds to JSON.")
      } else {
        console.log("Login Error: ", jqXHR.status);
      }
    });
  },

  // Logout
  //////////
  logout: function() {
    var self = this,
        logoutUrl = this.get('currentUser').get('isTeacher') ? Sis.urls['teacherLogout'] : Sis.urls['studentLogout'];
    return ic.ajax({
      url: logoutUrl,
      type: "DELETE",
      dataType: "json"
    }).then(
    // Success Callback
    function(result) {
      var data = result.response;
      $('meta[name="csrf-token"]').attr('content', data['csrf-token']);
      $('meta[name="csrf-param"]').attr('content', data['csrf-param']);
      self.set('currentUser', null);
      self.transitionToRoute('home');
    },
    // Error Callback
    function(result) {
      alert(result.jqXHR.responseJSON['error']);
      console.log("Error loggin out: ", result.jqXHR.status);
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