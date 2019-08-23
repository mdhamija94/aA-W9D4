const FollowToggle = require("./follow_toggle.js")

$( () => {
  // $("button.follow-toggle").each( (_idx, domEl) => {
  //   new FollowToggle(domEl);
  // });
  let el = $(".follow-toggle");
  let $followToggle = new FollowToggle(el);
});