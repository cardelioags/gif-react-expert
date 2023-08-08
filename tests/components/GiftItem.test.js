import { render } from "@testing-library/react";
import { GifItem } from '../../src/components/GifItem';

/* eslint-disable no-undef */
describe('Pruebas en <GifItem />', () => {

    const title = 'Batman';
    const url = 'https://batman.gif'
    test('Debe de hacer match con snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect( container ).toMatchSnapshot()
    })
})