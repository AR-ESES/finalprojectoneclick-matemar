this.costumes = [
      new Costume("Bolha final", "./BolhaFinal/costumes/Bolha final.png", {
        x: 472.5,
        y: 182.5,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.Botão_inicia_linhas, this.whenBotão_inicia_linhasClicked),
    ];
  }

  *whenBotão_inicia_linhasClicked() {
    this.visible = false;
    this.goto(260, 28);
    yield* this.wait(32);
    this.visible = true;
    yield* this.glide(1, 7, 28);
  }
}
