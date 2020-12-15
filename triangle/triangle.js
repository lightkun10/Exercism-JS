//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// https://en.wikipedia.org/wiki/Triangle_inequality

export class Triangle {
  constructor(x, y, z) {
    [this.x, this.y, this.z] = [x, y, z].sort();
  }

  isEquilateral() {
    if (this.x === 0 && this.y === 0 && this.z === 0) return false;
    return this.x === this.y && this.x === this.z;
  }

  isIsosceles() {
    if (this.x + this.y <= this.z) {
      return false;
    }
    return this.x === this.y || this.y === this.z;
  }

  isScalene() {
    if (this.x + this.y <= this.z) {
      return false;
    }
    return this.x !== this.y && this.x !== this.z && this.y !== this.z;
  }
}
