this.costumes = [
      new Costume(
        "31  resultado",
        "./_31Resultado/costumes/31  resultado.png",
        { x: 121, y: 121 }
      ),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.Botão_inicia_linhas, this.whenBotão_inicia_linhasClicked),
    ];
  }

  *whenBotão_inicia_linhasClicked() {
    this.visible = false;
    this.goto(221, 54);
    yield* this.wait(20);
    this.visible = true;
    yield* this.glide(6.2, -221, 54);
    this.visible = false;
    return;
  }
}
