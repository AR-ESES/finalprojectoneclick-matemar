this.costumes = [
      new Costume("38", "./_38/costumes/38.png", { x: 121, y: 121 }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.Botão_inicia_linhas, this.whenBotão_inicia_linhasClicked),
    ];
  }

  *whenBotão_inicia_linhasClicked() {
    this.visible = false;
    this.goto(240, -35);
    yield* this.wait(20);
    this.visible = true;
    yield* this.glide(5.8, -240, -35);
    this.visible = false;
    return;
  }
}
