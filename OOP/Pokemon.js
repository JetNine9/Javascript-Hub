export class Pokemon {

  constructor(name, type, fainted, move) {
    this.name = name;
    this.type = type;
    this.fainted = fainted;
    this.move = move;
  }

  summon() {
      console.log(" I choose you " + this.name)
  }

  attack() {
    console.log(this.name + " uses " + this.move)
  }

  getName() {
      console.log(this.name);
  }

  knockedOut() {
      this.fainted = true;
  }

}

export default Pokemon;
