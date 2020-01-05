class GolfCourse {
  constructor(name, difficulty, openings, features) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = [];
  }
  checkInGroup(group) {
    if (this.openings >= group.length) {
      for (var i = 0; i < group.length; i++) {
        var player = group[i].name;
        this.currentlyPlaying.unshift(player);
        this.openings -= 1;
      }
    }
  }
  recommendTees(golfer) {
    if (golfer.handicap < 11) {
      return 'You should play from the Difficult Tees.'
    } else if (golfer.handicap < 15) {
      return 'You should play from the Middle Tees.'
    } else {
      return 'You should play from the Forward Tees.'
    }
  }
}

module.exports = GolfCourse;
