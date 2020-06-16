export default class FootballPlayerStats {
  constructor() {
    this.goals = 0;
    this.assists = 0;
    this.pass_completion = 0;
    this.tackle_completion = 0;
    this.shots_on_target = 0;
    this.shots_off_target = 0;
    // takes precedence over previous 2
    this.shots_deflected = 0;
    this.header_completion = 0;
    this.distance_travelled = 0;
  }
}
