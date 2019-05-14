import GameService from "./gameServices.js";




let _gameService = new GameService()


function update() {
  let player = _gameService.Player
  if (player.health > 100) {
    player.health = 100
  }

  document.getElementById("health").innerText = player.health.toString()
  document.getElementById("playerName").innerText = player.name
  document.getElementById("hits").innerText = player.hits.toString()

  if (player.health <= 0) {
    document.getElementById("health").innerText = "Game Over Player Won"
    document.getElementById('slap').disabled = true;
    document.getElementById('punch').disabled = true;
    document.getElementById('kick').disabled = true;
  }

}



export default class GameController {
  constructor() {
    update()
  }

  slap() {
    _gameService.slap()
    update()
  }

  punch() {
    _gameService.punch()
    update()
  }

  kick() {
    _gameService.kick()
    update()
  }

  giveVitamins() {
    _gameService.giveVitamins()
  }
  engageShield() {
    _gameService.engageShield()
  }
  givePotion() {
    _gameService.givePotion()
  }

  reset() {
    _gameService.reset()
  }
}