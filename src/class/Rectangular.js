/* global DancerClass */
if (typeof window === 'undefined') {
  global.DancerClass = require('./DancerClass');
} // you don't have to worry about this code. this is for testing.

// blinkyDancer를 class 키워드를 써서 ES6 방식으로 리팩토링하세요
// 여기에는 Pseudoclassical에서 정의된 BlinkyDancer와 이름이 겹치므로, BlinkyDancerClass라는 이름을 사용합니다.
class Rectangluar extends DancerClass {
  // your code here

  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    // const createRectangluarElement = () => {
    //   let elDancer = document.createElement('span');
    //   elDancer.className = 'rectangluar';
    //   // elDancer.style.transition = "translateX(120px)";
    //   return elDancer;
    // };
    this.$node.className = 'rectangluar';
  }

  step() {
    super.step();
    let style = this.$node.style;
    style.display = style.display === 'none' ? 'inline-block' : 'none';
  }
}

// you don't have to worry about this code. this is for testing.
if (typeof window === 'undefined') {
  module.exports = Rectangluar;
}
