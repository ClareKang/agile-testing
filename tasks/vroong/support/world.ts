import { setWorldConstructor } from "cucumber";

export default class World {
  public token: any;

  constructor() {
    this.token = null;
  }
}

setWorldConstructor(World);
