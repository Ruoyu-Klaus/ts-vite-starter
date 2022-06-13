import { calculator } from "../src/calculator";

describe("add", () => {
    it("should calculator of 1 and 2 equals to 3", () => {
        expect(calculator(1, 2)).toEqual(3);
    });
});