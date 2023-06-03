import { render } from '../../test-utils';
import Layout from './Layout';

describe('<Layout />', () => {
  it('should render the header', () => {
    render(<Layout />);

    expect(document.querySelector('nav')).toBeInTheDocument();
  });

  it('should render the footer', () => {
    render(<Layout />);

    expect(document.querySelector('footer')).toBeInTheDocument();
  });
});
