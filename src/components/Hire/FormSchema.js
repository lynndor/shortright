import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form  

export const HireForm = t.struct({
  destination: t.String,
  departure_location: t.String,
  number_of_travellers: t.Number
})