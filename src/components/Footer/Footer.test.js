import { render, screen } from '../../test-utils';
import Footer, { footerSections } from './Footer';

describe('<Footer />', () => {
  it('renders all sections properly', () => {
    render(<Footer />);
    footerSections.forEach((section) => {
      expect(screen.getByText(section.label)).toBeInTheDocument();
      section.links.forEach((link) => {
        expect(screen.getByText(link.label)).toBeInTheDocument();
      });
    });
  });
});
