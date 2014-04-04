Sis.NewsFeedController = Ember.ArrayController.extend({
  sortProperties: ["createdAt"],
  sortAscending: false,

  noHistoryItems: function() {
    return this.get('content.length') <= 0;
  }.property('content.length')
});