export default class Atttributes {
  constructor(
    pace,
    dribbling,
    heading,
    high_pass,
    shooting,
    tackling,
    aggression,
    size
  ) {
    this.pace = pace;
    this.dribbling = dribbling;
    this.heading = heading;
    this.high_pass = high_pass;
    this.shooting = shooting;
    this.tackling = tackling;
    // randomly sample a value in [0-aggression] to add to tackling in duels
    // max_value is 20.
    this.aggression = aggression;
    // pixel width of the player
    this.size = size;
  }
}
