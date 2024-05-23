this.costumes = [
      new Costume("ESTRELA", "./Estrela/costumes/ESTRELA.png", {
        x: 360,
        y: 360,
      }),
    ];

    this.sounds = [
      new Sound("SOM ERRO", "./Estrela/sounds/SOM ERRO.wav"),
      new Sound("SOMCERTO", "./Estrela/sounds/SOMCERTO.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.BotãoInicioLinhas, this.whenBotãoInicioLinhasClicked),
      new Trigger(Trigger.BotãoInicioLinhas, this.whenBotãoInicioLinhasClicked2),
    ];
  }

  *whenBotãoInicioLinhasClicked() {
    this.stage.vars.resultado = 0;
    this.goto(-188, 130);
    this.moveAhead();
    while (true) {
      this.y -= 10;
      if (this.keyPressed("space")) {
        this.y += 15;
      }
      this.ifOnEdgeBounce();
      if (this.touching(this.sprites["_21Resultado"].andClones())) {
        yield* this.startSound("SOMCERTO");
      }
      if (this.touching(this.sprites["_30Resultado"].andClones())) {
        yield* this.startSound("SOMCERTO");
      }
      if (this.touching(this.sprites["_40Resultado"].andClones())) {
        yield* this.startSound("SOMCERTO");
      }
      if (this.touching(this.sprites["_31Resultado"].andClones())) {
        yield* this.startSound("SOMCERTO");
      }
      if (this.touching(this.sprites["_37Resultado"].andClones())) {
        yield* this.startSound("SOMCERTO");
      }
      if (this.touching(this.sprites["_23"].andClones())) {
        yield* this.startSound("SOM ERRO");
      }
      if (this.touching(this.sprites["_27"].andClones())) {
        yield* this.startSound("SOM ERRO");
      }
      if (this.touching(this.sprites["_39"].andClones())) {
        yield* this.startSound("SOM ERRO");
      }
      if (this.touching(this.sprites["_38"].andClones())) {
        yield* this.startSound("SOM ERRO");
      }
      if (this.touching(this.sprites["_41"].andClones())) {
        yield* this.startSound("SOM ERRO");
      }
      yield;
    }
  }
