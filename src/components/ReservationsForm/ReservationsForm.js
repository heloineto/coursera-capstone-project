import { Form, Formik } from 'formik';
import Input from '../Input/Input';
import Select from '../Select/Select';

function ReservationsForm(props) {
  return (
    <div className="relative grow flex -mb-[90px] w-full overflow-hidden">
      <img
        className="absolute -top-2 z-[-2] -left-1 h-40 w-full sm:w-full sm:h-full scale-110 object-cover sm:blur-[6px]"
        src="/assets/restaurant.jpg"
        alt="restaurant"
      />
      <Formik
        onClick={() => {}}
        initialValues={{
          date: '',
          time: '',
          guests: '',
          occasion: '',
        }}
      >
        <Form className="flex items-center justify-center pt-40 sm:py-32 grow">
          <div className="flex flex-col gap-5 w-screen sm:w-[600px] bg-white sm:shadow-lg sm:rounded-lg pb-20 p-5 sm:p-10">
            <Input label="Choose date" type="date" />
            <Select
              label="Choose time"
              options={['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']}
            />
            <Input
              label="Number of guests"
              type="number"
              placeholder="1"
              min="1"
              max="10"
            />
            <Select label="Occasion" options={['Birthday', 'Anniversary']} />
            <input type="submit" value="Make Your reservation" />
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default ReservationsForm;
