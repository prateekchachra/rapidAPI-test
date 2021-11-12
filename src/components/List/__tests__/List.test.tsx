
import {render} from '@testing-library/react';
import List from '..';
import dummyData from '../../../constants/dummyData.json';


describe('List tests', () => {
    
    it('renders correctly', () => {
        const listElement = render(<List jsonData={dummyData} />);
        expect(listElement).toBeInTheDocument();
    })
})