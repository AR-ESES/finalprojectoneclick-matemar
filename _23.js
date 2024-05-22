/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _23 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("23", "./_23/costumes/23.png", { x: 121, y: 121 }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(240, 55);
    yield* this.wait(2.2);
    this.visible = true;
    yield* this.glide(6, -240, 55);
    this.visible = false;
    return;
  }
}
