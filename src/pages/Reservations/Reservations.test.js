import { render, screen } from '../../test-utils';
import Reservations from './Reservations';

describe('<Reservations />', () => {
  it('should render all fields', () => {
    render(<Reservations />);

    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  });
});
