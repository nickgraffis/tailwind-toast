const h = require("../utils/helpers");
const options = require("../utils/options.json");
const numbers = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "zero",
  "ten",
  "eleven",
];

class Snackbar {
  constructor(
    color,
    icon,
    duration,
    positionX,
    positionY,
    fontColor,
    fontTone,
    tone,
    shape,
    speed
  ) {
    (this.color = color),
      (this.icon = icon),
      (this.duration = duration),
      (this.positionX = positionX),
      (this.positionY = positionY),
      (this.fontColor = fontColor),
      (this.fontTone = fontTone),
      (this.tone = tone),
      (this.shape = shape),
      (this.speed = speed),
      (this.buttons = []),
      this.html,
      this.id,
      this.title,
      this.message;
  }

  as(shape) {
    this.shape = shape;
    return this;
  }

  for(ms) {
    this.duration = ms;
    return this;
  }

  from(positionY, positionX = this.positionX) {
    this.positionX = positionX;
    this.postionY = positionY;
    return this;
  }

  with(params) {
    Object.keys(params).forEach((p) => {
      let object = params;
      if (options.includes(p)) {
        this[p] = object[p];
      }
    });
    return this;
  }

  default(title, message) {
    this.title = title;
    this.message = message;
    return this;
  }

  danger(title, message) {
    this.title = title;
    this.message = message;
    this.color = "red";
    this.fontColor = "gray";
    this.icon = "fas fa-hand-paper";
    return this;
  }

  success(title, message) {
    this.title = title;
    this.message = message;
    this.color = "green";
    this.fontColor = "gray";
    this.icon = "fas fa-check";
    return this;
  }

  warning(title, message) {
    this.title = title;
    this.message = message;
    this.color = "yellow";
    this.fontColor = "gray";
    this.icon = "fas fa-exclamation-triangle";
    return this;
  }

  addButtons(...buttonObjects) {
    this.buttons = buttonObjects;
    return this;
  }

  hide() {
    let snackbar = document.querySelector("#" + this.id);
    snackbar.classList.remove(
      `${this.positionY === "top" ? "translate-y-36" : "-translate-y-36"}`
    );
    snackbar.classList.add(
      `${this.positionY === "top" ? "-translate-y-36" : "translate-y-36"}`
    );
    setTimeout(() => {
      snackbar.remove();
    }, this.speed + 100);
  }

  show() {
    this.shape = this.shape === "pill" ? "rounded-full" : "rounded";
    let wrapper = document.createElement("DIV");
    wrapper.classList = `absolute ease-in-out transform duration-${this.speed} -${this.positionY}-24 flex justify-${this.positionX} w-full`;
    wrapper.innerHTML = `<div class="twsnackbar mx-4 text-${this.fontColor}-${this.fontTone} px-6 py-4 border-0 ${this.shape} relative mb-4 bg-${this.color}-${this.tone} flex items-center justify-center">
              <span class="text-xl inline-block mr-5">
                <i class="${this.icon}"></i>
              </span>
              <span class="inline-block mr-8">
                <b class="title">${this.title}</b> ${this.message}
              </span>
              <div id="buttons" class="flex justify-center items-center">
              </div>
            </div>`;
    this.id = `tawilwind-snackbar-${
      numbers[Math.floor(Math.random() * Math.floor(11))]
    }`;
    wrapper.id = this.id;
    let buttonWrapper = wrapper
      .querySelector(".twsnackbar")
      .querySelector("#buttons");
    this.buttons.forEach((button) => {
      let newButton = document.createElement("DIV");
      newButton.classList = `cursor-pointer hover:bg-${this.color}-${
        parseInt(this.tone) + 100
      } p-2 rounded flex justify-center items-center`;
      newButton.innerHTML = `<b class="uppercase"> ${
        Object.keys(button)[0]
      }</b>`;
      newButton.onclick = Object.values(button)[0];
      buttonWrapper.append(newButton);
    });
    document.body.prepend(wrapper);
    setTimeout(() => {
      document
        .querySelector("#" + this.id)
        .classList.add(
          `${this.positionY === "top" ? "translate-y-36" : "-translate-y-36"}`
        );
    }, 1);
  }
}

module.exports = Snackbar;
