describe("RobotArmy", function(){
  var robotArmy;

  beforeEach(function(){
    var salutes = ["Eye eye Captain", "Yes Master", "As you command, Sir", "As you wish Master", "At your service", "Yes Overlord of all Objects!"],
        randomSalute = Math.floor(Math.random() * salutes.length),
        image = "images/robot_default.png",
        minion = new Robot(image, salutes[randomSalute])
  });

  // create robot
  describe("#spawnRobot", function(){

  });

  // delete all
  describe("#dismisBrigade", function(){

  });

});
