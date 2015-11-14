function RobotArmy() {
  this.robotBrigade = document.getElementById("robot-brigade");
  document.getElementById('spawn-minion').addEventListener("click", this.spawnRobot.bind(this));
  document.getElementById('dismiss-brigade').addEventListener("click", this.dismisBrigade.bind(this));
}

RobotArmy.prototype.spawnRobot = function(){
  var salutes = ["Eye eye Captain", "Yes Master", "As you command, Sir", "As you wish Master", "At your service", "Yes Overlord of all Objects!"],
      randomSalute = Math.floor(Math.random() * salutes.length),
      image = "images/robot_default.png",
      minion = new Robot(image, salutes[randomSalute]),
      robotBrigade = this.robotBrigade;
      robotBrigade.appendChild(minion.container);
};

RobotArmy.prototype.dismisBrigade = function(){
  var minions = document.getElementsByClassName('minion');
  while(minions.length > 0) {
    minions[0].parentNode.removeChild(minions[0]);
  }
};
