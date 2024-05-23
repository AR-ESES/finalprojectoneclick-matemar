this.costumes = [
      new Costume("39", "./_39/costumes/39.png", { x: 121, y: 121 }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(226, -68);
    yield* this.wait(14);
    this.visible = true;
    yield* this.glide(6, -226, -68);
    this.visible = false;
    return;
  }
}
