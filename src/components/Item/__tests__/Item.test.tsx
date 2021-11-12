
import {render, fireEvent} from '@testing-library/react';
import Item from '..';

const MOCK_ITEM = {
    name: "Name",
    description: "Description"
}

describe('Item tests', () => {
    
    it('renders correctly', () => {
        const mockSelected = jest.fn();

        const itemElement = render(<Item
            item={MOCK_ITEM} sendBackSelected={mockSelected} />);
        expect(itemElement).toBeInTheDocument();
    })
})