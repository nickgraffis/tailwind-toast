import options from "../utils/options.json";

export class Snackbar {
  constructor(
    color,
    icon,
    duration,
    positionX,
    positionY,
    fontColor,
    fontTone,
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
    this.color = "bg-red-200";
    this.fontColor = "gray";
    this.icon = "fas fa-hand-paper";
    return this;
  }

  success(title, message) {
    this.title = title;
    this.message = message;
    this.color = "bg-green-200";
    this.fontColor = "gray";
    this.icon = "fas fa-check";
    return this;
  }

  warning(title, message) {
    this.title = title;
    this.message = message;
    this.color = "bg-yellow-200";
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
    wrapper.classList = `z-10 fixed ease-in-out transform duration-${this.speed} -${this.positionY}-24 flex justify-${this.positionX} w-full`;
    wrapper.innerHTML = `<div class="twsnackbar mx-4 text-${this.fontColor}-${this.fontTone} px-6 py-4 border-0 ${this.shape} relative mb-4 ${this.color} flex items-center justify-center">
              <span class="text-xl inline-block mr-5">
                <i class="${this.icon}"></i>
              </span>
              <span class="inline-block mr-8">
                <b class="title">${this.title}</b> ${this.message}
              </span>
              <div id="buttons" class="flex justify-center items-center">
              </div>
            </div>`;
      let randomNumber = Math.floor(Math.random() * Date.now());
    this.id = `tawilwind-snackbar-` + randomNumber;
    wrapper.id = this.id;
    let buttonWrapper = wrapper
      .querySelector(".twsnackbar")
      .querySelector("#buttons");
    this.buttons.forEach((button) => {
      let newButton = document.createElement("DIV");
      newButton.classList = `cursor-pointer p-2 rounded flex justify-center items-center`;
      newButton.innerHTML = `<b class="uppercase"> ${Object.keys(button)[0]
        }</b>`;
      newButton.onclick = Object.values(button)[0];
      buttonWrapper.append(newButton);
    });
    document.body.prepend(wrapper);
    let snackbar = document.querySelector("#" + this.id);
    console.log(snackbar);
    setTimeout(() => {
      document
        .querySelector("#" + this.id)
        .classList.add(
          `${this.positionY === "top" ? "translate-y-36" : "-translate-y-36"}`
        );
    }, 1);
    setTimeout(() => {
      let snackbar = document.querySelector("#" + this.id);
      snackbar.classList.remove(
        `${this.positionY === "top" ? "-translate-y-36" : "translate-y-36"}`
      );
      snackbar.classList.add(
        `${this.positionY === "top" ? "translate-y-36" : "-translate-y-36"}`
      );
    }, this.duration);
    setTimeout(() => {
      snackbar.remove();
    }, this.duration + this.speed + 100);
  }
}
