import Mommifier from "../Mommifier";

describe('Mommifier Test', () => {
    test('should get empty string when input enpty string', () => {
        const mommyFilter = new Mommifier('');
        expect(mommyFilter.getResult()).toBe('');
    })
    test('should return itself when input a consonant string', () => {
        const mommyFilter = new Mommifier('b');
        expect(mommyFilter.getResult()).toBe('b');
    });
    test('should return mommy when input a vowel', () => {
        const mommyFilter = new Mommifier('a');
        expect(mommyFilter.getResult()).toBe('mommy');
    })
    test('should return itself when vowels length less then 30% total length', () => {
        const mommyFilter = new Mommifier('abbbb');
        expect(mommyFilter.getResult()).toBe('abbbb');
    })
    test('should return when vowels length more than 30% and not continuous', () => {
        const mommyFilter = new Mommifier('abcde');
        expect(mommyFilter.getResult()).toBe('mommybcdmommy');
    })
})