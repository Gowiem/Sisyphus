Sis.AuthController = Ember.ObjectController.extend({
  needs: ['navigation'],
  currentUser: null,
  isAuthenticated: Em.computed.notEmpty("currentUser"),

  // Login
  /////////
  login: function(route) {
    var self = this, 
        userType = route.routeName === "studentLogin" ? "student" : "teacher",
        loginUrl = Sis.urls[userType + 'Login'],
        controller = route.controllerFor(userType + '_login');
        postData = {};
    // Set the email and password fields for the post data to those in the form.
    postData[userType + "[email]"] = route.currentModel.get('email');
    postData[userType + "[password]"] = route.currentModel.get('password');

    return ic.ajax({
      url: loginUrl,
      type: "POST",
      data: postData,
    }).then(
    // Success Callback
    function(result) {
      var data = result.response,
          userJson;
      // Normalize our JSON object
      userJson = Sis.normalizeJsonObject(data[userType], userType, self.store);

      // Reset the error message for this controller.
      controller.set('errorMsg', null);
      var model = route.currentModel;
      model.destroy();

      // Push our returned user's JSON data into the store
      self.store.push(userType, data[userType]);

      // Once we've found our user, set currentUser, and transition appropriately
      self.store.find(userType, data[userType].id).then(function(user) {
        self.set('currentUser', user);
        if (user.get('isTeacher')) {
          route.get('store').find('semester').then(function(semesters) {
            self.get('controllers.navigation').set('currentSemester', semesters.get('firstObject'));
            debugger
            route.transitionTo('semester', semesters.get('firstObject'));
          });
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
      if (jqXHR.status === 401 || jqXHR.status === 406) {
        controller.set("errorMsg", jqXHR.responseJSON['error']);

      } else {
        controller.set("errorMsg", "Sorry there was an error with loggin you in. Please try again later");
        console.log("Login Error - jqXHR: ", jqXHR);
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
      var jqXHR = result.jqXHR;
      console.assert(false, "Logout Error - status: ", jqXHR.status, " error: ", jqXHR.responseJSON['error']);
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