 this.costumes = [
      new Costume("27", "./_27/costumes/27.png", { x: 121, y: 121 }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(230, 50);
    yield* this.wait(8.1);
    this.visible = true;
    yield* this.glide(6, -230, 50);
    this.visible = false;
    return;
  }
}
