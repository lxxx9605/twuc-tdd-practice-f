class Mommifier {
  constructor(str) {
    this.str = str;
  }

  getResult() {
    if (/^[^aeiou]*$/.test(this.str)) {
      return this.str;
    }
    if (this.str.replace(/[aeiou]/g, '').length > 0.7 * this.str.length) {
      return this.str;
    }
    return 'mommy';
  }
}

export default Mommifier;