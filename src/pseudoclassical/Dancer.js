if (typeof window === "undefined") {
  var jsdom = require("jsdom");
  var { JSDOM } = jsdom;
  var { document } = new JSDOM("").window;
} // you don't have to worry about this code. this is for testing.

// blinkyDancer를 pseudoclassical한 방식으로 리팩토링하세요
// 참고로, constructor는 대문자로 이름을 시작하는 것이 관례입니다

function Dancer(top, left, timeBetweenSteps) {
  // this.dancer={};
  const createDancerElement = () => {
    let elDancer = document.createElement("span");
    elDancer.className = "dancer";
    return elDancer;
  };

  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = createDancerElement();

  // this.step();
  this.step();
  Dancer.prototype.setPosition.bind(this)(top, left);
}

Dancer.prototype.step = function() {
  // console.log("Dancer step");
  setTimeout(this.step, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  // console.log("Dancer setPosition");
  Object.assign(this.$node.style, {
    top: `${top}px`,
    left: `${left}px`
  });
};

if (typeof window === "undefined") {
  module.exports = Dancer;
}
