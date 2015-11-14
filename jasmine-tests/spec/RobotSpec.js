describe("Robot", function(){
  var robot;

  beforeEach(function() {
    robot = new Robot("images/robot_default.png", "Yes, Lord Mark, Overlord of all Objects!");
  });

  it("should have a container with class = 'minion'", function() {
    expect(robot.container.className).toEqual("minion");
  });

  it("should have a salutation attribute", function(){
    expect(robot.salutation).toEqual("Yes, Lord Mark, Overlord of all Objects!");
  });

  it("should have a salute button", function(){
    expect(robot.saluteButton).not.toBe(undefined);
  });

  it("should have an imageContainer with src", function(){
    expect(robot.imageContainer.src).not.toBe(undefined);
  });

  it("should be able to salute", function(){
    expect(robot.salute).not.toBe(undefined);
  });

});
