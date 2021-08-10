class Mommifier {
  constructor(str) {
    this.str = str;
  }

  getResult() {
    if (/^[^aeiou]*$/.test(this.str)) {
      return this.str;
    }
    return 'mommy';
  }
}

export default Mommifier;