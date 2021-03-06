import { child, appendChild, nodesToArray } from '../';

describe('child()', () => {

    it('can find a child in an element', () => {
        const host = document.createElement('div');
        const element = document.createElement('h1');

        appendChild(element, host);

        const found = child(host, 'h1');

        expect(nodesToArray(found)[0]).toBeInstanceOf(HTMLHeadingElement);
    });

});
