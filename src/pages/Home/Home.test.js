import { render } from '../../test-utils';
import Home from './Home';

describe('<Home />', () => {
  it('should render the home page', () => {
    render(<Home />);

    expect(document.querySelector('h1')).toHaveTextContent('Little Lemon');
    expect(document.querySelector('h2')).toHaveTextContent('Specials');
  });
});
