import GameController from "./components/gameControllers.js";


class App {
  constructor() {
    this.controllers = {
      gameController: new GameController
    }
  }
}


window['app'] = new App