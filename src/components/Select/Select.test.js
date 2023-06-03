import { Formik } from 'formik';
import { render, screen } from '../../test-utils';
import Select from './Select';

describe('<Select />', () => {
  it('should contain a label and select', () => {
    render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Select label="test" options={['test1', 'test2', 'test3']} />
      </Formik>
    );
    const select = screen.getByLabelText(/test/i);
    expect(select).toBeInTheDocument();
  });
});
