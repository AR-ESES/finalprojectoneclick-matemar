this.costumes = [
      new Costume("Fundo 1", "./Fundo3/costumes/Fundo 1.png", {
        x: 480,
        y: 359,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.Botão_inicia_linhas, this.whenBotão_inicia_linhasClicked),
    ];
  }

  *whenBotão_inicia_linhasClicked() {
    this.y = 0;
    while (true) {
      this.x = this.toNumber(this.stage.vars.scroll) + 480 * 2;
      yield;
    }
  }
}
