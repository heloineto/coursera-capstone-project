import { Formik } from 'formik';
import { render, screen } from '../../test-utils';
import Input from './Input';

describe('<Input />', () => {
  it('should contain a label and input', () => {
    render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Input label={'test'} />
      </Formik>
    );
    const input = screen.getByLabelText(/test/i);
    expect(input).toBeInTheDocument();
  });
});
