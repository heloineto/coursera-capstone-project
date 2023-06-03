import { render, screen } from '../../test-utils';
import Testimonials, { testimonials } from './Testimonials';

describe('<Testimonials />', () => {
  it('should render the testimonials properly', () => {
    render(<Testimonials />);

    testimonials.forEach((testimonial) => {
      expect(screen.getByText(testimonial.name)).toBeInTheDocument();
      expect(screen.getByText(testimonial.review)).toBeInTheDocument();
    });
  });
});
