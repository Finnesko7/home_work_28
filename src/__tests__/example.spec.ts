import * as example from "../lib/examples";

describe('Math library', () => {
    test('sum function should return sum of two arguments', () => {
        expect(example.sum(1, 2)).toBe(3);
    });

    test('test conditionalSum', () => {
        expect(example.conditionalSum(1, 2)).toBe(3);
        expect(example.conditionalSum("1", 2)).toBe(3);
    });

    test('test conditionalReturn', () => {
        let value = "Finnesko";
        expect(example.conditionalReturn(7, "hi")).toBe(undefined);
        expect(example.conditionalReturn({'name': `${value}`}, "name")).toBe(value);
    });

    test('test toPromise', () => {
        let testObject = {
            name: "Finnesko",
            skill: "full-stack",
        };

        example.toPromise(testObject).then(data => {
            expect(example.toPromise(data)).toBe(testObject);
        });
    });

    test('test reversNumber', () => {
        expect(example.reversNumber(321)).toBe(123);
    });

    test('test alphabetical', () => {
        expect(example.alphabetical('webmaster')).toBe('abeemrstw');
    });

    test('test uppercaseFirstLatter', () => {
        expect(example.uppercaseFirstLatter('the quick brown fox')).toBe('The Quick Brown Fox');
    });
});