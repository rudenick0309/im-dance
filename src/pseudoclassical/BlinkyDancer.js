if (typeof window === "undefined") {
  var Dancer = require("./Dancer");
} // you don't have to worry about this code. this is for testing.

// blinkyDancer를 pseudoclassical한 방식으로 리팩토링하세요
// 참고로, constructor는 대문자로 이름을 시작하는 것이 관례입니다
function BlinkyDancer() {
  // your code here
  Dancer.apply(this, arguments);
  // console.log("블링키 생성자");
}

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.consturctor = BlinkyDancer;
BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.bind(this)();
  let style = this.$node.style;
  style.display = style.display === "none" ? "inline-block" : "none";
};

//console.log(BlinkyDancer.setPosition(7, 10));
// let testDancer = new BlinkyDancer();
// console.log(testDancer.setPosition(7, 10));

// you don't have to worry about this code. this is for testing.
if (typeof window === "undefined") {
  module.exports = BlinkyDancer;
}
