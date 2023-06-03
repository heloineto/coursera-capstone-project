import { render, screen } from '../../test-utils';
import ReservationsForm from './ReservationsForm';

describe('<ReservationsForm />', () => {
  it('should render all fields', () => {
    render(<ReservationsForm />);

    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  });
});
