/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Cenário 1", "./Stage/costumes/Cenário 1.svg", {
        x: 240,
        y: 180,
      }),
    ];

    this.sounds = [new Sound("Pop!", "./Stage/sounds/Pop!.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
    ];

    this.vars.scroll = -1093;
    this.vars.resultado = 0;
  }

  *whenGreenFlagClicked() {
    this.vars.scroll = 0;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.vars.scroll--;
      yield;
    }
  }
}
