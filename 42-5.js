this.costumes = [
      new Costume("15+6", "./_156/costumes/15+6.png", { x: 421, y: 162 }),
      new Costume("22+8", "./_156/costumes/22+8.png", { x: 421, y: 162 }),
      new Costume("28+12", "./_156/costumes/28+12.png", { x: 421, y: 162 }),
      new Costume("35-4", "./_156/costumes/35-4.png", { x: 420, y: 163 }),
      new Costume("42-5", "./_156/costumes/42-5.png", { x: 421, y: 163 }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.Botão_Inicio_linhas, this.whenBotão_Inicio_linhasClicked),
    ];
  }

  *whenBotão_Inicio_linhasClicked() {
    this.costume = "15+6";
    this.goto(-13, 156);
    this.visible = false;
    yield* this.wait(1);
    this.visible = true;
    yield* this.glide(1, -13, 110);
    yield* this.wait(6);
    this.costume = "22+8";
    yield* this.wait(6);
    this.costume = "28+12";
    yield* this.wait(6);
    this.costume = "35-4";
    yield* this.wait(6);
    this.costume = "42-5";
    yield* this.wait(6);
    yield* this.glide(1, -13, 156);
    this.visible = false;
  }
}
