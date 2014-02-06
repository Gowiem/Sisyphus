Sis.GroupMemberNameView = Ember.View.extend({
  mouseEnter: function() {
    this.get('controller').send('hoveringMemberOn');
  },
  mouseLeave: function() {
    this.get('controller').send('hoveringMemberOff');
  },
});