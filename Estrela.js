/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Estrela extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ESTRELA", "./Estrela/costumes/ESTRELA.png", {
        x: 360,
        y: 360,
      }),
    ];

    this.sounds = [
      new Sound("SOM ERRO", "./Estrela/sounds/SOM ERRO.wav"),
      new Sound("SOMCERTO", "./Estrela/sounds/SOMCERTO.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.resultado = 0;
    this.goto(-188, 130);
    this.moveAhead();
    while (true) {
      this.y -= 10;
      if (this.keyPressed("space")) {
        this.y += 15;
      }
      this.ifOnEdgeBounce();
      if (this.touching(this.sprites["_21Resultado"].andClones())) {
        yield* this.startSound("SOMCERTO");
      }
      if (this.touching(this.sprites["_30Resultado"].andClones())) {
        yield* this.startSound("SOMCERTO");
      }
      if (this.touching(this.sprites["_40Resultado"].andClones())) {
        yield* this.startSound("SOMCERTO");
      }
      if (this.touching(this.sprites["_31Resultado"].andClones())) {
        yield* this.startSound("SOMCERTO");
      }
      if (this.touching(this.sprites["_37Resultado"].andClones())) {
        yield* this.startSound("SOMCERTO");
      }
      if (this.touching(this.sprites["_23"].andClones())) {
        yield* this.startSound("SOM ERRO");
      }
      if (this.touching(this.sprites["_27"].andClones())) {
        yield* this.startSound("SOM ERRO");
      }
      if (this.touching(this.sprites["_39"].andClones())) {
        yield* this.startSound("SOM ERRO");
      }
      if (this.touching(this.sprites["_38"].andClones())) {
        yield* this.startSound("SOM ERRO");
      }
      if (this.touching(this.sprites["_41"].andClones())) {
        yield* this.startSound("SOM ERRO");
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    yield* this.wait(34);
    yield* this.glide(2, -57, 32);
    /* TODO: Implement stop all */ null;
  }
}
