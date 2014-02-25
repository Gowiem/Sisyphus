Sis.UserLoginController = Ember.ObjectController.extend({
  shouldRemember: undefined,
  errorMsg: null,
  
  // So.. it's been a bit since I've written any ember and this seems uglier
  // than I would have originally though. The following three functions allow
  // the login form to remember the users email depending on if they check
  // 'Remember me' or not. 
  // This can probably be cleaned up once my heads on straight.
  rememberMe: function(key, value) {
    var shouldRemember = this.get('shouldRemember'),
        emailCookie = $.cookie(Sis.cookies.email), 
        value = value === undefined ? !!emailCookie : value;
    if (value) {
      this.set('shouldRemember', true);
      return true;
    } else {
      this.set('shouldRemember', false);
      return false;
    }
  }.property(),
  updateEmailCookie: function() {
    if (this.get('shouldRemember')) {
      $.cookie(Sis.cookies.email, this.get('model.email'));
    } else {
      $.removeCookie(Sis.cookies.email);
      this.set('shouldRemember', undefined);
    }
  },
  rememberedEmail: function(key, value) {
    var modelEmail = this.get('model.email'),
        cookieEmail = $.cookie(Sis.cookies.email);
    if (value) {
      this.set('model.email', value);
    } else {
      if (modelEmail) {
        return modelEmail;
      } else if (cookieEmail) {
        this.set('model.email', cookieEmail);
        return cookieEmail;
      }
    }
  }.property('model.email')
});