import { render, screen } from '../../test-utils';
import Specials, { specials } from './Specials';

describe('<Specials />', () => {
  it('should render the specials properly', () => {
    render(<Specials />);

    specials.forEach((special) => {
      expect(screen.getByText(special.title)).toBeInTheDocument();
      expect(screen.getByText(special.price)).toBeInTheDocument();
      expect(screen.getByText(special.description)).toBeInTheDocument();
    });
  });
});
