import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Fundo1 from "./Fundo1/Fundo1.js";
import Fundo2 from "./Fundo2/Fundo2.js";
import Fundo3 from "./Fundo3/Fundo3.js";
import Fundo4 from "./Fundo4/Fundo4.js";
import Estrela from "./Estrela/Estrela.js";
import _156 from "./_156/_156.js";
import Anzol from "./Anzol/Anzol.js";
import _21Resultado from "./_21Resultado/_21Resultado.js";
import _23 from "./_23/_23.js";
import _27 from "./_27/_27.js";
import _30Resultado from "./_30Resultado/_30Resultado.js";
import _40Resultado from "./_40Resultado/_40Resultado.js";
import _39 from "./_39/_39.js";
import _31Resultado from "./_31Resultado/_31Resultado.js";
import _38 from "./_38/_38.js";
import _37Resultado from "./_37Resultado/_37Resultado.js";
import _41 from "./_41/_41.js";
import BolhaFinal from "./BolhaFinal/BolhaFinal.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Fundo1: new Fundo1({
    x: -465,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2,
  }),
  Fundo2: new Fundo2({
    x: -465,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1,
  }),
  Fundo3: new Fundo3({
    x: -132,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4,
  }),
  Fundo4: new Fundo4({
    x: 348,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3,
  }),
  Estrela: new Estrela({
    x: -57,
    y: 32,
    direction: -78.46304096718453,
    rotationStyle: Sprite.RotationStyle.DONT_ROTATE,
    costumeNumber: 1,
    size: 20,
    visible: true,
    layerOrder: 18,
  }),
  _156: new _156({
    x: -13,
    y: 156,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 5,
    size: 30,
    visible: false,
    layerOrder: 5,
  }),
  Anzol: new Anzol({
    x: 15,
    y: 190,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 6,
  }),
  _21Resultado: new _21Resultado({
    x: -249,
    y: -24,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 7,
  }),
  _23: new _23({
    x: -240,
    y: 55,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 8,
  }),
  _27: new _27({
    x: -230,
    y: 50,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 9,
  }),
  _30Resultado: new _30Resultado({
    x: -235,
    y: -44,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 10,
  }),
  _40Resultado: new _40Resultado({
    x: -230,
    y: 51,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 15,
  }),
  _39: new _39({
    x: -226,
    y: -68,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 14,
  }),
  _31Resultado: new _31Resultado({
    x: -221,
    y: 54,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 11,
  }),
  _38: new _38({
    x: -240,
    y: -35,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 13,
  }),
  _37Resultado: new _37Resultado({
    x: -249,
    y: 57,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 12,
  }),
  _41: new _41({
    x: -249,
    y: -17,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 16,
  }),
  BolhaFinal: new BolhaFinal({
    x: 7,
    y: 28,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: true,
    layerOrder: 17,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
