function Robot(image, salutation){
  this.container = document.createElement("div");
  this.container.className = "minion";
  this.imageContainer = document.createElement("img");
  this.imageContainer.src = image;
  this.salutation = salutation;
  this.saluteButton = document.createElement("button");
  this.saluteButton.innerText = "Salute!"
  this.saluteButton.addEventListener("click", this.salute.bind(this), false);
  this.container.appendChild(this.saluteButton);
  this.container.appendChild(this.imageContainer);
}

Robot.prototype.salute = function(){
  alert(this.salutation);
};
