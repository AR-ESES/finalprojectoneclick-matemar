 this.costumes = [
      new Costume("Cenário 1", "./Stage/costumes/Cenário 1.svg", {
        x: 240,
        y: 180,
      }),
    ];

    this.sounds = [new Sound("Pop!", "./Stage/sounds/Pop!.wav")];

    this.triggers = [
      new Trigger(Trigger.Botão_inicio_Linhas, this.whenBotão_inicio_LinhasClicked),
      new Trigger(Trigger.Botão_inicio_Linhas, this.whenBotão_inicio_LinhasClicked2),
    ];

    this.vars.scroll = -1093;
    this.vars.resultado = 0;
  }

  *whenBotãoInicialLinhaClicked() {
    this.vars.scroll = 0;
  }

  *whenBotãoInicialLinhaClicked2() {
    while (true) {
      this.vars.scroll--;
      yield;
    }
  }
}
