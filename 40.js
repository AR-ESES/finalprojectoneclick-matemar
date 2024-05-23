this.costumes = [
      new Costume(
        "40 - resultado",
        "./_40Resultado/costumes/40 - resultado.png",
        { x: 121, y: 121 }
      ),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.Botão_Inicio_linhas, this.whenBotão_Inicio_linhasClicked),
    ];
  }

  *whenBotão_Inicio_linhasClicked() {
    this.visible = false;
    this.goto(230, 51);
    yield* this.wait(14);
    this.visible = true;
    yield* this.glide(6, -230, 51);
    this.visible = false;
    return;
  }
}
