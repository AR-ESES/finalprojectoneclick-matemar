this.costumes = [
      new Costume(
        "30 - resultado",
        "./_30Resultado/costumes/30 - resultado.png",
        { x: 122, y: 121 }
      ),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.Botão_inicia_linhas, this.whenBotão_inicia_linhasClicked),
    ];
  }

  *whenBotão_inicia_linhasClicked() {
    this.visible = false;
    this.goto(235, -44);
    yield* this.wait(8);
    this.visible = true;
    yield* this.glide(6, -235, -44);
    this.visible = false;
    return;
  }
}
