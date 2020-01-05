class Golfer {
  constructor(golfer) {
    this.name = golfer.name;
    this.handicap = golfer.handicap;
    this.frustration = 0;
    this.confidence = 0;
  }
  calculateAvg() {
    var avg = 72 + this.handicap;
    return `I usually shoot a ${avg} on average.`
  }
  playRound(course) {
    if (course.difficulty === "hard") {
      this.frustration = 500;
    } else {
      this.frustration = 100;
    }
  }
  hitTheRange() {
    this.confidence += 10;
  }
  marvel(course) {
    return `I love the ${course.features[0]} and ${course.features[1]} on this course!`;
  }
  whatYaShoot(number) {
    if (number < 0) {
      this.frustration = 0;
      return 'I AM THE GREATEST GOLFER ALIVE!';
    } else if (number === 0) {
      this.frustration -= 10;
      return 'Booyah!';
    } else {
      this.frustration += 20;
      return 'Doh!';
    }
  }
}

module.exports = Golfer;
