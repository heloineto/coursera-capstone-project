import { render, screen } from '../../test-utils';
import Header, { navLinks } from './Header';

describe('<Header />', () => {
  it('renders all nav links properly', () => {
    render(<Header />);
    navLinks.forEach((navLink) => {
      expect(screen.getByText(navLink.label)).toBeInTheDocument();
    });
  });
});
