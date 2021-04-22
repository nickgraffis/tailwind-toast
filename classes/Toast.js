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

class Toast {
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
    this.positionY = positionY;
    this.positionX = positionX;
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

  show() {
    this.shape = this.shape === "pill" ? "rounded-full" : "rounded";
    let wrapper = document.createElement("DIV");
    wrapper.classList = `z-50 fixed ease-in-out transform duration-${this.speed} -${this.positionY}-24 flex justify-${this.positionX} w-full`;
    wrapper.innerHTML = `<div class="twthis mx-4 text-${this.fontColor}-${this.fontTone} px-6 py-4 border-0 ${this.shape} relative mb-4 bg-${this.color}-${this.tone}">
      <span class="text-xl inline-block mr-5 align-middle">
        <i class="${this.icon}"></i>
      </span>
      <span class="inline-block align-middle mr-8">
        <b class="title">${this.title}</b> ${this.message}
      </span>
    </div>`;

    this.id = `tawilwind-toast-${
      numbers[Math.floor(Math.random() * Math.floor(11))]
    }`;
    wrapper.id = this.id;
    document.body.prepend(wrapper);
    let toast = document.querySelector("#" + this.id);
    setTimeout(() => {
      toast.classList.add(
        `${this.positionY === "top" ? "translate-y-36" : "-translate-y-36"}`
      );
    }, 1);
    setTimeout(() => {
      let toast = document.querySelector("#" + this.id);
      toast.classList.remove(
        `${this.positionY === "top" ? "-translate-y-36" : "translate-y-36"}`
      );
      toast.classList.add(
        `${this.positionY === "top" ? "translate-y-36" : "-translate-y-36"}`
      );
    }, this.duration);
    setTimeout(() => {
      toast.remove();
    }, this.duration + this.speed + 100);
  }
}

module.exports = Toast;
