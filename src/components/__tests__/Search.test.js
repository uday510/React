
import {render} from '@testing-library/react';
import Body from '../Body';
import MOCK_DATA from "../mocks/mockResListData.json";
/**
 * @jest-environment jsdom
 *
 */

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it('Should render the body component with search button', () => {

    render(<Body/>);
});