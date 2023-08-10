import options from "../utils/options.json";

export class Toast {
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

    show() {

        if (!document.getElementById('toasters-container')) {
            let container_wrapper = document.createElement("DIV");
            container_wrapper.id = 'toasters-wrapper';
            container_wrapper.classList = `z-50 fixed ease-in-out transform duration-${this.speed} -${this.positionY}-24 flex justify-${this.positionX} w-full`;
            container_wrapper.innerHTML = '<div id="toasters-container"></div>';
            document.body.prepend(container_wrapper);
        }
        let randomNumber = Math.floor(Math.random() * Date.now());
        this.id = `tawilwind-toast-` + randomNumber;
        this.shape = this.shape === "pill" ? "rounded-full" : "rounded";
        document.getElementById('toasters-container').insertAdjacentHTML('afterbegin', `<div id="${this.id}" onclick="document.querySelector('#'+ this.id).remove()" class="twthis mx-4 text-${this.fontColor}-${this.fontTone} px-6 py-4 border-0 cursor-pointer ${this.shape} relative mb-4 ${this.color}">
      <span class="text-xl inline-block mr-5 align-middle">
        <i class="${this.icon}"></i>
      </span>
      <span class="inline-block align-middle mr-8">
        <b class="title">${this.title}</b> ${this.message}
      </span>
    </div>`);
        setTimeout(() => {
            let toast = document.getElementById('toasters-wrapper');
            toast.classList.add(
                `${this.positionY === "top" ? "translate-y-36" : "-translate-y-36"}`
            );
        }, 1);
        setTimeout(() => {
            let toast = document.getElementById('toasters-wrapper');
            toast.classList.remove(
                `${this.positionY === "top" ? "-translate-y-36" : "translate-y-36"}`
            );
            toast.classList.add(
                `${this.positionY === "top" ? "translate-y-36" : "-translate-y-36"}`
            );
        }, this.duration);
        setTimeout(() => {
            let toast = document.querySelector("#" + this.id);
            toast.remove();
        }, this.duration + this.speed + 100);
    }
}
