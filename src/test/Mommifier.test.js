import Mommifier from "../Mommifier";

describe('Mommifier Test', () => {
    test('should get empty string when input enpty string', () => {
        const mommyFilter = new Mommifier('');
        expect(mommyFilter.getResult())
    })
})