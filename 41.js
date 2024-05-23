this.costumes = [
      new Costume("41", "./_41/costumes/41.png", { x: 121, y: 121 }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(250, -17);
    yield* this.wait(26);
    this.visible = true;
    yield* this.glide(6, -250, -17);
    this.visible = false;
    return;
  }
}
