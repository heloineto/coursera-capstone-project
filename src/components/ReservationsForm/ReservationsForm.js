import { Formik } from 'formik';
import Input from '../Input/Input';
import Select from '../Select';
import reservationSchema from './reservationSchema';

function ReservationsForm() {
  return (
    <div className="relative grow flex -mb-[90px] w-full overflow-hidden">
      <img
        className="absolute -top-2 z-[-2] -left-1 h-40 w-full sm:w-full sm:h-full scale-110 object-cover sm:blur-[6px]"
        src="/assets/restaurant.jpg"
        alt="restaurant"
      />
      <Formik
        initialValues={{
          date: '',
          time: '',
          guests: '',
          occasion: '',
        }}
        validationSchema={reservationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, handleChange, values }) => (
          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-center pt-40 sm:py-32 grow"
          >
            <div className="flex flex-col gap-7 w-screen sm:w-[600px] bg-white sm:shadow-lg sm:rounded-lg pb-20 p-5 sm:p-10">
              <Input
                label="Choose date"
                type="date"
                name="date"
                onChange={handleChange}
                value={values.date}
              />
              <Select
                label="Choose time"
                options={['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']}
                name="time"
                onChange={handleChange}
                value={values.time}
              />
              <Input
                label="Number of guests"
                type="number"
                placeholder="1"
                min="1"
                max="10"
                name="guests"
                onChange={handleChange}
                value={values.guests}
              />
              <Select
                label="Occasion"
                options={['Birthday', 'Anniversary']}
                name="occasion"
                onChange={handleChange}
                value={values.occasion}
              />
              <input
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                type="submit"
                value="Make Your reservation"
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default ReservationsForm;
