import { render, screen } from '../../test-utils';
import Hero from './Hero';

describe('<Hero />', () => {
  it('should contain a title and subtitle', () => {
    render(<Hero />);

    expect(screen.getByText('Little Lemon')).toBeInTheDocument();
    expect(screen.getByText('Chicago')).toBeInTheDocument();
  });

  it("should contain a 'Reserve a Table' button", () => {
    render(<Hero />);

    expect(screen.getByText('Reserve a Table')).toBeInTheDocument();
  });
});
