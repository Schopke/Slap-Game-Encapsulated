import Player from "../models/Player.js";

let _player = new Player("robert", 100, 0)

let modifiers = {
  vitamins: { name: 'Vitamins', modifier: 2, description: 'adds health' },
  shield: { name: 'Shield', modifier: 1, description: 'Defends Against the Dark Arts' },
  potion: { name: 'Potion', modifier: -2, description: 'Makes you sicker' }
}

function addMods() {
  let modifierTotal = 0
  for (let i = 0; i < _player.items.length; i++) {
    let item = _player.items[i]
    modifierTotal += item.modifier
  }
  return modifierTotal
}




export default class GameService {



  get Player() {
    return new Player(_player.name, _player.health, _player.hits)
  }

  reset() {
    _player.health = 100
    document.getElementById("health").innerText = _player.health.toString()
    _player.hits = 0
    document.getElementById("hits").innerText = _player.hits.toString()
    _player.items = []
    document.getElementById('slap').disabled = false;
    document.getElementById('punch').disabled = false;
    document.getElementById('kick').disabled = false;
  }
  slap() {
    let mod = addMods()
    _player.health -= 1 - mod
    _player.hits++
    _player.items = []
  }
  kick() {
    let mod = addMods()
    _player.health -= 10 - mod
    _player.hits++
    _player.items = []
  }
  punch() {
    let mod = addMods()
    _player.health -= 5 - mod
    _player.hits++
    _player.items = []
  }
  givePotion() {
    _player.items.push(modifiers.potion)
  }
  engageShield() {
    _player.items.push(modifiers.shield)
  }
  giveVitamins() {
    _player.items.push(modifiers.vitamins)
  }

  constructor() {
  }
}