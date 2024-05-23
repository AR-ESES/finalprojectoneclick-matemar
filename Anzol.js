this.costumes = [
      new Costume("anzol", "./Anzol/costumes/anzol.png", { x: 480, y: 269.5 }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.BotãoInicioLinhas, this.whenBotãoInicioLinhasClicked),
    ];
  }

  *whenBotãoInicioLinhasClicked() {
    this.goto(15, 187);
    this.visible = false;
    yield* this.wait(1);
    this.visible = true;
    yield* this.glide(1, 12, 149);
    yield* this.wait(30);
    yield* this.glide(1, 15, 190);
    this.visible = false;
  }
}
