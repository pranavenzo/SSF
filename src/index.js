import FootballPlayer from "./FootballPlayer";
import Atttributes from "./Attributes";
import FootballPlayerStats from "./FootballPlayerStats";
import FootballPlayerPosition from "./FootballPlayerPosition";
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, 800, 600);
ctx.fillStyle = "#f00";
let f = new FootballPlayer(
  "Messi",
  1,
  new Atttributes(90, 95, 72, 88, 97, 56, 2),
  new FootballPlayerPosition(20, 20),
  new FootballPlayerStats()
);
ctx.fillRect(f.position.x, f.position.y, 100, 100);
