const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor($el) {
    this.userId = $el.data("user-id");
    this.followState = $el.data("initial-follow-state");
    this.$el = $el;
    this.render();
    this.handleClick();
  }

  render() {
    if (this.followState === "followed") {
      this.$el.text("Unfollow!");
    } else {
      this.$el.text("Follow!");
    }
  }

  handleClick() {
    $(".follow-toggle").on("click", (e) => {
      e.preventDefault();
      const that = this;
      if (this.followState === "unfollowed") {
        // debugger
        APIUtil.followUser(this.userId).then(() => {
          that.followState = "followed";
          that.render();
        });
      } else {
        // debugger
        APIUtil.unfollowUser(this.userId).then(() => {
          that.followState = "unfollowed";
          that.render();
        });
      }
    });
  }
}

module.exports = FollowToggle