import { render, screen } from '../../test-utils';
import About from './About';

describe('<About />', () => {
  it('has a title and subtitle', () => {
    render(<About />);

    expect(screen.getByText('Little Lemon')).toBeInTheDocument();
    expect(screen.getByText('Chicago')).toBeInTheDocument();
  });
});
