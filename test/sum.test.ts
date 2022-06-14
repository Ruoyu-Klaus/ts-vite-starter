import { sum } from '../src/sum';

describe('add', () => {
	it('should calculator of 1 and 2 equals to 3', () => {
		expect(sum(1, 2)).toEqual(3);
	});
});
