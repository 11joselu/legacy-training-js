class User {
  constructor(name, biography) {
    this.name = name;
    this.biography = biography;
  }

  getName() {
    return this.name;
  }

  getBiography() {
    return this.biography;
  }

  getScore() {
    const keyWords = [
      'edición',
      'sociedad',
      'mundo',
      'libro',
      'texto',
      'revista',
      'valores',
      'educación',
      'teatro',
      'social',
    ];
    const userBiographyWords = this.biography.split(' ');
    const filteredUserBiographyWords = userBiographyWords.filter((word) => {
      const cleanedWord = word.replace(/\.|,/, '').toLowerCase().trim();

      return keyWords.includes(cleanedWord);
    });

    return filteredUserBiographyWords.length;
  }

  getLocalization() {
    const availableLocalization = [
      'Barcelona',
      'Madrid',
      'Granada',
      'Vigo',
      'Palma de Mallorca',
    ];

    return this._findArrayItemInBiography(availableLocalization);
  }

  getRole() {
    const roles = ['community manager'];

    return this._findArrayItemInBiography(roles);
  }

  _findArrayItemInBiography(array) {
    for (let index = 0; index < array.length; index++) {
      const item = array[index];

      if (this.biography.includes(item)) {
        return item;
      }
    }

    return null;
  }
}

module.exports = User;
