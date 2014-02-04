Sis.ProgressBarSectionController = Sis.GroupMemberController.extend({
  needs: ['project'],
  init: function() {
    var progressBarClass = '.' + this.get('progressBarClass'),
        barInfoClass = '.group-member-bar-info' + progressBarClass;
    $('body').delegate(progressBarClass, 'mouseenter', function() {
      console.log("mouseEnter");
      $(barInfoClass).show();
    });
    $('body').delegate(progressBarClass, 'mouseleave', function() {
      console.log("mouseLeave");
      $(barInfoClass).hide();
    });
  },
  // Get the progressBarSection style for this user. Uses GroupMemberControllers
  // getProgressBarStlye to get the original size and then shrinks it down depending
  // on the number of other users in the group.
  progressBarSectionStyle: function() {
    var progressBarStyle = this.get('progressBarStyle'),
        groupMemberCount = this.get('controllers.project.model.students.length'),
        progressBarMatch = /(\d+)/.exec(progressBarStyle),
        progressBarPercent;

    // If exec found a match then we have a percentage.
    if (progressBarMatch) {
      // exec gives us our digit back as a string, convert to int and shrink it
      // so it's 1/number of group members.
      progressBarPercent = progressBarMatch[0];
      progressBarPercent = parseInt(progressBarPercent) * (1 / groupMemberCount);
    } else {
      progressBarPercent = 0;
    }

    return "width:" + progressBarPercent + "%;";
  }.property('progressBarStyle')
});