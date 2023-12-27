const config = import('./twtoast.config');
import {Toast} from "./classes/Toast";
import {Snackbar} from "./classes/Snackbar";


  const toast = () => {
    return new Toast(
      config.color ? config.color : "bg-blue-500",
      config.icon ? config.icon : "fas fa-bell",
      config.duration ? config.duration : 3000,
      config.positionX ? config.positionX : "center",
      config.positionY ? config.positionY : "top",
      config.fontColor ? config.fontColor : "grey",
      config.fontTone ? config.fontTone : 100,
      config.shape ? config.shape : "square",
      config.speed ? config.speed : 500
    );
  };

  const snackbar = () => {
    return new Snackbar(
      config.color ? config.color : "bg-blue-500",
      config.icon ? config.icon : "fas fa-bell",
      config.duration ? config.duration : 3000,
      config.positionX ? config.positionX : "center",
      config.positionY ? config.positionY : "top",
      config.fontColor ? config.fontColor : "grey",
      config.fontTone ? config.fontTone : 100,
      config.shape ? config.shape : "square",
      config.speed ? config.speed : 500
    );
  };


export {toast, snackbar}
