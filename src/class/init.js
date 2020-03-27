/* eslint-disable */
const dancers = [];

function handleClickDancerButton() {
  /* makeBlinkyDancer is the dancer maker functions available in global scope.
   * A new object of the given type will be created and added
   * to the stage.
   */

  // make a dancer with a random position
  //
  // TODO:
  let dancer = new BlinkyDancerClass(
    document.body.clientHeight * Math.random(),
    document.body.clientWidth * Math.random(),
    Math.random() * 1000
  );

  let dancer2 = new BlinkyDancerClass2(
    document.body.clientHeight * Math.random(),
    document.body.clientWidth * Math.random(),
    Math.random() * 1000
  );

  document.body.appendChild(dancer.$node);
  document.body.appendChild(dancer2.$node);

  function updateTransition() {
    var el = document.querySelector("span.dancer");

    if (el) {
      el.className = "dancer2";
    } else {
      el = document.querySelector(".dancer2");
      el.className = "dancer";
    }

    return el;
  }

  var intervalID = window.setInterval(updateTransition, 1000);
}

window.addEventListener("DOMContentLoaded", () => {
  const elAddDancerButton = document.querySelector(".addDancerButton");
  elAddDancerButton.addEventListener("click", handleClickDancerButton);
});
