this.costumes = [
      new Costume("23", "./_23/costumes/23.png", { x: 121, y: 121 }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.Botão_inicio_linhas, this.whenBotão_inicio_linhasClicked),
    ];
  }

  *whenBotão_inicio_linhasClicked() {
    this.visible = false;
    this.goto(240, 55);
    yield* this.wait(2.2);
    this.visible = true;
    yield* this.glide(6, -240, 55);
    this.visible = false;
    return;
  }
}
