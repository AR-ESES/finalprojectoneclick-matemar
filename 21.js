this.costumes = [
      new Costume("21 resultado", "./_21Resultado/costumes/21 resultado.png", {
        x: 121,
        y: 121,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.Botão_Inicio_linhas, this.whenBotão_Inicio_linhasClicked),
    ];
  }

  *whenBotão_Inicio_linhasClicked() {
    this.visible = false;
    this.goto(250, -30);
    yield* this.wait(2);
    this.visible = true;
    yield* this.glide(6, -250, -24);
    this.visible = false;
    return;
  }
}
