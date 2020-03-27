/* eslint-disable */
const dancers = [];

function handleClickDancerButton() {
  let lineupDiv = document.querySelector('.lineup');
  // let dancer = new BlinkyDancerClass(
  //   document.body.clientHeight * Math.random() * 0.8,
  //   document.body.clientWidth * Math.random() * 0.8,
  //   Math.random() * 1000
  // );

  let dancer2 = new BlinkyDancerClass2(
    document.body.clientHeight * Math.random() * 0.8,
    document.body.clientWidth * Math.random() * 0.8,
    Math.random() * 1000
  );

  let rectangluar = new Rectangluar(
    document.body.clientHeight * Math.random() * 0.8,
    document.body.clientWidth * Math.random() * 0.8,
    Math.random() * 1000
  );
  dancers.push(dancer2, rectangluar);
  // lineupDiv.appendChild(dancer.$node);
  lineupDiv.appendChild(dancer2.$node);
  lineupDiv.appendChild(rectangluar.$node);

  function updateTransition() {
    var el = document.querySelector('span.dancer');

    if (el) {
      el.className = 'dancer2';
    } else {
      el = document.querySelector('.dancer2');
      el.className = 'dancer';
    }

    return el;
  }

  var intervalID = window.setInterval(updateTransition, 1000);
}
function lineUp() {
  for (let i = 0; i < dancers.length; i++) {
    dancers[i].$node.style.top = '';
    dancers[i].$node.style.left = i * 10 + '';
  }
  // dancers[0].$node.parentNode.style.display = 'flex';
  // dancers[0].$node.parentNode.style.justifyContent = 'center';
  // dancers[0].$node.parentNode.style.alignItems = 'center';
}

window.addEventListener('DOMContentLoaded', () => {
  const elAddDancerButton = document.querySelector('.lineupButton');
  elAddDancerButton.addEventListener('click', lineUp);
});

window.addEventListener('DOMContentLoaded', () => {
  const elAddDancerButton = document.querySelector('.addDancerButton');
  elAddDancerButton.addEventListener('click', handleClickDancerButton);
});
