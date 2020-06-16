export default class FootballPlayer {
  constructor(name, id, attributes, stats, position) {
    this.name = name;
    this.id = id;
    // Attributes include pace/dribbling/tackling etc.
    this.attributes = attributes;
    // coordinates on the canvas
    this.position = position;
    // Include stats like goals scored, assists,
    // passes completed, shots on target, dribbles, distance run etc.
    this.stats = stats;
  }
}
