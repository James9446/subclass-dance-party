var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinkyDancer');

};
MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.oldStep = MakeDancer.prototype.step;

MakeBlinkyDancer.prototype.step = function() {
  console.log('old step:', this.oldStep);
  this.oldStep();
  this.$node.toggle();
};