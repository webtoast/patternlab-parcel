import { sum } from '../modules/sum.js';

describe('Returns the sum', () => {
    it('when provided 1 and 2', () => {
        expect(sum(1, 2)).toBe(3);
    });
});

describe('Returns the sum', () => {
    it('when provided 5 and -4', () => {
        expect(sum(5, -4)).toBe(1);
    });
});

describe('Returns 0', () => {
    it('when provided 0 and 0', () => {
        expect(sum(0, 0)).toBe(0);
    });
});
