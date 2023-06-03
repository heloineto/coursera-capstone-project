import * as yup from 'yup';

const reservationSchema = yup.object({
  date: yup.string().required('Please select a date!'),
  time: yup.string().required('Please select a time!'),
  guests: yup
    .number()
    .min(1, 'There must be at least 1 guest!')
    .max(10, 'There can be max 10 guests!')
    .required('Please specify number of guests per table!'),
  occasion: yup.string().required('Please select occasion!'),
});

export default reservationSchema;
